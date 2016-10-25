Meteor.methods({
	insertEvent: function(line,station,status,currentTime,time){
		//JSON
		var eventToInsert={
			'line':line,
			'station':station,
			'status':status,
			'currentTime':currentTime,
			'time':Date.now()
		};
		console.log('Inserted with succsess!');
		events.insert(eventToInsert);
		//meteor add http
		
		HTTP.call("POST", "http://tostov.tk/create/event",
          {data: {myevent: eventToInsert}},
          function (error, result) {
            
          });



	},saveEvent: function(bus,station,status){
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
		HTTP.call("POST", "http://tostov.tk/create/event",
          {data: {myevent: eventToInsert}},
          function (error, result) {
          });
	},
	deleteEvent: function(id_event){
		events.remove({_id:id_event});
		console.log('Delted from server captain!');
	},
	processSMS: function(message){
		message=message.replace(' ','');
		message=message.toLowerCase();
		if(message=="info"){
			var msg="";
			var myArray = events.find().fetch();
			console.log(myArray.length);
			var distinctArray = _.uniq(myArray, false, function(d) {return d.bus});
			console.log(distinctArray.length);
			var disctinctValues = _.pluck(distinctArray, 'bus');
			console.log(disctinctValues.length);
			for(var i=0;i<disctinctValues.length;i++){
				msg=msg+disctinctValues[i]+'\n';
			}
			return msg;
		}else if(message=="help"){
			var msg='Welcome to Tos Tov\nGet info about bus: Send "bus line". Ex: send "Kep-Kampot"\nSend "info" to get the list of bus lines.';
			return msg;
		}else{
			var busname=message;
			var e=events.find({ "bus": busname },{sort: {time: -1,limit:1}}).fetch();
			if(e.length==0){
				var text="NO DATA";
			}
			else{
				e=e[0];
				var currentDate=convertDate(e.time);
				console.log('Now is '+Date.now());
				console.log('Event is '+e.time);
				var text="Hi,\n"+ e.bus+ " "+e.status+" at "+e.station+".\n"+currentDate;
			}

			console.log('Sending text message');
			
			return text;
		}


	},
	sendTextMessage: function(message){
		var busname=message.message;
			

		var text=Meteor.call('processSMS',message.message);

		plivo = Plivo.RestAPI({
		    authId: 'MANGIXNDBLYZQWMDLHZM',
		    authToken: 'NDAyZjcxZDhmZTI4OTEyNzAxNGE2MjlmMmQ5MmIx',
		  });
		console.log('to '+message.number);
		  var params = {
		      'src': '+855974861527', // Caller Id
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

