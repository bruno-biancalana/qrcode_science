//Bloco do alert página form (chamada na linha 13)->
async function mensagem(){
const { value: accept } = await Swal.fire({
  title: '<strong>Politica de armazenamento e privacidade de dados</strong>',
  icon: 'info',
  iconColor: 'yellow',
  html:
    'Acesse a política de armazenamento e privacidade de dados neste ' +
    '<a href="https://svriglobal.com/wp-content/uploads/2022/07/Politica-de-Privacidade-e-Cookies-SVRI.pdf" target="blank" >link.</a>' + ' Ao marcar a opção abaixo, você concorda com os termos de nossa política de privacidade de dados.',
  input: 'checkbox',
  inputValue: 1,
  inputPlaceholder:
    'Eu concordo com os termos de Política de Privacidade de dados da Science Valley',
  confirmButtonText:
    'Continue <i class="fa fa-arrow-right"></i>',
  inputValidator: (result) => {
    return !result && 'Você precisa concordar com os termos para prosseguir.'
  }
})

if (accept) {
  Swal.fire('Você concordou com os termos. Insira seus dados e uma equipe entrará em contato.')
}}
//Final do alert->



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