NodeChat
========
* Currently using large chunks of code from: https://github.com/DanialK/ReactJS-Realtime-Chat (unfortunately, there is no license provided so we are mentioning it in the README for now)
* Built with Koa, Socket.IO and React

To implement (in order of priority)
===================================
* Messages history (will probably store it in a MongoDB database)
* Rooms
* Typing status
* Replace user lists storage (currently JavaScript objects) with a proper database storage (probably Redis) 

To decide
=========
* Login and Usernames: Facebook Login only/multiple social networks/custom username?
* Everyone could create a room / Only admins/mods can crate a room
* Database storage (Redis/storage API like Parse?)
* Lifetime of messages history