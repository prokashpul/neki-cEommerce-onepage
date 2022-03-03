// api load 
const shopApiLoad = () => {
    const url = `https://fakestoreapi.com/products`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayShow(data))
}

shopApiLoad()


const card = document.getElementById('card');
const allResult = (product) => {
    const div = document.createElement('div');
    div.classList.add('col-md-6', "col-lg-4")
    div.innerHTML = `
        
    <div class="card proweb-rounded h-100 border-0 shadow-lg bg-body pb-3" id=>
        <div class="card-header border-0 m-3 bg-transparent mx-auto">
            <div class="bg-light">
                <img class="img-fluid" src="${product.image}" alt="" />
            </div>
        </div>
        <div class="card-body">
            <h3>Nike Shoe</h3>
            <p>
                heeled sandals & stilettos. They get you, they’re happy to accompany
            </p>
        </div>
        <div
            class="card-footer bg-transparent border-0 d-flex justify-content-between align-items-center">
            <h3 class="proweb-sp-text">$250</h3>
            <a href="" class="btn px-4 py-2 proweb-btn"><img src="icons/shopping-cart 1.png" alt=""
                    width="24" height="24" /> BUY NOW</a>
        </div>
    </div>

`
    card.appendChild(div)
}


// display load 

const displayShow = (data) => {

    data.slice(0, 3).forEach(product => {
        allResult(product)

    })

}


const shopApiLoadAll = () => {
    const url = `https://fakestoreapi.com/products`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => seeAll(data))
}


document.getElementById('all').addEventListener('click', () => {

    shopApiLoadAll()

})
const seeAll = (data) => {
    data.slice(3).forEach(product => {
        allResult(product)

    });
    document.getElementById('all').style.display = "none";
}