import { projects } from "./projects.js";

const homeBtn = document.querySelector("#home-btn");
const aboutBtn = document.querySelector("#about-btn");
const projectBtn = document.querySelector("#project-btn");
const contactBtn = document.querySelector("#contact-btn");
const homeSection = document.querySelector(".landing-page");
const bioSection = document.querySelector(".bio");
const projectsSection = document.querySelector(".projects");
const contactSection = document.querySelector("footer");

homeBtn.addEventListener("click", () => {
  homeSection.scrollIntoView({ behavior: "smooth" });
});

aboutBtn.addEventListener("click", () => {
  bioSection.scrollIntoView({ behavior: "smooth" });
});

projectBtn.addEventListener("click", () => {
  projectsSection.scrollIntoView({ behavior: "smooth" });
});

contactBtn.addEventListener("click", () => {
  contactSection.scrollIntoView({ behavior: "smooth" });
});

const projectContainer = document.querySelector(".card-container");

function createProjectCards() {
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("card-template");

    const img = document.createElement("img");
    img.src = project.img;
    img.classList.add("big-img");
    card.appendChild(img);

    const projectName = document.createElement("h2");
    projectName.textContent = project.name;
    card.appendChild(projectName);

    const skillsContainer = document.createElement("div");
    skillsContainer.classList.add("skills-container");

    project.skills.forEach((skill) => {
      const skillImg = document.createElement("img");
      skillImg.src = skill;
      skillsContainer.appendChild(skillImg);
    });

    card.appendChild(skillsContainer);

    projectContainer.appendChild(card);
  });
}

createProjectCards();
