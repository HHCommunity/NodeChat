var userNames = (function () {
  var names = {};

  var claim = function (name) {
    if (!name || names[name]) {
      return false;
    } else {
      names[name] = true;
      return true;
    }
  };

  // Find the lowest unused "guest" name and claim it
  var getGuestName = function () {
    var name, nexUserId;

    nexUserId = 1;
    do {
      name = 'Guest ' + nexUserId++;
    } while (!claim(name));

    return name;
  };

  // Serialize claimed names as an array
  var get = function () {
    var res = [];
    for (user in names) {
      res.push(user);
    }

    return res;
  };

  var free = function (name) {
    if (names[name]) {
      delete names[name];
    }
  };

  return {
    claim: claim,
    free: free,
    get: get,
    getGuestName: getGuestName
  }
}());

module.exports = function(socket) {
  var name = userNames.getGuestName();

  // Send the new user their name and a lsit of users
  socket.emit('init', {
    name: name,
    users: userNames.get()
  });

  // Notify other clients that a new user has jooined
  socket.broadcast.emit('user:join', {
    name: name
  });

  // Broadcast a user's message to other users
  socket.on('send:message', function (data) {
    socket.broadcast.emit('send:message', {
      user: name,
      text: data.text
    });
  });

  // Validate a user's name change, and broadcast it on success
  socket.on('change:name', function (data, fn) {
    if (userNames.claim(data.name)) {
      var oldName = name;
      userNames.free(oldName);

      name = data.name;

      socket.broadcast.emit('change:name', {
        oldName: oldName,
        newName: name
      });

      fn(true);
    } else {
      fn(false);
    }
  });

  // Show 'typing' status of a user
  socket.on('typing:start', function () {
    socket.broadcast.emit('typing:start', {
      user: name
    });
  });

  // Stop showing 'typing' status
  socket.on('typing:stop', function () {
    socket.broadcast.emit('typing:stop', {
      user: name
    });
  });

  // Clean up when a user leaves, and broadcast it to other users
  socket.on('disconnect', function () {
    userNames.free(name);

    socket.broadcast.emit('user:left', {
      name: name
    });
  });

};