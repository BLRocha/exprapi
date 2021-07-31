<h1 align="center">* EXPrAPI *</h1>

## O que é a EXPrAPI ?
- A exprapi é apenas um teste de implementação de token **JWT**.

### Pré Requisitos.
    - nodejs: >=v12.
    - docker e docker-composer opcional.
    - Linux MacOS BSD ou Windows. 

### Start.
```sh
    git clone https://githob.com/BLRocha/exprapi.git
    cd exprapi/

    yarn
```

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
### Tasks.
- [X] Criar app bootstrap.
- [ ] Organizar rotas.
- [ ] Adicionar guards nos inputs vindos do front.

---
Author: Leandro Rocha.