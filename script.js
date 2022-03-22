const header = document.querySelector(".header.name");
const content = document.querySelector(".main.content h2");
const burgerIcon = document.querySelector("header svg");

console.log(burgerIcon);

const observer = new IntersectionObserver(
  (entries, observer) => {
    const nav = document.querySelector("header nav ");
    if (!entries[0].isIntersecting) {
      header.style.fontSize = "1.6rem";
      nav.style.maxHeight = "4rem";
      return (burgerIcon.style.width = "1.6rem");
    }
    console.log("Test");
    burgerIcon.style.width = "2.6rem";
    header.style.fontSize = "2.6rem";
    nav.style.maxHeight = "7rem";
  },
  { rootMargin: "-200px" }
);

console.log(observer);
observer.observe(content);

burgerIcon.addEventListener("click", () => {
  const links = document.querySelector("header nav .links");
  const nav = document.querySelector("header nav ");

  if (links.style.opacity === "1") {
    links.style.opacity = "0";
    links.style.pointerEvents = "none";
    return (nav.style.maxHeight = "7rem");
  }
  // links.style.display = "flex";
  links.style.pointerEvents = "all";
  nav.style.maxHeight = "25rem";
  setTimeout(() => {
    links.style.opacity = "1";
  }, 100);
});
