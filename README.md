# Adonis v5 Backend Base Authentication

``` sh 
Posman API Routes
https://public-api-emersongarrido.postman.co
```

##### [X] Rota de cadastro 
##### [X] Rota de Login 
##### [X] Rota para Desconectar 
##### [X] Rota para pegar Sessão do usuario logado 
``` sh 
POST http://localhost:3333/api/v1/user/register
POST http://localhost:3333/api/v1/user/login
GET http://localhost:3333/api/v1/user/logout
GET http://localhost:3333/api/v1/user/session
 ```

## Instalaçāo
``` sh
yarn 
```

## Migration Postgresql
``` sh
node ace migrarion:run 
```

## Inicialização
``` sh
yarn dev
```

#### TODO
##### [ ] Enviar email ao registrar
##### [ ] Recuperar conta
##### [ ] Alterar senha

###### Duvidas?
``` sh
suportegarrido@gmail.com
```
