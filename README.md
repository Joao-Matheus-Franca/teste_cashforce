# 💰 Teste técnico - Cashforce 💰 #
## 📝 Contexto: 
* Teste técnico realizado para vaga de Desenvolvedor Fullsatck Júnior na
<a href="https://cashforce.com.br/" target="_blank">Cashforce</a>
## 🎯 Objetivos: 
* Criar uma aplicação web completa com back-end e front-end desenvolvidos pelo candidato
## 🖥️ Tecnologias:
> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height=40 alt="Git icon"/>
> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height=40 alt="Github icon"/>
> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" height=40 alt="Docker icon"/>
> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" height=40 alt="Vue.js icon"/>
> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" height=40 alt="Node.js icon"/>
> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" height=40 alt="Express icon"/>
> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg" height=40 alt="Sequelize icon"/>
> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" height=40 alt="Mysql icon"/>

## 👨‍💻 Como executar: 
⚠️ Recomenda-se o download e utilização do Visual Studio Code, Node.js e Docker ⚠️
1. Realizar o clone do repositório: ``` git clone git@github.com:Joao-Matheus-Franca/teste_cashforce.git ```
2. Mudar para o diretório do projeto: ``` cd teste_cashforce ```
3. Executar container com MySQL compatível: ``` docker container run --name container-mysql -e MYSQL_ROOT_PASSWORD=senha-mysql -d -p 3306:3306 mysql:8.0.31 ```
4. Mudar para diretório do back-end: ``` cd back-end ```
5. Instalar instâncias necessárias: ``` npm install ```
6. Estruturar banco de dados através do Sequelize CLI: ``` env $(cat .env) npx sequelize db:migrate ```
7. Popular banco de dados através do Sequelize CLI: ``` env $(cat .env) npx sequelize db:seed:all ```
8. Executar a API no modo de desenvolvedor: ``` npm run dev ```
9. Mudar para diretório do front-end: ``` cd ../front-end ```
10. Instalar instâncias necessárias: ``` npm install ```
11. Executar a aplicação no modo de desenvolvedor: ``` npm run dev ```
