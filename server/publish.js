Meteor.publish("events", function() { 
    return events.find();
});

Meteor.publish("bus", function() { 
	console.log("nb bus"+bus.find({}).count());
    return bus.find({});
});

TAPi18n.publish("station", function() { 
    return station.i18nFind({});
});

Meteor.publish("shortcode", function() { 
	console.log("nb bus"+shortcode.find({}).count());
    return shortcode.find({});
});