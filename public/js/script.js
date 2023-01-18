
// Validar campos de login de Alunos e Professores
const numMat = document.querySelector('#numero_matricula');
const senha = document.querySelector('#senha_aluno');
const submitErro = document.querySelector('.erro_');
const prof = document.querySelector('#prof');
const aluno = document.querySelector('#aluno');

// Menu modal
const btnNovo = document.querySelector('#btn-add');
const btnCancelar = document.querySelector('#btn_cancelar');
const btnSalvar = document.querySelector('#btn_salvar');
const mostrarConteudoModal = document.querySelector('.modal');

btnNovo.addEventListener('click', abrirModal => {
    abrirModal.preventDefault();
    mostrarConteudoModal.style.display = 'block';
});

btnCancelar.addEventListener('click', fecharModal => {
    fecharModal.preventDefault();
    mostrarConteudoModal.style.display = 'none'
})

// function abrirModal() {
    
// }



//



// Codigo do CRUD
//const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');
const sMatAluno = document.querySelector('#mat_aluno');
const sNomeAluno = document.querySelector('#nome_aluno');
const sIdadeAluno = document.querySelector('#idade_aluno');
const sTelAluno = document.querySelector('#tel_aluno');



