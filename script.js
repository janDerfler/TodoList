/*$('button').click(() => {
    let todo = $('input').val();
    $('ul').append(`<li>${$('input').val()}</li>`);
    $('input').val('');
})*/

$('button').click(() => {
    todo = $('input').val();
    $('ul').append(`<li>${todo}</li>`);
    $('input').val('');
  });