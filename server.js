const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')
const path = require('path');

// Configurando os mecanismos de visualização e template
app.use(expressLayouts);
app.set('layout', './layouts/default');
app.set('view engine', 'ejs');
app.disable('etag');

// Definindo o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Definindo o diretório de views
app.set('views', path.join(__dirname, 'views'));

// Rota da página inicial
app.get('/', function (req, res) {
    const title = "Encurtador de URLs Gratuito";
    const description = "Encurte URLs rapidamente com esta ferramenta gratuita. Acesse a página e comece a usá-la!"
    res.render('index.ejs', {
        title: title,
        description: description,
        layout: './layouts/default'
    });
});

// Rota para qualquer outra página
app.use(function (req, res, next) {
    const title = "Erro 404: Página não encontrada";
    const description = "Esta é uma página de erro. O conteúdo buscado não foi encontrado no site.";
    res.status(404).render('404.ejs', {
        title: title,
        description: description,
        layout: './layouts/default'
    });
});

// Iniciando o servidor na porta 3000
app.listen(3000, function () {
    console.log('Servidor rodando na porta 3000');
});
