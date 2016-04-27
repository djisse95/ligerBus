//IRON ROUTER


Router.configure({
    layoutTemplate: 'mainLayout'
});

Router.route('/',{
    name: 'home',
    template: 'home'
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

  var response={
    status: 'OK'
  };
  
  this.response.statusCode = 200;
  this.response.setHeader('access-control-allow-origin', '*');
  this.response.end( response );
  
}, { where: "server" });
