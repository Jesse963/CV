const transitionPage = async (pageToGoTo) => {
  const content = document.querySelectorAll(
    ".main.content p, .main.content *:not(div, li, section)"
  );
  let timeout = 30 * content.length;
  if (timeout > 450) timeout = 450;

  // Scroll each element to left with slight delay, remove opacity
  content.forEach((element, i) => {
    setTimeout(async () => {
      element.style.opacity = "0";
      element.style.transform = "translateX(-20%)";
    }, 30 * i);
  });
  console.log(content);
  // Wait until all elements have transitioned, then navigate
  setTimeout(() => {
    window.location.href = `${pageToGoTo}.html`;
  }, timeout);
};

const loadPage = () => {
  // On load, scroll elements from right to centre of screen, set opacity 0->1
  const content = document.querySelectorAll(
    ".main.content p, .main.content *:not(div, li)"
  );
  content.forEach((element, i) => {
    setTimeout(() => {
      element.style.opacity = "1";
      element.style.transform = "translateX(0%)";
    }, 30 * i);
  });
};

loadPage();
