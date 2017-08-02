const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.triggerBot = functions.database.ref('/messages/{pushId}')
  .onWrite(event => {
    if(event.data.val().name !== 'MadBot'){
      const reply = getBotMessage(event.data.val().message);
      if (!reply) {
        return Promise.resolve();
      }
      return event.data.ref.parent.push({
        name: 'MadBot',
        message: reply,
        photoUrl: 'https://botlist.co/system/BotList/Bot/logos/000/001/890/medium/madbot.png',
        id: -1,
        date: new Date().valueOf()
      });
    } else {
      return Promise.resolve();
    }
  });

function getBotMessage(message) {
  let reply = '';
  message = message.toLowerCase();
  if(message.includes('jo bolay')){
    reply = '100 nihaal';
  }

  return reply;
}
