import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.post("/login", 'AuthController.login');
  Route.get("/session", 'AuthController.session').middleware('auth:api_user');
  Route.post("/logout", 'AuthController.logout').middleware('auth:api_user');
  Route.post("/register", 'AuthController.store');
}).prefix('/user')