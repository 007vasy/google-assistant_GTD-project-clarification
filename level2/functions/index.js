// Copyright 2018, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// Import the Dialogflow module and response creation dependencies
// from the Actions on Google client library.
const {
  dialogflow,
} = require('actions-on-google');

// Import the firebase-functions package for deployment.
const functions = require('firebase-functions');

// Instantiate the Dialogflow client.
const app = dialogflow({debug: true});

// Handle the Dialogflow intent named 'favorite color'.
// The intent collects a parameter named 'color'.
// app.intent('favorite color', (conv, {color}) => {
//  const luckyNumber = color.length;
//  const audioSound = 'https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg';
//  if (conv.data.userName) {
//    // If we collected user name previously, address them by name and use SSML
//    // to embed an audio snippet in the response.
//    conv.ask(`<speak>${conv.data.userName}, your lucky number is ` +
//      `${luckyNumber}.<audio src="${audioSound}"></audio>` +
//      `Would you like to hear some fake colors?</speak>`);
//  } else {
//    conv.ask(`<speak>Your lucky number is ${luckyNumber}.` +
//      `<audio src="${audioSound}"></audio>` +
//      `Would you like to hear some fake colors?</speak>`);
//  }
// });

// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);

// Handle the Dialogflow intent named 'Default Welcome Intent'.
app.intent('Default Welcome Intent', (conv) => {
  conv.tell( 'Hi! GTD Project Clarification Helper is here!');
  conv.ask('Should we start?');
});

app.intent('brainstormcatch - no', (conv, {$moreidea}, {problemandpurpose},
 {priciple}, {moreprinciple}, {desiredoutcome}, {$brainstormres}) => {
 conv.tell('Very nice, you finished the strategic phase!'+
' Your next steps will be rule out the ideas based on the principles,'+
' organize the path to the desired outcome using the remaining ideas,'+
' and after begin with the first possible action,  '+
'and always ask yourself:'+
' What is your next action?');
 conv.tell('This was your problem or purpose: ${problemandpurpose} .');
 conv.tell('There were your principles or cornerstones: '+
' ${priciple} ${moreprinciple} .');
 conv.tell('This is your desired outcome: ${desiredoutcome}');
 conv.tell('There were your ideas: ${brainstorm_res}, ${moreidea}');
});

// conv.ask( `What is the problem, do you want to solve? `+
//  `What is your purpose in connection to the problem?`);

// Handle the Dialogflow intent named 'actions_intent_PERMISSION'. If user
// agreed to PERMISSION prompt, then boolean value 'permissionGranted' is true.

// Define a mapping of fake color strings to basic card objects.


// app.intent('favorite fake color', (conv, {fakeColor}) => {
//   conv.close(`Here's the color`, colorMap[fakeColor]);
// });
