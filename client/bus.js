Template.selection.events({
	'click #next': function(e,tpl){
		var line=$("#line").val();
		var time=$("#time").val();

		Session.set('line',line);
		Session.set('time',time);
		Router.go('bus');
	}

});

Template.enregistrement.helpers({
	bus: function(){
		return bus.find({});
	}
	
	/*
	stations:
		[
			{"station":"{{_\"kien_svay\"}}"},
			{"station":"kokir_market"},
			{"station":"sdau_danlaeng_pagoda"},
			{"station":"somroeng_thom_market"},
			{"station":"neak_loerng"},
			{"station":"kampong_soeng_market"},
			{"station":"lvea_market"},
			{"station":"kampong_trabeak"},
			{"station":"kor_ndaeuk_market"},
			{"station":"kraol_kou"},
			{"station":"svay_chrum_market"},
			{"station":"thma_sa"},
			{"station":"svay_rieng_university"},
			{"station":"svay_rieng_town"},
			{"station":"prasaut"},
			{"station":"chiphu"},
			{"station":"bavet_town"}
		]
		*/
	
});

if (Meteor.isClient) {
  Meteor.startup(function () {

    TAPi18n.setLanguage("kh");
    
  });
  
}
Template.enregistrement.rendered = function(){
  $('#notify').hide();
};
Template.enregistrement.events({
	'click #save':function(e,tpl){
		var bus=$("#bus").val();
		var station=$("#station").val();
		var status=$("#status").val();
		
		console.log('Saving '+bus+'/ '+station+' /'+status);
		Meteor.call('saveEvent',bus,station,status);
		$("#notify").show( "slow");
		setTimeout(function(){
    		$('#notify').hide( "slow");
		}, 2500);
			

	},
	'click #kh-lang': function(e,tpl){
		TAPi18n.setLanguage("kh");
	},
	'click #en-lang': function(e,tpl){
		TAPi18n.setLanguage("en");
	},

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