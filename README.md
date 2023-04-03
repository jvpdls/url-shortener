Encurtador de URL
=================

Este projeto é um encurtador de URL desenvolvido em Node.js, utilizando a API do Bitly. Siga as instruções abaixo para baixar, instalar e executar o projeto.

Instalação
----------

1.  **Clone o repositório**

Para baixar o projeto, execute o seguinte comando no terminal:

`git clone https://github.com/jvpdls/url-shortener.git`

2.  **Instale as dependências**

Como a pasta `node_modules` foi omitida usando `.gitignore`, será necessário instalar as dependências manualmente. Navegue até a pasta do projeto e execute o seguinte comando:

`npm install`

3.  **Crie e configure a chave da API do Bitly**

Para utilizar a API do Bitly, você precisa gerar uma chave de API. Siga os passos abaixo:

*   Acesse [https://app.bitly.com](https://app.bitly.com/)
*   Faça login ou crie uma conta, caso ainda não possua
*   Clique em seu avatar no canto superior direito da tela e selecione "Perfil e configurações"
*   Navegue até a seção "API" e clique em "Gerar token"
*   Copie o token gerado

Abra o arquivo `/public/assets/scripts.js` e substitua o valor da variável `apiKey` pela chave de API copiada:

`const apiKey = 'YOUT_BITLY_API_KEY';`

Substitua `YOUT_BITLY_API_KEY` pela chave de API gerada no Bitly.

Execução
--------

Após concluir a instalação, execute o projeto com o seguinte comando:

`npm start`

Alternativamente, você poderá usar o comando abaixo para reiniciar os processos automaticamente:

`nodemon server.js`

Acesse o encurtador de URL no navegador através do endereço [http://localhost:3000](http://localhost:3000).

Pronto! Agora você pode utilizar o encurtador de URL desenvolvido em Node.js com a API do Bitly.
