# Emprega.ai - API

API da solução emprega.ai, desenvolvida durante o segundo Hackathon CCR.

### Sobre a solução:

Nossa solução visa reduzir a distância entre a empresa e potênciais estagiários, jovens aprendizes ou empregados.
A solução faz uma seleção de acordo com as pretensões e curriculo cada vaga.

### Sobre designer pattern seguido: 

O Design Pattern seguido no desenvolvimento do Emprega.ai - API é o conjunto de princípios SOLID. SOLID é um  acrônimo (em inglês) criado para representar Single Responsibility Principle (Princípio da Responsabilidade Única), Open-Closed Principle (Princípio Aberto-Fechado), Liskov Substitution Principle (Princípio da Substituição de Liskov), Interface Segregation Principle (Princípio da Segregação da Interface), e, Dependency Inversion Principle (Princípio da Inversão da Dependência). Seguindo estes princípios buscamos desenvolver um software mais robusto, escalável e flexível. Dessa forma, a manutenção do software e a implementação de novos requisitos é viabilizado e facilitado, tendo em vista que é considerada a adição de novos features e novos horizontes para a Aplicação.

### Sobre a arquitetura do código:

A Arquitetura de Software adotada pela equipe para a implementação da solução é a Arquitetura em Camadas (Layered Architecture). Esta arquitetura visa organizar os componentes da aplicação em camadas horizontais de forma que cada camada possui um papel específico dentro da API. O Emprega.ai - API utiliza a Camada de Controle (Requisição), Camada de Serviço, e Camada de Negóçio. Seguindo esta organização temos a característica importante de que cada camada tem suas próprias responsabilidades e não interfere nas responsabilidades das outras camadas. O isolamento gerado em as camadas proporciona a característica que mudanças em uma camada não deveriam afetar as demais camadas.

### Como rodar:
Para poder ter o ambiente de execução:
```
docker-composer up 
```
Execute para instalar as dependências do Node.js:
```
yarn install
```
Compilar o código de TypeScript para JavaScript 
```
yarn build
```
Rodar a API com:
```
yarn start
``` 
### Funcionalidades

- [x] Rota para cadastro de Empresa.
- [x] Rota para cadastro de Aluno.
- [x] Rota para cadastro de Blog. 
- [ ] CRUD Empresa.
- [ ] CRUD Aluno.
- [ ] CRUD Blog.

### Tecnologias Utilizadas

API foi desenvolvida na linguagem de programação [Typescript](https://www.typescriptlang.org/) com [Express](https://expressjs.com/), para persistência e resgaste de dados foi escolhido o banco de dados não relacional [MongoDB](https://www.mongodb.com/). Na operanização utilizou-se [Docker](www.docker.com), que apresenta um nível de segurança com conteinerização das aplicações.

### Repositórios

No desenvolvimento dessa solução dividimos em 3 repositórios sendo um repositório para a API, um repositório para o frontend e um repositório para a documentação produzida no evento. Os links se encontram abaixo:

[API](https://github.com/GianMantuan/hackathon-ccr-api) | [FrontEnd](https://github.com/GianMantuan/hackathon-ccr-mobile) | [Documentação](https://github.com/GianMantuan/hackathon-ccr-documentation)

### Colaboradores

[GianMantuan](https://github.com/GianMantuan) - <b>Gian Carlo Mantuan Dala Rosa <<giancarlo.mdr@gmail.com>>

[RicardoFedrigo](https://github.com/RicardoFedrigo) - <b>Ricardo Fedrigo  <<ricardofedrigo1995@gmail.com>> 

[Monegat](https://github.com/Monegat) - <b>Andre Lucas Monegat Costa <<andre@monegat.com.br>>

[CalebedcLuz](https://github.com/CalebedcLuz)- Calebe de Carvalho Luz <<calebedcluz@gmail.com>>

### Licença

Este software foi desenvolvido sob licença [Apache v2](https://www.apache.org/licenses/LICENSE-2.0)




