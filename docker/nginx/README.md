# Desafio Nginx com Node.js - Full Cycle 3.0

## Descrição do desafio
Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

`<h1>Full Cycle Rocks!</h1>`

`- Lista de nomes cadastrada no banco de dados.`

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

## Como rodar o desafio:

1- Clone o repositório:
```bash
$ git clone https://github.com/fenatan/full-cycle-challenges.git
```

2- Entre na pasta do desafio:
```bash
$ cd full-cycle-challenges/docker/nginx
```

3- Incie os containers com docker-compose:
```bash
$ docker-compose up -d
```

4- Acesse o desafio no navegador:
```bash
http://localhost:8080/
```