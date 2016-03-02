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