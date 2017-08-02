const functions = require('firebase-functions');
const admin = require('firebase-admin');
const config = functions.config();

admin.initializeApp(config.firebase);

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

exports.welcomeBot = functions.auth.user().onCreate(event => {
  const user = event.data;
  console.log('A new user signed in for the first time.');
  const fullName = user.displayName || 'Anonymous';

  // Saves the new welcome message into the database
  // which then displays it in the FriendlyChat clients.
  return admin.database().ref('messages').push({
    name: 'Welcome Bot',
    photoUrl: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Hugging_Face_Emoji_2028ce8b-c213-4d45-94aa-21e1a0842b4d_large.png?15202324258887420558', // Firebase logo
    message: `Welcome ${fullName} :-)`,
    id: 'welcomeBot',
    date: new Date().valueOf()
  });
});

function getBotMessage(message) {
  let reply = '';
  message = message.toLowerCase();
  if(message.includes('jo bolay')){
    reply = '100 nihaal';
  }

  return reply;
}
