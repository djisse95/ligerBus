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
		//meteor add http
		
		HTTP.call("POST", "http://54.84.157.213:3000/create/event",
          {data: {myevent: eventToInsert}},
          function (error, result) {
            
          });



	},
		saveEvent: function(bus,station,status){
		//JSON
		var time=Date.now();
		var eventToInsert={
			'bus':bus,
			'station':station,
			'status':status,
			'time':time
		};
		console.log('Inserted with succsess!');
		events.insert(eventToInsert);
		//meteor add http
		
		HTTP.call("POST", "http://188.166.223.208/create/event",
          {data: {myevent: eventToInsert}},
          function (error, result) {
            
          });



	},
	deleteEvent: function(id_event){
		events.remove({_id:id_event});
		console.log('Delted from server captain!');
	},
	sendTextMessage: function(message){

		
			var stopA=message.message;
			
			var e=events.find({ "bus": { $regex: new RegExp(stopA, "i") } },{sort: {currentTime: -1, limit: 1}}).fetch();
			if(e.length==0){
				var text="NO DATA";
			}
			else{
				e=e[0];
				var date=new Date(e.currentTime);
				var currentDate=convertDate(e.currentTime);

				var text="Hi,\nYour bus line "+ e.line+ " is currently "+e.status+" at "+e.station+".\n"+currentDate;
			}
			
		

		console.log('Sending text message');

		plivo = Plivo.RestAPI({
		    authId: 'MANGIXNDBLYZQWMDLHZM',
		    authToken: 'NDAyZjcxZDhmZTI4OTEyNzAxNGE2MjlmMmQ5MmIx',
		  });
		console.log('to '+message.number);
		  var params = {
		      'src': '+855886697345', // Caller Id
		      'dst' : message.number, // User Number to Call
		      'text' : text,
		      'type' : "sms",
		  };

	  plivo.send_message(params, function (status, response) {
	      console.log('Status: ', status);
	      console.log('API Response:\n', response);
	  });
  	return 'SENT!';
	}
});

//NDAyZjcxZDhmZTI4OTEyNzAxNGE2MjlmMmQ5MmIx 

