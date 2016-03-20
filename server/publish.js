Meteor.publish("events", function() { 
    return events.find();
});