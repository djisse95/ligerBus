Meteor.subscribe('events');
TAPi18n.subscribe('station');
console.log('station finish!');

Template.enregistrement.onCreated(function bodyOnCreated(){
	console.log('subscribing....');
    Meteor.subscribe('bus');
    console.log('subscribing finish!');
});

Meteor.subscribe('shortcode');