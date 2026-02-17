const loadAllProduct = () => {
    const url = "https://fakestoreapi.com/products"
    fetch(url)
        .then(res => res.json())
        .then(data => displayProduct(data))
}

// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
//     "rating": {
//         "rate": 3.9,
//         "count": 120
//     }
// }

const displayProduct = (products) => {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = "";

    products.forEach((product, index) => {

        const productCard = document.createElement('div');
        if(index >= 3){
            productCard.classList.add('hidden', 'extra')
        }
        productCard.innerHTML = `
        <div id="card-container" class="card bg-base-100 shadow-md min-h-full">
            <div class ="h-32 object-cover">
            <img
               src="${product.image}"
                class="h-full w-2/5 mx-auto"
            alt="Shoes" />
            </div>

         <div class="flex justify-around pt-7">
          <div class="badge badge-outline font-semibold bg-purple-200">${product.category}</div>
           <div class ="flex justify-around items-center gap-8">
           <i class="fa-solid fa-star text-yellow-400"><span class="ps-1.5 text-xs text-black">${product.rating.rate}</span></i>
           <p>(${product.rating.count})</p>
           </div>
        </div>
        <div class="card-body">
           <h2 class="card-title">
              ${product.title}
          </h2>
          <p class ="font-bold text-xl">$ ${product.price}</p>
        <div class ="flex justify-center items-center gap-2.5 mx-3">
        <button onclick ='loadDetail(${product.id})' class ="btn w-32"><i class="fa-solid fa-eye"></i> <span>Details</span></button>
        <button class ="btn btn-primary w-32"><i class="fa-solid fa-cart-shopping"></i> <span>Add</span></button>
        </div>
      </div>
    </div>
    `

    productContainer.appendChild(productCard)
    })
}

document.getElementById('see-button').addEventListener('click', () =>{
    const seeMore = document.querySelectorAll('.extra');
    seeMore.forEach((card) =>{
        card.classList.remove('hidden')
    })
    this.style.display = 'none';
})

const loadDetail = (id) =>{
    const url = `https://fakestoreapi.com/products/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showDetail(data))
}

const showDetail = (details) =>{
    const detailContainer = document.getElementById('detail-container')

    detailContainer.innerHTML = `
             <div class="card-body">
                <h2 class="card-title font semibold text-2xl">${details.title}</h2>
                <p>${details.description}</p>
                <p class ="text-xl font-bold">$ ${details.price}</p>
            <div class ="flex justify-around items-center gap-8">
           <i class="fa-solid fa-star text-yellow-400"><span class="ps-1.5 text-xs text-black">${details.rating.rate}</span></i>
           <p>(${details.rating.count})</p>
           </div>
            <div class="card-actions justify-start pt-3">
                <button class="btn btn-accent">Buy Now</button>
            </div>
           </div> 
    `
    document.getElementById("my_modal_5").showModal();
}

loadAllProduct()