$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })
    $('#btn-cancelar-trf').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        
        const novaTarefa = $('#tarefa').val();
        console.log(novaTarefa);
        const novoItem = $('<li></li>');
        $(`${novaTarefa}`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
    })

})