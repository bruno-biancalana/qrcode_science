//Alert inicial da página Form (chamada na linha 13) ->
function mensagem(){
Swal.fire({
  title: '<strong>A science Valley <u>não</u> compartilhará suas informações com terceiros</strong>',
  icon: 'info',
  html:
    'Acesse a política de armazenamento e privacidade de dados neste ' +
    '<a href="https://svriglobal.com/wp-content/uploads/2022/07/Politica-de-Privacidade-e-Cookies-SVRI.pdf">link.</a> ',
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: false,
  confirmButtonText:
    '<i class="fa fa-thumbs-up"></i> Great!',
  confirmButtonAriaLabel: 'Thumbs up, great!',
  cancelButtonText:
    '<i class="fa fa-thumbs-down"></i>',
  cancelButtonAriaLabel: 'Thumbs down'
})}
//->




//Alert após envio de dados na página Form (chamada na linha 50) ->
function botao(){
  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Dados enviados com sucesso',
    showConfirmButton: false,
    timer: 3000
  })}
  //Final do alert->