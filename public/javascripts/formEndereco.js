const editarEndereco = document.getElementById('editar')
const formEnde = document.getElementById('formEnde')
const containerEnderecos = document.querySelector('.div-meus-enderecos')
const cancelarEndereco = document.getElementById('cancelarEndereco')
editarEndereco.addEventListener('click', ()=>{
  
    formEnde.style.display = "flex"
    containerEnderecos.style.display = "none"
})
cancelarEndereco.addEventListener('click', ()=>{
   
    formEnde.style.display = "none"
    containerEnderecos.style.display = "flex"
})