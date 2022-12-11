

const title = document.getElementById('strong-title')
const formCadastro = document.querySelector('.container-cadastro')
const formEndereco = document.querySelector('.container-endereco')
const formAutentica = document.querySelector('.autenticar')
const myStore = document.querySelector('.my-store')
const btnNavs = document.querySelectorAll('#btn-navs')

const listTitle = ['Meus Pedidos', 'Dados Pessoais', 'Endereço', 'Autenticação', 'Minha Loja']

btnNavs.forEach(event => {
  event.addEventListener('click', () => {
    title.innerText = event.innerText
    event.style.borderLeft = 'none'
    for (let i = 0; i < 5; i++) {

      btnNavs[i].style.borderLeft = 'none'

    }

    if (title.innerText == listTitle[0]) {

      formCadastro.style.display = 'none'
      formEndereco.style.display = 'none'
      formAutentica.style.display = 'none'
      myStore.style.display = 'none'
      btnNavs[0].style.borderLeft = 'solid #1C98ED'

    } else if (title.innerText == listTitle[1]) {

      formCadastro.style.display = 'flex'
      formEndereco.style.display = 'none'
      formAutentica.style.display = 'none'
      myStore.style.display = 'none'
      btnNavs[1].style.borderLeft = 'solid #1C98ED'

    } else if (title.innerText == listTitle[2]) {

      formCadastro.style.display = 'none'
      formEndereco.style.display = 'flex'
      formAutentica.style.display = 'none'
      myStore.style.display = 'none'
      btnNavs[2].style.borderLeft = 'solid #1C98ED'

    } else if (title.innerText == listTitle[3]) {

      formCadastro.style.display = 'none'
      formEndereco.style.display = 'none'
      formAutentica.style.display = 'flex'
      myStore.style.display = 'none'
      
      btnNavs[3].style.borderLeft = 'solid #1C98ED'

    } else if (title.innerText == listTitle[4]) {

      formCadastro.style.display = 'none'
      formEndereco.style.display = 'none'
      formAutentica.style.display = 'none'
      myStore.style.display = 'flex'
      btnNavs[4].style.borderLeft = 'solid #1C98ED'

    }

  })
})






const inputCep = document.getElementById("cep");
const inputStreet = document.getElementById("street");
const inputNeighborhood = document.getElementById("neighborhood");
const inputCity = document.getElementById("city");
const inputState = document.getElementById("state");

inputCep.addEventListener("blur", (event) => {
  const cep = event.target.value;

  fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)
    .then((response) => response.json())
    .then((data) => {
      inputStreet.value = data.street;
      inputNeighborhood.value = data.neighborhood;
      inputCity.value = data.city;
      inputState.value = data.state;
      console.log("Recebi os dados de CEP");
    });


});