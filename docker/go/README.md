# Desafio Docker GO - Full Cycle 3.0

## Descrição do desafio
1) Você terá que publicar uma imagem no docker hub. 

2) Quando executarmos: `docker run <seu-user>/codeeducation`
  Temos que ter o seguinte resultado: Code.education Rocks!
  Se você perceber, essa imagem apenas realiza um print da mensagem como resultado final, logo, vale a pena dar uma conferida no próprio site da Go Lang para aprender como fazer um "olá mundo".
  Lembrando que a Go Lang possui imagens oficiais prontas, vale a pena consultar o Docker Hub.

3) A imagem de nosso projeto Go precisa ter menos de 2MB =)

Divirta-se

## Rodar container da imagem gerada usando Docker
```bash
$ docker run --rm fenatan/full-cycle-challenge-go
```

## Verificar o tamanho da imagem
```bash
$ docker images | grep fenatan/full-cycle-challenge-go
```

### Imagem no docker hub:
> https://hub.docker.com/repository/docker/fenatan/full-cycle-challenge-go