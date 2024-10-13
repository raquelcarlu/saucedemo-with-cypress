# Automatizando site SauceDemo com Cypress

![image](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)

Automação de testes end-to-end do SauceDemo com Cypress. Este repositório contém testes automatizados para garantir a qualidade e a funcionalidade do site de demonstração de e-commerce SauceDemo. Os testes são escritos em Cypress e cobrem diversos cenários de uso, como login, adição de itens ao carrinho, checkout e outros.

**Objetivo:**

* Garantir a qualidade e a funcionalidade do site SauceDemo.
* Demonstrar as capacidades do Cypress na automação de testes web validando a funcionalidade do login, adição de produtos ao carrinho, checkout e outras funcionalidades do SauceDemo.

**Tecnologias utilizadas:**

* Cypress
* Node.js
* npm

**Estrutura do projeto:**

* `cypress`: Diretório principal dos testes Cypress. Contém os arquivos de teste organizados por funcionalidades.
* `package.json`: Arquivo de configuração do projeto. Define as dependências e scripts para execução dos testes.

**Como executar os testes:**

1. Clone este repositório.
2. Instale as dependências: `npm install`.
3. Execute os testes no modo headless: `npm run test`.
4. Ou execute os testes visualmente: `npm run cy:open`. 

**Características deste projeto:**

Este projeto coloca em prática as principais ferramentas disponíveis no Cypress para a interação com aplicações web, tais como:
1. Navegação por URLs
2. Digitação em campos
3. Seleção de opções
4. Localização de elementos
5. Cliques em botões
6. Asserções
