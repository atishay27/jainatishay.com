const products = [
  {
    image:
      "https://www.giftoo.in/cdn/shop/files/Untitleddesign-2023-04-28T143710.774.png",
    name: "Cello Pen",
    price: 50,
  },
  {
    image:
      "https://www.alotmall.com/cdn/shop/products/Cartoon-Magnetic-Pencil-Case-7.jpg",
    name: "Unicorn Pencil Box",
    price: 250,
  },
  {
    image:
      "https://images-cdn.ubuy.co.in/6369b195ddbb6b3f9859cd80-tasty-bento-box-lunch-box-for-kids-and.jpg",
    name: "Tasty Bento Box",
    price: 200,
  },
  {
    image:
      "https://buysupplies.in/cdn/shop/products/apsara-absolute-extra-dark-pencil_1200x1200.jpg",
    name: "Apsara Absolute Pencil",
    price: 60,
  },
  {
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51XQUDdZJjL._AC_UF1000,1000_QL80_.jpg",
    name: "Apsara Eraser Box",
    price: 120,
  },
  {
    image: "https://m.media-amazon.com/images/I/81rFsZBkBGL.jpg",
    name: "Unistar Gel Pen Set",
    price: 640,
  },
  {
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81zMBOsrttL.jpg",
    name: "Misulove Watercolors",
    price: 310,
  },
  {
    image:
      "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/815M6utnCVL._AC_UF894,1000_QL80_.jpg",
    name: "Benicci Pain Brush Set",
    price: 870,
  },
];

function showProducts() {
  const prodListDiv = document.querySelector(".products");
  for (product of products) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-div");

    //Adding Product Image
    const prodImage = document.createElement("img");
    prodImage.classList.add("product-image");
    prodImage.src = product.image;
    productDiv.appendChild(prodImage);

    //Adding Product Details
    const productDetailDiv = document.createElement("div");
    productDetailDiv.classList.add("product-details");
    productDiv.appendChild(productDetailDiv);

    //Adding Ruler-1
    const ruler1 = document.createElement("hr");
    ruler1.classList.add("ruler");
    productDetailDiv.appendChild(ruler1);

    //Adding Product Name
    const productName = document.createElement("div");
    productName.classList.add("product-name");
    productName.textContent = `${product.name}`;
    productDetailDiv.appendChild(productName);

    //Adding Ruler-2
    const ruler2 = document.createElement("hr");
    ruler2.classList.add("ruler");
    productDetailDiv.appendChild(ruler2);

    //Adding Product Cost
    const productCost = document.createElement("div");
    productCost.classList.add("product-cost");
    productCost.textContent = `₹ ${product.price}`;
    productDetailDiv.appendChild(productCost);

    //Adding Buy Button
    const buyBtn = document.createElement("button");
    buyBtn.classList.add("buy-btn");
    buyBtn.textContent = "Buy Now";
    productDetailDiv.appendChild(buyBtn);

    prodListDiv.appendChild(productDiv);
  }
}

showProducts();
