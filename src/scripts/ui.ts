export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  imgPath: string;
  liveUrl: string;
  repoUrl?: string;
}

export function createProjectCard(project: Project): HTMLElement {
  const card = document.createElement("article");
  card.className = "project";
  const listOfTech = document.createElement("ul");

  project.techStack.forEach((element) => {
    const tech = document.createElement("li");
    tech.innerText = element;
    listOfTech.appendChild(tech);
  });

  card.innerHTML = /* html */ `
    <header>
        <h4 class="project-title">${project.title}</h4>
        <p class="project-subtitle">${project.subtitle}</p>
    </header>
    <div class="project-img-container">
        <img
        src=${project.imgPath}
        alt=${project.title + project.id} />
    </div>
    <div class="project-description">
        <h3>Description:</h3>
        <p class="project-description">
        ${project.description}
        </p>
    </div>
    <footer class="project-footer">
      <!-- Just a placeholder -->
    </footer>
  `;

  const footer = card.querySelector(".project-footer");
  if (footer) {
    footer.appendChild(listOfTech);
  }

  return card;
}


export function renderProjects(container: HTMLElement, projects: Project[]) {
  container.innerHTML = "";
  projects.forEach((project) => {
    const projCard = createProjectCard(project);
    container.appendChild(projCard);
  });
}
