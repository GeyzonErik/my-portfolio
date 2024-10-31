window.addEventListener("load", () => {
  document.getElementById("loading-screen").style.display = "none";
  document.getElementById("main-content").style.display = "block";
});

const carouselItems = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

// Atualiza as classes para os itens ativo, anterior e próximo
function updateCarousel() {
  carouselItems.forEach((item, index) => {
    item.classList.remove(
      "active",
      "prev",
      "next",
      "slide-out-left",
      "slide-out-right"
    );
  });

  const currentItem = carouselItems[currentIndex];
  const prevItem =
    carouselItems[
      (currentIndex - 1 + carouselItems.length) % carouselItems.length
    ];
  const nextItem = carouselItems[(currentIndex + 1) % carouselItems.length];

  currentItem.classList.add("active");
  prevItem.classList.add("prev");
  nextItem.classList.add("next");
}

document.getElementById("prev-btn").addEventListener("click", () => {
  carouselItems[currentIndex].classList.add("slide-out-right"); // Animação de saída à direita
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
});

document.getElementById("next-btn").addEventListener("click", () => {
  carouselItems[currentIndex].classList.add("slide-out-left"); // Animação de saída à esquerda
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
});

// Inicializa o carrossel mostrando o primeiro item
updateCarousel();
