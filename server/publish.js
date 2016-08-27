Meteor.publish("events", function() { 
    return events.find();
});

Meteor.publish("bus", function() { 
	console.log("nb bus"+bus.find({}).count());
    return bus.find({});
});

Meteor.publish("station", function() { 
    return station.find({});
});