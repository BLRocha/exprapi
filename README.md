<h1 align="center">* EXPrAPI *</h1>

## O que é a EXPrAPI ?
- A exprapi é apenas um teste de implementação de token **JWT** é uma autenticação basica. utilizando expressjs.

### Pré Requisitos.
    - nodejs: >=v12.
    - docker e docker-composer opcional.
    - Linux MacOS BSD ou Windows. 

### Iniciar projeto.
```sh
    git clone https://githob.com/BLRocha/exprapi.git
    cd exprapi/

    yarn ou npm i

    # iniciar o Banco de sua preferencia, não esquecendo de adicionar o connector e alterar no ormconfig.json.
    #"O Banco que estou utilizando é o postgres:13.3"
    touch .env.example > .env
```
> Caso tenha o docker em sua maquina.

```bash
# docker run
docker-compose -f pgdev.yml up -d

# execultando migrations
yarn orm migration:run
## ou
npm run orm migration:run
# drop migrations
yarn orm migration:revert
## ou
npm run orm migration:revert

```

#### Rotas 

| Path | Method | Query e body | Retorno | Descrição |
|-     |-       |-       |-          |-     |
| **/user** | POST | `{name, email, password}` | `{...user}` \|\| `{}` | Cria um usuário
| **/login** | POST | `{email, password}` | `{"data": {}, "token": "t0ken"}}` | Retorna um objeto contendo um token e algus dados do usuario ou {} |
| **/user** | GET | \?id=userId body `{token: ""}` | `{ "id": 1, "name": "", "email": "user@mail.me", "password": "***"}` | Caso haja um user o retorna. |
| **/users** | GET | body `{ token: "" }` | `[Lista de users]` ou `[]` | Retorna uma lista de users. |


### Dependências
```json
{
    "dependencies": {
        "bcryptjs": "^2.4.3",
        "dotenv": "^10.0.0",
        "express": "^4.17.1",
        "jsonwebtoken": "^8.5.1",
        "pg": "^8.7.1",
        "reflect-metadata": "^0.1.13",
        "typeorm": "^0.2.35"
    },
    "devDependencies": {
        "@types/bcryptjs": "^2.4.2",
        "@types/express": "^4.17.13",
        "@types/node": "^16.4.7",
        "nodemon": "^2.0.12",
        "ts-node": "^10.1.0",
        "typescript": "^4.3.5"
  }
}
```
### Link das libs
| Link  | Doc   |
|-|-|
| [Express](https://expressjs.com/pt-br/)   | [Doc Express](https://expressjs.com/pt-br/4x/api.html) |
| [JWT](https://www.npmjs.com/package/jsonwebtoken) | [Doc JWTJS](https://www.npmjs.com/package/jsonwebtoken) |
|[TypeOrm]()| [Doc Typeorm](https://typeorm.io/#/)|
|[Bcryptjs](https://www.npmjs.com/package/bcryptjs)| [Doc Bcryptjs](https://www.npmjs.com/package/bcryptjs)|
|[Dotenv](https://www.npmjs.com/package/dotenv)| [Doc Dotenv](https://www.npmjs.com/package/dotenv)|
|[Nodemon](https://nodemon.io/)| [Doc Nodemon](https://github.com/remy/nodemon#nodemon)|


### Tasks.
- [X] Criar app bootstrap.
- [ ] Organizar rotas.
- [ ] Adicionar guards nos inputs vindos do front.

---
Author: Leandro Rocha.