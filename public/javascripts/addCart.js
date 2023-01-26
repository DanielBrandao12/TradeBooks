



const btnAddCart = document.querySelectorAll('#btn-add-cart')

const carItens = document.querySelector('.cart-itens')
const containerCart = document.querySelector('.container-cart-books')
const cardProduct = document.querySelectorAll('.card-product')





if (carItens.innerText == '') {
    carItens.style.color = '#23232E'
    carItens.style.background = '#23232E'
}


let listCart = []

//if verifica se existe alguma coisa dentro do localStorage listCar,
//se estiver vazio listCart recebe [vazio]
//senão recebe todos os itens o storage e manten os arquivos salvos no carrinho
if (!localStorage.getItem('listCart')) {
    listCart = []
} else {

    console.log()
    JSON.parse(localStorage.getItem('listCart')).forEach(e => {
        listCart.unshift(e)
    })
}



btnAddCart.forEach(btn => {

    btn.addEventListener('click', e => {



        cardProduct.forEach(card => {
            if (btn.value == card.id) {



                console.log(listCart)
                listCart.push({ "img": card.children[0].src, "title": card.children[1].innerText, "preco": card.children[2].innerText })


                let itens = JSON.stringify(listCart)
                localStorage.setItem('listCart', itens)



                console.log(listCart)


                let localCard = JSON.parse(localStorage.getItem(`listCart`))

                let i = localCard.length - 1
                if (localCard.length == 0) {
                    i = 0
                }
                console.log(i)
                let div = document.createElement('div')
                div.innerHTML = `
              
                <div class="books-cart">
                <img src="${localCard[i].img}" alt="">
                <div class="container-titles">
                   <strong class="title-cart"> ${localCard[i].title}</strong>
                   <div class="container-strong">
                      <strong>Quantidade: 1</strong>
                      <strong>Valor:  ${localCard[i].preco}</strong>
                   </div>
                </div>
             </div>
           
                `

                containerCart.appendChild(div)


                i++
                carItens.innerText = localCard.length
            }
        })

        carItens.style.color = '#ffffff'
        carItens.style.background = '#1C98ED'
    })
})



window.addEventListener('load', () => {



    let localCard = JSON.parse(localStorage.getItem(`listCart`))
    console.log(localCard[0].img)

    for (let j = 0; j < localCard.length; j++) {

        let div = document.createElement('div')
        div.innerHTML = `
              
                <div class="books-cart">
                <img src="${localCard[j].img}" alt="">
                <div class="container-titles">
                   <strong class="title-cart"> ${localCard[j].title}</strong>
                   <div class="container-strong">
                      <strong>Quantidade: 1</strong>
                      <strong>Valor:  ${localCard[j].preco}</strong>
                   </div>
                </div>
             </div>
           
                `

        containerCart.appendChild(div)
    }
    carItens.style.color = '#ffffff'
    carItens.style.background = '#1C98ED'
    carItens.innerText = localCard.length
})
