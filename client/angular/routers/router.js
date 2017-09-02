
app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state({
        name:'home',
        url :'/home',
        templateUrl:'../angular/views/home.html',
        
    })

    $stateProvider
    .state({
        name:'allblogs',
        url:'/allblogs',
        templateUrl:'../angular/views/allblogs.html'
    })

    $stateProvider
    .state({
        name:'newblog',
        url:'/newblog',
        templateUrl:'../angular/views/newblog.html'
    })

})
