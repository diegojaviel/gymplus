const users = [
  {
    id: 1,
    name: "Bruna Andrade",
    location: "Minas Gerais",
    body: "A GymPlus salvou minha vida quando contratei o serviço Premium. Já que trabalho viajando pelo Brasil, posso usar todas as academias desta empresa em qualquer cidade que estejam.  Demais!!",
    picture: "./img/reviews/person2.jpg",
  },
  {
    id: 2,
    name: "Tayna Mota",
    location: "Rio Grande do Sul",
    body: "Meus amigos sempre foram ao GymPlus e me ligavam toda semana para começar a ter uma vida mais em forma. GymPlus não só me ajudou a começar a ser mais saudável, mas também proporcionou um ambiente maravilhoso para fazer amigos!",
    picture: "./img/reviews/person4.jpg",
  },
  {
    id: 3,
    name: "Luis Pellizzon",
    location: "Mato Grosso do Sul",
    body: "Durante a pandemia, pensei que nunca mais teria coragem de me exercitar. Graças a GymPlus, eles continuaram com as aulas online com os melhores professores do Brasil. Juntei toda a família para fazer zumba em casa, foi divertido para todos!",
    picture: "./img/reviews/person1.jpg",
  },
  {
    id: 4,
    name: "Diego Javiel",
    location: "Minas Gerais",
    body: "O que mais me surpreende é o tamanho de todas as academias GymPlus. A cidade pode ser a menor do Brasil que eles ainda estarão lá, em um local totalmente arejado e agradável.",
    picture: "./img/reviews/person3.jpg",
  },
];

const loadReview = (id) => {
  const reviewDiv = document.querySelector(".reviews-item");
  const reviewCardContent = `
<p>" ${users[id].body} "</p>
<ul>
  <li><img src="${users[id].picture}" alt="User Profile photo" /></li>
  <li>${users[id].name}, ${users[id].location}</li>
</ul>
`;
  reviewDiv.innerHTML = reviewCardContent;
  console.log(id);
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

  loadReview(slideIndex);
};

arrowRight.addEventListener("click", moveSlider);
arrowLeft.addEventListener("click", moveSlider);

document.addEventListener("DOMContentLoaded", loadReview(slideIndex));
