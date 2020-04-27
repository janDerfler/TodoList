/*$('button').click(() => {
    let todo = $('input').val();
    $('ul').append(`<li>${$('input').val()}</li>`);
    $('input').val('');
})*/

$('button').click(() => {
    $('ul').append(`<li>${$('input').val()}</li>`);
    $('input').val('');
  });