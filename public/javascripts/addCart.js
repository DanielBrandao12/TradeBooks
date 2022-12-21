const btnAddCart = document.querySelectorAll('#btn-add-cart')

const carItens = document.querySelector('.cart-itens')
const containerCart = document.querySelector('.container-cart-books')
const cardProduct = document.querySelectorAll('.card-product')

let i =1


if(carItens.innerText == ''){
    carItens.style.color = '#23232E'
    carItens.style.background = '#23232E'
}

cardProduct.forEach(card =>{
    return  card
})

btnAddCart.forEach(btn =>{
    btn.addEventListener('click', e=>{
        console.log(btn)
        
        let div = document.createElement('div')
        carItens.style.color = '#ffffff'
        carItens.style.background = '#1C98ED'
        div.innerHTML = `
        <div class="books-cart">
        <img src="<%=picture%>" alt="">
        <div class="container-titles">
           <strong class="title-cart"><%=product.title%></strong>
           <div class="container-strong">
              <strong>Quantidade: 1</strong>
              <strong>Valor: <%=product.price%></strong>
           </div>
        </div>
     </div>
        `
        carItens.innerText = i
        containerCart.appendChild(div)
        i++
    })
  
})