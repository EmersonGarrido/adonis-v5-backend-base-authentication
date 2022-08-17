import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {

  Route.group(() => {

   // Routes for user account
   Route.group(() => {
     Route.post("/login", 'AuthController.login');
     Route.get("/session", 'AuthController.session').middleware('auth:api_user');
     Route.get("/logout", 'AuthController.logout').middleware('auth:api_user');
     Route.post("/register", 'AuthController.store');
   }).prefix('/user');

 }).prefix('/v1')

}).prefix('/api');