const users = [
  {
    id: 1,
    name: "Bruna Andrade",
    location: "Minas Gerais",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti praesentium fugiat deserunt quod laudantium possimus!",
    picture: "./img/reviews/person2.jpg",
  },
  {
    id: 2,
    name: "Tayna Mota",
    location: "Rio Grande do Sul",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti praesentium fugiat deserunt quod laudantium possimus!",
    picture: "./img/reviews/person4.jpg",
  },
  {
    id: 3,
    name: "Luis Pellizzon",
    location: "Mato Grosso do Sul",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti praesentium fugiat deserunt quod laudantium possimus!",
    picture: "./img/reviews/person1.jpg",
  },
  {
    id: 4,
    name: "Diego Javiel",
    location: "Minas Gerais",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti praesentium fugiat deserunt quod laudantium possimus!",
    picture: "./img/reviews/person3.jpg",
  },
];

const loadReview = (id) => {
  const reviewDiv = document.querySelector(".reviews-item");
  const reviewCardContent = `
<p>${users[id].body}</p>
<ul>
  <li><img src="${users[id].picture}" alt="User Profile photo" /></li>
  <li>${users[id].name}, ${users[id].location}</li>
</ul>
`;
  reviewDiv.innerHTML = reviewCardContent;
};

// Event listener for prev and next button
const arrowRight = document.querySelector("#arrowRight");
const arrowLeft = document.querySelector("#arrowLeft");

let slideIndex = 0;

const moveSlider = (e) => {
  if (e.currentTarget.id.includes("Left")) {
    if (slideIndex != 0) {
      slideIndex--;
    } else {
      slideIndex = users.length - 1;
    }
  } else if (e.currentTarget.id.includes("Right")) {
    if (slideIndex != users.length - 1) {
      slideIndex++;
    } else {
      slideIndex = 0;
    }
  }
  console.log(slideIndex);
  loadReview(slideIndex);
};

arrowRight.addEventListener("click", moveSlider);
arrowLeft.addEventListener("click", moveSlider);
