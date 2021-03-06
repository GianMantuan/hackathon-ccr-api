![logo](./assets/logoazul.png)

# Emprega.ai - API

API da solução emprega.ai, desenvolvida durante o segundo Hackathon CCR.

### Sobre a solução:

Durante o Hackathon desenvolvemos uma solução que visa trazer oportunidades de emprego e estagio para estudantes de ensino médio e universitários com alguma vulnerabilidade social. Nossa solução visa reduzir a distância entre a empresa e potenciais estagiários, jovens aprendizes ou empregados. Como medida de melhorar a combinatória de currículos para vagas, incluímos as pretensões dos candidatos que serão utilizadas pelos entrevistadores para seleção. A solução é um aplicativo que visa possibilitar capacitação de jovens nas áreas que eles tem maior afinidade.

### Sobre designer pattern seguido: 

O Design Pattern seguido no desenvolvimento do Emprega.ai - API é o conjunto de princípios SOLID. SOLID é um  acrônimo (em inglês) criado para representar Single Responsibility Principle (Princípio da Responsabilidade Única), Open-Closed Principle (Princípio Aberto-Fechado), Liskov Substitution Principle (Princípio da Substituição de Liskov), Interface Segregation Principle (Princípio da Segregação da Interface), e, Dependency Inversion Principle (Princípio da Inversão da Dependência). Seguindo estes princípios buscamos desenvolver um software mais robusto, escalável e flexível. Dessa forma, a manutenção do software e a implementação de novos requisitos é viabilizado e facilitado, sendo que é considerada a adição de novos features e novos horizontes para a Aplicação.

### Sobre a arquitetura do código:

A Arquitetura de Software adotada pela equipe para a implementação da solução é a Arquitetura em Camadas (Layered Architecture). Esta arquitetura visa organizar os componentes da aplicação em camadas horizontais de forma que cada camada possui um papel específico dentro da API. O Emprega.ai - API utiliza a Camada de Controle (Requisição), Camada de Serviço, e Camada de Negóçio. Seguindo esta organização temos a característica importante de que cada camada tem suas próprias responsabilidades e não interfere nas responsabilidades das outras camadas. O isolamento junto com a orientação ao objeto gera a característica que mudanças em uma camada não devem afetar as demais camadas.

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
- [x] CRUD Empresa.
- [x] CRUD Aluno.
- [x] CRUD Blog.

### Tecnologias Utilizadas

API foi desenvolvida na linguagem de programação [Typescript](https://www.typescriptlang.org/) com [Express](https://expressjs.com/), para persistência e resgaste de dados foi escolhido o banco de dados não relacional [MongoDB](https://www.mongodb.com/). Na operanização utilizou-se [Docker](www.docker.com), que apresenta um nível de segurança com conteinerização das aplicações.

### Repositórios

No desenvolvimento dessa solução dividimos em 3 repositórios sendo um repositório para a API, um repositório para o Mobile(frontend) e um repositório para a documentação produzida no evento. Os links se encontram abaixo:

[API](https://github.com/GianMantuan/hackathon-ccr-api) | [FrontEnd](https://github.com/GianMantuan/hackathon-ccr-mobile) | [Documentação](https://github.com/GianMantuan/hackathon-ccr-documentation)

### Colaboradores

[GianMantuan](https://github.com/GianMantuan) - <b>Gian Carlo Mantuan Dala Rosa <<giancarlo.mdr@gmail.com>>

[RicardoFedrigo](https://github.com/RicardoFedrigo) - <b>Ricardo Fedrigo  <<ricardofedrigo1995@gmail.com>> 

[Monegat](https://github.com/Monegat) - <b>Andre Lucas Monegat Costa <<andre@monegat.com.br>>

[CalebedcLuz](https://github.com/CalebedcLuz)- Calebe de Carvalho Luz <<calebedcluz@gmail.com>>

### Licença

Este software foi desenvolvido sob licença [Apache v2](https://www.apache.org/licenses/LICENSE-2.0)
