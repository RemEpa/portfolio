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
  const {
    id,
    title,
    description,
    imgPath,
    liveUrl,
    subtitle,
    techStack,
    repoUrl,
  } = project;

  const card = document.createElement("article");
  card.className = "project";

  card.innerHTML = /* html */ `
    <header>
        <h4 class="project-title">${title}</h4>
        <p class="project-subtitle">${subtitle}</p>
    </header>
    <div class="project-img-container">
        <img src=${imgPath} alt="${title} screenshot" />
        <ul class="links">
          <li>
            <a href="${liveUrl}" target="_blank" rel="noopener noreferrer">
              Website
            </a>
          </li>
          ${
            repoUrl
              ? `
              <li>
                <a href="${repoUrl}" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              </li>`
              : ""
          }
        </ul>
    </div>
    <div class="project-description">
        <h3>Description:</h3>
        <p class="project-description">${description}</p>
    </div>
    <footer class="project-footer">
      <ul class="tech-stack">
        ${techStack.map((tech) => `<li>${tech}</li>`).join("")}
      </ul>
    </footer>
  `;

  return card;
}

export function renderProjects(container: HTMLElement, projects: Project[]) {
  container.innerHTML = "";
  projects.forEach((project) => {
    const projCard = createProjectCard(project);
    container.appendChild(projCard);
  });
}
