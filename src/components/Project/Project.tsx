import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";

import project from "../../data/project"

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        {project.map((row: any, i: number) =>
          <ScrollAnimation animateIn="flipInX" key={"project-"+i}>
            <div className="project">
              {/* <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#ffffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  {row.git != null ?
                    <a href={row.git} target="_blank" rel="noreferrer">
                      <img src={githubIcon} alt="Visit site" />
                    </a> : null
                  }
                  {row.url != null ?
                    <a href="https://ai-chatbot-t8fn.onrender.com" target="_blank" rel="noreferrer">
                      <img src={externalLink} alt="Visit site" />
                    </a> : null
                  }
                </div>
              </header> */}
              <div className="body">
                {row.image != null ?
                  <img src={row.image} alt={row.title} className="image-project"/>
                  : null
                }
                <h3>{row.title}</h3>
                <p>
                  {row.content}
                </p>
              </div>
              <footer>
                <ul className="tech-list">
                  {row.tag.map((tag: string) =>
                    <li>{tag}</li>
                  )}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        )}

      </div>
    </Container>
  );
}