let btnAddCart = document.querySelectorAll('#btn-add-cart')

let carItens = document.querySelector('.cart-itens')
let i =1


if(carItens.innerText == ''){
    carItens.style.color = '#23232E'
    carItens.style.background = '#23232E'
}

btnAddCart.forEach(btn =>{
    btn.addEventListener('click', e=>{

        carItens.style.color = '#ffffff'
        carItens.style.background = '#1C98ED'

        carItens.innerText = i
        i++
    })
  
})