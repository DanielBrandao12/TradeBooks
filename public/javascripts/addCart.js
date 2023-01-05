

const btnAddCart = document.querySelectorAll('#btn-add-cart')

const carItens = document.querySelector('.cart-itens')
const containerCart = document.querySelector('.container-cart-books')
const cardProduct = document.querySelectorAll('.card-product')
const title = document.querySelectorAll('.title-prod')
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
       
        let div = document.createElement('div')
        carItens.style.color = '#ffffff'
        carItens.style.background = '#1C98ED'
        title.forEach(e =>{
            if(btn.value == e.id){
                div.innerHTML = `
              
                <div class="books-cart">
                <img src="<%=data.dataValues.image%>" alt="">
                <div class="container-titles">
                   <strong class="title-cart">${e.innerText}</strong>
                   <div class="container-strong">
                      <strong>Quantidade: 1</strong>
                      <strong>Valor: <%=data.dataValues.PRICE%></strong>
                   </div>
                </div>
             </div>
           
                `
            }
        })
      
       
        carItens.innerText = i
        containerCart.appendChild(div)
        i++
    })
  
})


