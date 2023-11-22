const items = [
  {
    article: "BOSCH GSB 13 RE",
    description: "700 Вт, быстрозажимной патрон",
    tags: ['home', 'work'],
    price: 420,
    img: "./img/1.jpg",
    rating: 3.7,
    title: 'Дрель ударная'
  },
  {
    article: "BOSCH GEX 125-150",
    description: "400 Вт, 5500 — 12000 об/мин",
    tags: ['home', 'work'],
    price: 521,
    img: "./img/2.jpg",
    rating: 3.8,
    title: 'Шлифмашина эксцентриковая'
  },
  {
    article: "BOSCH PWS 750-115",
    description: "115 мм, 750 Вт, 12000 об/мин",
    tags: ['home'],
    price: 170,
    img: "./img/3.jpg",
    rating: 2.0,
    title: 'Углошлифмашина одноручная'
  },
  {
    article: "BOSCH GAS 12V",
    description: "12V, 0,35 л, класс:L",
    tags: ['home', 'work'],
    price: 240,
    img: "./img/4.jpg",
    rating: 4.7,
    title: 'Пылесос аккумуляторный'
  },
  {
    article: "BOSCH GAS 15 PS",
    description: "1100 Вт, 15л, 220мБар",
    tags: ['home', 'work'],
    price: 737,
    img: "./img/5.jpg",
    rating: 4.9,
    title: 'Пылесос сетевой'
  },
  {
    article: "BOSCH GWS 12V-76",
    description: "12V, 76мм, 19500 об/мин",
    tags: ['home', 'work'],
    price: 520,
    img: "./img/6.jpg",
    rating: 2.2,
    title: 'Углошлифмашина аккумуляторная'
  },
  {
    article: "BOSCH GWS 11-125",
    description: "1100 Вт, 125мм, 11000 об/мин",
    tags: ['home', 'work'],
    price: 360,
    img: "./img/7.jpeg",
    rating: 1.1,
    title: 'Углошлифмашина одноручная'
  },
  {
    article: "BOSCH GlassVac",
    description: "3.6V, 2.0Ah",
    tags: ['home'],
    price: 150,
    img: "./img/8.jpg",
    rating: 3.4,
    title: 'Стеклоочиститель аккумуляторный'
  },
  {
    article: "BOSCH PBS 75 AE",
    description: "750 Вт, 75x533 мм",
    tags: ['home'],
    price: 720,
    img: "./img/9.jpg",
    rating: 4.8,
    title: 'Шлифмашина ленточная'
  },
  {
    article: "BOSCH GBH 2-28 F",
    description: "880 Вт, 3.2 Дж, SDS-Plus",
    tags: ['work'],
    price: 720,
    img: "./img/10.jpg",
    rating: 2.2,
    title: 'Перфоратор сетевой'
  },
  {
    article: "BOSCH GSH 11",
    description: "1700 Вт, 23 Дж, SDS-Max	",
    tags: ['work'],
    price: 2820,
    img: "./img/11.jpg",
    rating: 3.7,
    title: 'Отбойный молоток'
  },
  {
    article: "BOSCH GSR 12V-30",
    description: "12V, 30 Нм, 0-420/0-1600 об/мин",
    tags: ['work'],
    price: 501,
    img: "./img/12.jpg",
    rating: 1.9,
    title: 'Шуруповёрт аккумуляторный'
  },

  {
    article: "BOSCH PRD 18 Li",
    description: "18V, 130 Нм, 	1/4 мм",
    tags: ["home"],
    price: 229,
    img: "./img/13.jpg",
    rating: 3.1,
    title: 'Шуруповёрт аккумуляторный'
  },
  {
    article: "BOSCH PSB 750",
    description: "750 Вт, 1.5-13 мм",
    tags: ["home"],
    price: 219,
    img: "./img/14.jpg",
    rating: 4.1,
    title: 'Дрель ударная'
  },
  {
    article: "BOCH UNEO 12V",
    description: "12V, 0.5 Дж, 2 режима",
    tags: ["home"],
    price: 725,
    img: "./img/15.jpg",
    rating: 2.9,
    title: 'Перфоратор аккумуляторный'
  },
  {
    article: "BOSCH AdvancedVac 20",
    description: "1200 Вт, 260мБар, 20 л",
    tags: ["home"],
    price: 400,
    img: "./img/16.jpg",
    rating: 4.1,
    title: 'Пылесос сетевой'
  },
];

let currentState = [...items];     

const itemsContainer = document.querySelector("#shop-items");   
const itemTemplate = document.querySelector("#item-template");    
const nothingFound = document.querySelector("#nothing-found");    

function drawItems(arr) {  
  nothingFound.textContent = "";
  itemsContainer.innerHTML = "";

  arr.forEach((elem) => {
    itemsContainer.append(makeProductItem(elem));
  });
  if (!arr.length) {
    nothingFound.textContent = "Ничего не найдено";
  }
}

function sortByAlphabet(a, b) {
  if (a.title > b.title) {
    return 1;
  }
  if (a.title < b.title) {
    return -1;
  }
  return 0;
}

drawItems(currentState.sort((a, b) => sortByAlphabet(a, b))); 

function makeProductItem(productItem) {     
  const { title, description, tags, img, price, rating, article } = productItem;
  const item = itemTemplate.content.cloneNode(true);
  item.querySelector("h1").textContent = article;
  item.querySelector("p").textContent = description;
  item.querySelector("img").src = img;
  item.querySelector(".price").textContent = `${price} P`;
  item.querySelector(".title").textContent = title;

  const ratingContainer = item.querySelector(".rating");

  for (let i = 0; i < rating; i++) {
    const star = document.createElement("i");
    star.classList.add("fa", "fa-star");
    ratingContainer.append(star);
  }

  const tagsConatainer = item.querySelector(".tags");

  tags.forEach((tag) => {
    const element = document.createElement("span");
    element.textContent = tag;
    element.classList.add("tag");
    tagsConatainer.append(element);
  });

  return item;
}

const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");

function searchProduct() {
  const searchMessage = searchInput.value.trim().toLowerCase();

  currentState = items.filter((i) =>
    i.title.toLowerCase().includes(searchMessage)
  );
  currentState.sort((a, b) => sortByAlphabet(a, b));
  drawItems(currentState);
  sortItems.selectedIndex = 0;
}

searchBtn.addEventListener("click", searchProduct);
searchInput.addEventListener("search", searchProduct);

const sortItems = document.querySelector("#sort");
sortItems.addEventListener("change", (event) => { 
  const selectedOption = event.target.value;
  switch (selectedOption) {
    case "expensive": {
      currentState.sort((a, b) => b.price - a.price);
      break;
    }
    case "cheap": {
      currentState.sort((a, b) => a.price - b.price);
      break;
    }
    case "rating": {
      currentState.sort((a, b) => b.rating - a.rating);
      break;
    }
    case "alphabet": {
      currentState.sort((a, b) => sortByAlphabet(a, b));
      break;
    }
  }
  drawItems(currentState);
});

let sum = 0;

function addToCart() {
  if (confirm("Вы уверены, что хотите переместить этот объект в корзину?")) {
    sum = sum + 1
    alert(`Товаров в корзине: ${sum} шт.`)
  }
}