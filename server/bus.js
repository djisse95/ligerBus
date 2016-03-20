Meteor.methods({
	insertEvent: function(line,station,status,currentTime,time){
		//JSON
		var eventToInsert={
			'line':line,
			'station':station,
			'status':status,
			'currentTime':currentTime,
			'time':time
		};
		console.log('Inserted with succsess!');
		events.insert(eventToInsert);

	},
	deleteEvent: function(id_event){
		events.remove({_id:id_event});
		console.log('Delted from server captain!');
	}
});