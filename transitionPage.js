const transitionPage = (pageToGoTo) => {
  const content = document.querySelector(".main.content");
  content.style.opacity = "0";
  content.style.transform = "translateX(-20%)";
  setTimeout(() => {
    window.location.href = `${pageToGoTo}.html`;
  }, 200);
  console.log(h2.textContent);
};

const loadPage = () => {
  const content = document.querySelector(".main.content");
  setTimeout(() => {
    content.style.opacity = "1";
    content.style.transform = "translateX(0%)";
  }, 200);
  // margin: 5rem auto;
};

loadPage();
