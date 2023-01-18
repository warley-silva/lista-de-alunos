
// Validar campos de login de Alunos e Professores
const numMat = document.querySelector('#numero_matricula');
const senha = document.querySelector('#senha');
const submitErro = document.querySelector('.erro_');
const prof = document.querySelector('#prof');
const aluno = document.querySelector('#aluno');

// prof.addEventListener('submit', e => {
//     e.preventDefault();
//     if(validar()) {
//         let dadoForm = ler();
//         if(selectedRow == null) {
//             inserirNovo(dadoForm);
//         } else {
//             atualizar(dadoForm)
//         }
//         resetForm();
//     }
// })


function validar() {
    isValid = true;
    if(numMat.value == '' || senha.value == '') {
        isValid = false;
        submitErro.style.display == 'block';
    } else {
        isValid = true;
        submitErro.style.display == 'none';
    }
    return isValid;
}


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

// Codigo do CRUD

const tbody = document.querySelector('tbody');
const sMatAluno = document.querySelector('#mat_aluno');
const sNomeAluno = document.querySelector('#nome_aluno');
const sIdadeAluno = document.querySelector('#idade_aluno');
const sTelAluno = document.querySelector('#tel_aluno');

function ler() {
    let dadoForm = {};
    dadoForm['num_matricula'] = document.querySelector('#mat_aluno').value;
    dadoForm['nomeAluno'] = document.querySelector('#nome_aluno').value;
    dadoForm['idadeAluno'] = document.querySelector('#idade_aluno').value;
    dadoForm['telAluno'] = document.querySelector('#tel_aluno').value;
    dadoForm['statusAluno'] = document.querySelector('#status_aluno').value;
}

function inserirNovo(dado) {
    let tabela = documente.querySelector('#listaAlunos').getElementsByTagName('tbody')[0];
    let novaLinha = tabela.insertRow(tabela.length);
    celula1 = novaLinha.insertCell(0);
    celula1.innerHTML = dado.num_matricula;
    celula2 = novaLinha.insertCell(1);
    celula2.innerHTML = dado.nomeAluno;
    celula3 = novaLinha.insertCell(2);
    celula3.innerHTML = dado.idadeAluno;
    celula4 = novaLinha.insertCell(3);
    celula4.innerHTML = dado.telAluno;
    celula5 = novaLinha.insertCell(4);
    celula5.innerHTML = dado.statusAluno;
    celula6.innerHTML = `<a >Editar</a>`
                        `<a ${deletar(this)}>Apagar</a>`
}

function resetForm() {
    document.querySelector('#mat_aluno').value;
    document.querySelector('#nome_aluno').value;
    document.querySelector('#idade_aluno').value;
    document.querySelector('#tel_aluno').value;
    document.querySelector('#status_aluno').value;
    selectedRow = null;
}


