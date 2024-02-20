import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/lginCapture.PNG";
import projImg2 from "../assets/img/registerPNG.PNG";
import projImg3 from "../assets/img/home.PNG";
import projImg4 from "../assets/img/puzzle.PNG";
import projImg5 from "../assets/img/car.PNG";
import projImg6 from "../assets/img/ttt.PNG";
import projImg7 from "../assets/img/a-login.PNG";
import projImg8 from "../assets/img/a-home.PNG";
import projImg9 from "../assets/img/a-2home.PNG";
import projImg10 from "../assets/img/a-basket.PNG";
import projImg11 from "../assets/img/Screenshot (3).png";
import projImg12 from "../assets/img/Screenshot (4).png";
import projImg13 from "../assets/img/Screenshot (7).png";
import projImg14 from "../assets/img/Screenshot (12).png";
import projImg15 from "../assets/img/Screenshot (13).png";
import projImg16 from "../assets/img/Screenshot (14).png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Multi gaming platform",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Multi gaming platform",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Multi gaming platform",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Multi gaming platform",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Multi gaming platform",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Multi gaming platform",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  const project3 = [
    {
      title: "Amazon-clone",
      description: "Design & Development",
      imgUrl: projImg7,
    },
    {
      title: "Amazon-clone",
      description: "Design & Development",
      imgUrl:projImg8,
    },
    {
      title: "Amazon-clone",
      description: "Design & Development",
      imgUrl:projImg9,
    },
    {
      title: "Amazon-clone",
      description: "Design & Development",
      imgUrl: projImg10,
    },
    {
      title: "Amazon-clone",
      description: "Design & Development",
      imgUrl:projImg7,
    },
    {
      title: "Amazon-clone",
      description: "Design & Development",
      imgUrl: projImg8,
    },
  ];

  const project2 = [
    {
      title: "virtual mouse",
      description: "Development",
      imgUrl: projImg11,
    },
    {
      title: "virtual mouse",
      description: "Development",
      imgUrl:projImg12,
    },
    {
      title: "virtual mouse",
      description: " Development",
      imgUrl:projImg13,
    },
    {
      title: "virtual mouse",
      description: "Development",
      imgUrl: projImg14,
    },
    {
      title: "virtual mouse",
      description: "Development",
      imgUrl:projImg15,
    },
    {
      title: "virtual mouse",
      description: "Development",
      imgUrl: projImg16,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Multi-gaming platform</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">virtual mouse</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Amazon clone</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          project2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          project3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
