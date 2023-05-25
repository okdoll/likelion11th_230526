const menu = [
  {
    id: 1,
    title: "버터 우유 팬케이크",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "디너 더블",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "밀크쉐이크",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "컨트리 딜라이트",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "에그 어택",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "오레오 쉐이크",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "베이컨 오버플로우",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "아메리칸 클래식",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "검역 쉐이크",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "스테이크",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
//심심하면(시간이 된다면!) 원하는 가격과 설명으로...바꿔봅시다 껄껄 ^.^

const sectionCenter = document.querySelector(".section-center");
// 1. section-center 클래스의 요소를 해당 변수에 할당시키는 코드를 작성해주세요.
const container = document.querySelector(".btn-container");
// 2. btn-container 클래스의 요소를 해당 변수에 할당시키는 코드를 작성해주세요.


window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // 3. map 함수를 이용하여 아래 item 내용을 displayMenu에 새로운 배열로 할당시켜주세요. (### 부분에 작성)


    return `<article class="menu-item">
          <img src=${item.img} class="photo" alt=${item.title} />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
    // 4. ###에 들어갈 변수를 템플릿 문자열을 사용하여 지정해주세요. (총 5개)
  });
  // 5. 리스트에 담긴 요소 값들을 displayMenu에 문자열로 다시 할당시키는 코드를 작성해주세요.
  displayMenu = displayMenu.join("");

  // 6. sectionCenter 내용에 포함된 HTML을 displayMenu로 재설정하는 코드를 작성해주세요.(innerHTML)
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  /* 7. menu.reduce를 이용하여 menu 배열에서 모든 카테고리를 추출하는 코드를 작성해주세요.
  1) 초기값으로는 ["all"] 배열을 사용
  2) category 속성이 이미 추출된 값들('values')에 포함되지 않은 경우에만 값을 추가 (중복된 카테고리 제거)
  */

  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>
      ${category}
      </button>`;
    })
    .join("");

  // 9. btnContainer 내용에 포함된 HTML을 categoryBtns로 추가하는 코드를 작성해주세요.
  container.innerHTML = categoryBtns;


  const filterBtns = container.querySelectorAll(".filter-btn");

  
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
