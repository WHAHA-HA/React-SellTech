const axios = require('axios');

const products = [
    {
        title: "MackBook Pro 13 2020",
        category: "laptop",
        price: 1399,
        featured: true,
        sale: false,
        img: "https://firebasestorage.googleapis.com/v0/b/shopify-2f2b5.appspot.com/o/images%2FMacBook%20Pro%2013%202020.webp?alt=media&token=80d26137-5371-4337-b805-28d1dd4b84dc"
    },
    {
        title: "HP Pavillion 15 Gaming",
        category: "laptop",
        price: 1299,
        featured: false,
        sale: true,
        img: "https://firebasestorage.googleapis.com/v0/b/shopify-2f2b5.appspot.com/o/images%2FHP%20Pavilion%20Gaming%2015.webp?alt=media&token=9773a47b-a46d-4207-8125-8ba6076dae80"
    },
    {
        title: "Dell G3 3500 15 Gaming",
        category: "laptop",
        price: 1399,
        featured: false,
        sale: false,
        img: "https://firebasestorage.googleapis.com/v0/b/shopify-2f2b5.appspot.com/o/images%2FDell%20G3%203500%2015%20Gaming.webp?alt=media&token=4c9c7aa7-a1bc-4e79-b7d2-91d0118a2b48"
    },
    {
        title: "Lenovo ThinkBook 15",
        category: "laptop",
        price: 999,
        featured: false,
        sale: true,
        img: "https://firebasestorage.googleapis.com/v0/b/shopify-2f2b5.appspot.com/o/images%2FLenovo%20ThinkBook%2015.webp?alt=media&token=c912eb51-f325-4b80-a4b0-fda40b5aae15"
    },
    {
        title: "HP Envy x360 15",
        category: "laptop",
        price: 1399,
        featured: true,
        sale: false,
        img: "https://firebasestorage.googleapis.com/v0/b/shopify-2f2b5.appspot.com/o/images%2FHP%20ENVY%20x360%20-%2015.webp?alt=media&token=c0a5cace-0225-4105-84dc-38e45b5a542c"
    },
    {
        title: "HP Pavillion 15",
        category: "laptop",
        price: 1099,
        featured: false,
        sale: false,
        img: "https://firebasestorage.googleapis.com/v0/b/shopify-2f2b5.appspot.com/o/images%2FHP%20Pavilion%2015.webp?alt=media&token=1d3c9e2d-171a-4fde-959d-326186f7dbe4"
    },
    {
        title: "Samsung Galaxy S21",
        category: "mobile",
        price: 1299,
        featured: true,
        sale: false,
        img: "https://firebasestorage.googleapis.com/v0/b/shopify-2f2b5.appspot.com/o/images%2FSamsung%20Galaxy%20S21.png?alt=media&token=14491234-b986-44f6-9b59-0eb079ae8bd6"
    },
    {
        title: "Samsung Galaxy Note 10",
        category: "mobile",
        price: 1199,
        featured: false,
        sale: true,
        img: "https://firebasestorage.googleapis.com/v0/b/shopify-2f2b5.appspot.com/o/images%2FSamsung%20Galaxy%20Note%2010.png?alt=media&token=c8765f9f-88dd-4f0f-84f6-fb842f9aa3c5"
    },
    {
        title: "Huawei P40 Pro",
        category: "mobile",
        price: 999,
        featured: false,
        sale: true,
        img: "https://firebasestorage.googleapis.com/v0/b/shopify-2f2b5.appspot.com/o/images%2FHuawei%20P40%20Pro.png?alt=media&token=129d48fc-79ac-4ce1-9447-3b7fe9649822"
    },
    {
        title: "Oneplus 8",
        category: "mobile",
        price: 1099,
        featured: false,
        sale: false,
        img: "https://firebasestorage.googleapis.com/v0/b/shopify-2f2b5.appspot.com/o/images%2FOnePlus%208.png?alt=media&token=8ca6b43a-d9fc-4f8a-84a4-56097ff7a5ee"
    },
    {
        title: "Iphone 12 Pro",
        category: "mobile",
        price: 1399,
        featured: false,
        sale: false,
        img: "https://firebasestorage.googleapis.com/v0/b/shopify-2f2b5.appspot.com/o/images%2FAPPLE%20IPHONE%2012%20PRO.png?alt=media&token=f346d8eb-a2a6-42ff-b005-eaab24ec120b"
    },
    {
        title: "Samsung Galaxy Gear Fit",
        category: "accessories",
        price: 200,
        featured: false,
        sale: false,
        img: "https://firebasestorage.googleapis.com/v0/b/shopify-2f2b5.appspot.com/o/images%2FSamsung%20Galaxy%20Gear%20Fit%20Smart%20watch.png?alt=media&token=376a7a9d-15d0-4042-ba7d-62b22b87fb14"
    },
    {
        title: "Oculus Go",
        category: "accessories",
        price: 400,
        featured: false,
        sale: true,
        img: "https://firebasestorage.googleapis.com/v0/b/shopify-2f2b5.appspot.com/o/images%2FOCULUSGO.png?alt=media&token=58dfa54b-3829-4414-862a-70547b37965c"
    }
]

for (let obj in products) {
    axios.post("https://shopify-2f2b5-default-rtdb.firebaseio.com/products.json", products[obj])
    .then ( res => (
        console.log(res)
    ))
    .catch(
        console.log("error")
    )
}