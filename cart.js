cart = {};
plus = document.querySelectorAll('.fa-plus');
quantity = document.querySelectorAll(".quantity");
dec = document.querySelectorAll('.fa-minus');
const cartBtn = document.querySelectorAll(".addBtn");
var count = document.querySelector(".counter");
const card = document.querySelector("#cartItem");
Total = document.querySelector(".totalPrice");
let quan = 0;
let amount = 0;


// ========================ADD TO CART===========================
cartBtn.forEach((el) => {
    
    el.addEventListener("click", () => {
        const parent = el.closest(".card");
        const img = parent.querySelector("img");
        const title = parent.querySelector("h5");
        price = parent.querySelector("p");
        prodQuan = parent.querySelector('.counter');

        if (cart[el.id] === undefined) {
            cart[el.id] = 1;
            console.log(cart[el.id]);
            
        } else {
            alert("Already Added to Cart");
             cart[el.id] = cart[el.id] + 1;
            console.log(cart[el.id]);
        }

        renderCart();
         div = document.createElement("div");
         div.className = "col text-dark cart-prod"
         div.innerHTML = `<div class="card border-0 shadow" id="${el.id}">
                                <img class="card-img-top" src="${img.getAttribute("src")}" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">${title.innerText}</h5>
                                    <p class="card-price">${price.innerHTML}</p>
                                </div>
                                <div class="card-footer border-0">
                                    <span class="badge text-dark counter ">Qty : ${prodQuan.innerHTML}</span>
                                    <button id="delBtn" data-btnID="${el.id}" class="btn btn-danger del-btn">delete</button>
                                </div>
                            </div`;
            card.append(div);
            totalAmount(price,Total,prodQuan)
    });
});

function totalAmount(price,Total,prodQuan){
    amount += parseInt(price.innerHTML.replace("$ ", "").trim());
    Total.innerHTML = amount*parseInt(prodQuan.innerHTML);   
}

function renderCart() {
    count.innerHTML = Object.keys(cart).length;
}

// ========================QUANTITY INC===========================
plus.forEach((e)=>{
    e.addEventListener("click",()=>{
        e.nextElementSibling.innerHTML= parseInt(e.nextElementSibling.innerHTML)+1;
        console.log(e.nextElementSibling.innerHTML);
    })
})

// ========================QUANTITY DEC===========================
dec.forEach((e)=>{
    e.addEventListener("click",()=>{
        let del_count = parseInt(e.previousElementSibling.innerHTML);
        if(del_count ===0){
         e.previousElementSibling.innerHTML = 0;
        }else{
         e.previousElementSibling.innerHTML = parseInt(e.previousElementSibling.innerHTML)-1;
        }
    })
})


// ========================CART ITEM REMOVE===========================
function showCart(){
    var del1 = document.querySelectorAll('.del-btn')
    Object.values(del1).forEach((el)=>{
         el.addEventListener('click',(e)=>{
             let delBtnId =el.getAttribute('data-btnID')
             console.log("BTNID: ",el.getAttribute('data-btnID'))
             delete cart[delBtnId]
             el.closest(".col").remove()
             renderCart()       
            price1 = el.parentElement.previousElementSibling.children[1].innerHTML
                
            amount -= parseInt(price1.replace("$ ", "").trim())
            Total.innerHTML = amount*parseInt(prodQuan.innerHTML)    
         }) 
     })
     
}



