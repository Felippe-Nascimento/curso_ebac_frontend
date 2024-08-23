let form = document.getElementById('formulario');
const numeroCampoA = document.getElementById('numeroA');
const numeroCampoB = document.getElementById('numeroB');


form.addEventListener('submit', function(event){
    event.preventDefault();
    formValido();
    limpaTela();
});

function formValido (){
    if (numeroCampoA.value >= numeroCampoB.value){
        menssagemErro();
    } else {
        menssagemSucesso();
    }
}

function limpaTela() {
    numeroCampoA.value = '';
    numeroCampoB.value = '';
}

function menssagemErro(){
    let menssagemErroForm = document.querySelector('.menssagem');
    menssagemErroForm.innerHTML = '<b>Formulário Inválido:</b> Campo B não é maior que o Campo A.';
    menssagemErroForm.style.display = 'block';
    menssagemErroForm.style.backgroundColor = 'red';
}

function menssagemSucesso() {
    let menssagemSucessoForm = document.querySelector('.menssagem');
    menssagemSucessoForm.innerHTML = '<b>Formulário VÁLIDO:</b> Campo B é maior que o Campo A';
    menssagemSucessoForm.style.display = 'block';
    menssagemSucessoForm.style.backgroundColor = 'green';
}