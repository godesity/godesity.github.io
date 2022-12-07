import "../assets/styles/projectStyle.css"
import ProjectCard from "../components/ProjectCard.js";
import "../assets/styles/projectStyle.css";

export default function Projekt() {
  return (
    <>
      <div className="title-style">Projekt</div>
      <div className="project-card-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
}
