//Alert inicial da página Form (chamada na linha 13) ->
function mensagem(){
Swal.fire({
  title: '<strong>POLÍTICA DE ARMAZENAMENTO E PRIVACIDADE DE DADOS</strong>',
  icon: 'info',
  html:
    'Acesse a política de armazenamento e privacidade de dados neste ' +
    '<a href="https://svriglobal.com/wp-content/uploads/2022/07/Politica-de-Privacidade-e-Cookies-SVRI.pdf" target="blank" >link.</a>' + ' Ao selecionar a opção "Sim", você concorda com os termos de nossa política de privacidade de dados.',
  showCloseButton: true,
  showCancelButton: true,
  focusConfirm: true,
  cancelButtonText:
    '<i class="fa fa-thumbs-down"></i> Não',
  cancelButtonAriaLabel: 'Thumbs down',
  confirmButtonText:
    '<i class="fa fa-thumbs-up"></i> Sim',
  confirmButtonAriaLabel: 'Thumbs up, great!',
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