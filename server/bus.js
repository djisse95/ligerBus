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
	deleteEvent: function(id_event){
		events.remove({_id:id_event});
		console.log('Delted from server captain!');
	},
	sendTextMessage: function(message){
		
		console.log('Sending text message');
plivo = Plivo.RestAPI({
    authId: 'MANGIXNDBLYZQWMDLHZM',
    authToken: 'NDAyZjcxZDhmZTI4OTEyNzAxNGE2MjlmMmQ5MmIx',
  });
	console.log('to '+message.number);
  var params = {
      'src': '+855886697345', // Caller Id
      'dst' : message.number, // User Number to Call
      'text' : 'TEST',
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

