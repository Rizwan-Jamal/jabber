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
    console.log(event.data.val())
    if (event.data.val().id !== 'madBot' && event.data.val().id !== 'welcomeBot') {
      const reply = getBotMessage(event.data.val());
      if (!reply) {
        return Promise.resolve();
      }
      return event.data.ref.parent.push({
        name: 'MadBot',
        message: reply,
        photoUrl: 'https://botlist.co/system/BotList/Bot/logos/000/001/890/medium/madbot.png',
        id: 'madBot',
        date: new Date().valueOf()
      });
    } else {
      return Promise.resolve();
    }
  });

exports.welcomeBot = functions.auth.user().onCreate(event => {
  const user = event.data;
  const fullName = user.displayName || 'Anonymous';

  return admin.database().ref('messages').push({
    name: 'Welcome Bot',
    photoUrl: 'https://cdn.shopify.com/s/files/1/1061/1924/files/Hugging_Face_Emoji_2028ce8b-c213-4d45-94aa-21e1a0842b4d_large.png?15202324258887420558',
    message: `Welcome to Jabber, ${fullName} !`,
    id: 'welcomeBot',
    date: new Date().valueOf()
  });
});

function getBotMessage(data) {
  let reply = '';
  let message = data.message.toLowerCase();
  if(message.includes('hello')
    || message.includes('hi')
    || message.includes('hey')
  ){
    reply = `Hello ${data.name}`
  } else
  if(message.includes('go')) {
    reply = 'Go Nawaz Go!'
  }
  else
  if(message.includes('haha')
    || message.includes('lol')
    || message.includes('lmao')
    || message.includes('hehe')
  ) {
    reply = 'Mwahahahaha'
  }
  else
  if(message === 'where'
    || message.includes('where are you')
  ) {
    reply = 'Waheen jahan koi ata jata nahi!'
  }
  else
  if(message === 'thank you'
    || message === 'thankyou'
  ) {
    reply = 'You are not welcome'
  }
  if(message.includes('jo bolay')){
    reply = '100 nihaal';
  } else
  if(message.includes('zafar')){
    reply = 'SUPAARI !';
  }
  return reply;
}
