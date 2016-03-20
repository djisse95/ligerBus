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