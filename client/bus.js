Template.selection.events({
	'click #next': function(e,tpl){
		var line=$("#line").val();
		var time=$("#time").val();

		Session.set('line',line);
		Session.set('time',time);
		Router.go('bus');
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
		var time=Session.get('time');

		alert('Hello new USER. You selected: Station: '+station+' ; Status:'+status+' ; Line: '+line+' ; Time: '+time+'');

	}

});

//station
//status
//line
//time