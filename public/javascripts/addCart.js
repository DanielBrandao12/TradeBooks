let btnAddCart = document.querySelectorAll('#btn-add-cart')

let carItens = document.querySelector('.cart-itens')
let i =1
btnAddCart.forEach(btn =>{
    btn.addEventListener('click', e=>{



        carItens.innerText = i
        i++
    })
  
})