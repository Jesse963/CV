const projectsList = [
  {
    name: "Roubas Karate",
    technologies: "HTML, CSS, JS",
    code: "https://github.com/Jesse963/Roubas-Site",
    site: "https://jesse963.github.io/Roubas-Site/",
    description:
      "Static website containing general information for a karate dojo, primarily for new and potential students",
    image: "assets/roubas.png",
  },
  {
    name: "Dojo Directory",
    technologies: "React, JS, HTML, CSS, Express, MongoDB",
    code: "https://github.com/Jesse963/Dojo_Directory_React",
    site: "",
    description:
      "A webapp where potential martial artists are recommended a school to train at based on their preferences, user ratings and proximity",
  },
  {
    name: "Grading Management",
    technologies: "React, JS, HTML, CSS, Express, MongoDB",
    code: "https://github.com/Jesse963/Grading_Management",
    site: "",
    description:
      "A webapp where managers and owners of sports clubs can \
      track and assess progress of their students",
  },
  {
    name: "Can I Bring Roo?",
    technologies: "React, Mapbox, JS, HTML, CSS, Express, MongoDB",
    code: "",
    site: "",
    description:
      "A webapp for dog owners to easily find cafes, pubs, \
      and other venues that are dog friendly",
  },
];

const renderProjects = () => {
  const container = document.querySelector(".project.list.container");

  projectsList.map((project) => {
    const { name, technologies, code, site, description, image } = project;
    const div = document.createElement("div");
    div.classList.add("project");
    div.id = name;

    div.innerHTML = `
    <h3>${name}</h3>
    <p>${description}
    <div class='project details'>
      <div class='image container' id='frame'>
        <img src=${image} alt=${name.replaceAll(
      " ",
      "-"
    )} id='img_${name.replaceAll(" ", "-")}'
        </img>  
      </div>
      <p>Technologies used: ${technologies}</p>
      <a href=${site}>Hosted Site</a>
      <a href=${code}>Code Repo</a>
    </div>`;
    container.append(div);
    document
      .getElementById(`img_${name.replaceAll(" ", "-")}`)
      .addEventListener("click", () => (window.location.href = site));
  });
};

renderProjects();
