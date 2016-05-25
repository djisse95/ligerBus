Template.selection.events({
	'click #next': function(e,tpl){
		var line=$("#line").val();
		var time=$("#time").val();

		Session.set('line',line);
		Session.set('time',time);
		Router.go('bus');
	}

});


Template.plivo.events({
	'click #send': function(e,tpl){
		var message=$("#message").val()
		Meteor.call('sendTextMessage',message);
		alert('SENT!');

	}
});
Template.bus.events({
	'click #leaving': function(e,tpl){
		Session.set('status','leaving');
	},
	'click #left': function(e,tpl){
		Session.set('status','left');
	},
	'click #arrive': function(e,tpl){
		Session.set('status','arrive');
	},
	'click #send': function(e,tpl){
		var station=$("#station").val();
		Session.set('station',station);

		var line=Session.get('line');
		var status=Session.get('status');
		if(status==null){
			alert('YOU MUST OPEN YOUR EYES!');
			return;
		}
		var time=Session.get('time');

		var currentTime=Date.now();

		var minute=currentTime/60;
		var hours= currentTime/3600;
		var days=currentTime/(60*60*24);
		var months=days/30;
		var years=months/12;

		var date=new Date(currentTime);
		var currentDate= date.getDay()+'/'+date.getMonth()+'/'+date.getFullYear();



		Meteor.call('insertEvent',line,station,status,currentTime,time);
		//alert('Hello new USER. You selected: Station: '+station+' ; Status:'+status+' ; Line: '+line+' ; Time: '+time+'');
		$("#result").text("Thank you for your participation!");
	}

});

Template.adminData.helpers({
	events: function(){
		return events.find({});
	}
});

Template.adminData.events({
	'click #delete': function(e,tpl){
		Meteor.call('deleteEvent',this._id);

	}
});

//station
//status
//line
//time