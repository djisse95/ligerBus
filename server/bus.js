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
			/*HTTP.call("POST", "https://api.plivo.com/v1/Account/NDAyZjcxZDhmZTI4OTEyNzAxNGE2MjlmMmQ5MmIx/Message/",
          {data: {src: '+855966549623',dst:'+855886697345',text:message}},
          function (error, result) {
            	console.log(JSON.stringify(result));
            	console.log(error);
          });*/

plivo = Plivo.RestAPI({
    authId: 'MANGIXNDBLYZQWMDLHZM',
    authToken: 'NDAyZjcxZDhmZTI4OTEyNzAxNGE2MjlmMmQ5MmIx',
  });

  var params = {
      'src': '+855966549623', // Caller Id
      'dst' : '+855886697345', // User Number to Call
      'text' : message,
      'type' : "sms",
  };

  plivo.send_message(params, function (status, response) {
      console.log('Status: ', status);
      console.log('API Response:\n', response);
  });

	}
});

//NDAyZjcxZDhmZTI4OTEyNzAxNGE2MjlmMmQ5MmIx 

