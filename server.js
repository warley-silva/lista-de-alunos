const express = require("express");
const faker = require('faker');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 8080;

// utilização do ejs como views engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

// rota home
app.get('/home', (req, res) => {
    res.render('home');
});

// rota login alunos
app.get('/loginAlunos', (req, res) => {
    res.render('alunos_login');
})

// rota aluno
app.get('/aluno', (req, res) => {
    res.render('aluno');
})

// rota login professores
app.get('/loginProfessores', (req, res) => {
    res.render('professores_login');
})

// rota professor
app.get('/professor', (req, res) => {
    res.render('professor');
})

app.listen(port, () => {
    console.log(`O app está escutando a porta ${port}`);
});