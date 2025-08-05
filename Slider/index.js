const imageList = [
  { src: "https://i.pinimg.com/originals/96/2c/f7/962cf71231f9f8139c64bdda6199ccca.jpg", title: "Slide 1" },
  { src: "https://static.tildacdn.com/tild6130-6538-4434-a334-306436656232/__2024-09-17__150439.jpg", title: "Slide 2" },
  { src: "https://avatars.mds.yandex.net/get-mpic/4338525/2a0000018b43715bddd6f22037ec4d82d603/orig", title: "Slide 3" }
];

const sliderContainer = document.getElementById("slider");

imageList.forEach((item, index) => {
  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.title;
  img.classList.add("slide");
  if (index === 0) img.classList.add("active");
  sliderContainer.appendChild(img);
});

const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 3000);
