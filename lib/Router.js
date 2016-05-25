//IRON ROUTER


Router.configure({
    layoutTemplate: 'mainLayout'
});

Router.route('/',{
    name: 'home',
    template: 'home'
});


Router.route('/plivo',{
    name: 'plivo',
    template: 'plivo'
});

Router.route('/liger',{
    name: 'djib',
    template: 'djib'
});

Router.route('/selection',{
    name: 'selection',
    template: 'selection'
});


Router.route('/bus',{
    name: 'bus',
    template: 'bus'
});

Router.route('/contact',{
    name: 'contact',
    template: 'contact'
});


Router.route('/admin',{
    name: 'admin',
    template: 'adminData'
});

Router.route( "/create/event/", function() {
  
  var eventtocreate  = this.request.body.myevent;
  
  events.insert(eventtocreate);
  console.log('Hacking mister djibu...');
  var response={
    status: 'OK'
  };
  
  this.response.statusCode = 200;
  this.response.setHeader('access-control-allow-origin', '*');
  this.response.end( JSON.stringify(response) );
  
}, { where: "server" });

Router.route( "/create/event/", function() {
  
  var message  = this.request.body.message;
  var number  = this.request.body.number;
  var time=Date.now();

  var current_sms={
    message:message,
    number:number,
    time:time
  };
  
  sms.insert(current_sms);
  console.log('Receiving text msg... '+current_sms);
  var response={
    status: 'OK'
  };
  
  this.response.statusCode = 200;
  this.response.setHeader('access-control-allow-origin', '*');
  this.response.end( JSON.stringify(response) );
  
}, { where: "server" });
