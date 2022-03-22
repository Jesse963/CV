const header = document.querySelector(".header.name");
const content = document.querySelector(".main.content h2");

const observer = new IntersectionObserver(
  (entries, observer) => {
    if (!entries[0].isIntersecting) {
      header.style.fontSize = "1.5rem";
    } else {
      header.style.fontSize = "2.7rem";
    }
    console.log(entries[0].isIntersecting);
    console.log(entries[0].intersectionRatio);
  },
  { rootMargin: "-200px" }
);

console.log(observer);
observer.observe(content);
