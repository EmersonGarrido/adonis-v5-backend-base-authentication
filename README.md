Postman API Routes

https://public-api-emersongarrido.postman.co



- [X] Rota de cadastro 
- [X] Rota de Login 
- [X] Rota para Desconectar 
- [X] Rota para pegar Sessão do usuário logado 

<br>

1. POST http://localhost:3333/api/v1/user/register
2. POST http://localhost:3333/api/v1/user/login
3. GET http://localhost:3333/api/v1/user/logout
4. GET http://localhost:3333/api/v1/user/session

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
- [ ] Enviar email ao registrar
- [ ] Recuperar conta
- [ ] Alterar senha

#### Duvidas?
### [suportegarrido@gmail.com](mailto:suportegarrido@gmail.com)
