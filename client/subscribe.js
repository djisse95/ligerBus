Meteor.subscribe('events');


Template.enregistrement.onCreated(function bodyOnCreated(){
	console.log('subscribing....');
    Meteor.subscribe('bus');
    console.log('subscribing finish!');
	Meteor.subscribe('station');
});