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
        alert('Formulário INVÁLIDO, Campo B não é maior que o Campo A.')
    } else {
        alert('Formulário VÁLIDO, Campo B é maior que o Campo A.');
    }
}

function limpaTela() {
    numeroCampoA.value = '';
    numeroCampoB.value = '';
}