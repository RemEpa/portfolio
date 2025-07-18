import type { Project } from "./ui";

const techStack = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "Ruby",
  "PHP",
  "Go",
  "Swift",
  "TypeScript",
  "HTML/CSS",
];

export function randomTechStack() {
  let randomTech: string[] = [];
  let techStackCopy = [...techStack];

  for (let i = techStackCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [techStackCopy[i], techStackCopy[j]] = [techStackCopy[j], techStackCopy[i]];
  }

  for (
    let i = 0;
    i < Math.floor(Math.random() * 10) + 3 && i < techStackCopy.length;
    i++
  ) {
    randomTech.push(techStackCopy[i]);
  }
  return randomTech;
}

export function createDummyData(id: number): Project {
  return {
    id: id,
    title: `Sample Project ${id}`,
    subtitle: `A brief subtitle for project ${id}`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    techStack: randomTechStack(),
    imgPath: `https://placehold.co/600x400`,
    liveUrl: `https://example.com/sample-project-${id}`,
  };
}
