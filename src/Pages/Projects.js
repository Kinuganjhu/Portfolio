import { Data } from './Data';

export default function Projects() {
  return (
    <div className="projects-container">
      <h3>Projects</h3>
      {Data.map((item) => (
        <div className="project-item" key={item.id}>
          <h4 className="project-title">{item.title}</h4>
          <p className="project-description">{item.description}</p>
          <a className="show-project-link" href={item.url}>
            Show Project
          </a>
        </div>
      ))}
      <a className="more-projects-link" href="https://github.com/Kinuganjhu">
        More Projects >>>
      </a>
    </div>
  );
}
