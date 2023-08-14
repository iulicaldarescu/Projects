import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Portfolio } from "./portfolio";
import { Skill } from "./skill";
import { Contact } from "./contact";
import { Project } from "./project";
import { ContactSection } from "./contactSection";
import { Footer } from "./footer";
import { Modal } from "./modal";
import { useState, useEffect } from "react";

const projectOneUrl = "/My project-1.png";
const projectTwoUrl = "/space project.png";
const projectThreeUrl = "/food api.png";
const projectFourUrl = "/password-gen.png";
const projectFiveUrl = "/calculator.png";
const projectSixUrl = "/countries.png";
const onlineShopPic = "/online-shop.png";
const tourismPic = "/tourism.png";
const countriesPic = "/countriesPic.png";
const foodPic = "/foodPic.png";
const calculatorPic = "/calculatorPic.png";
const passwordGenPic = "/passwordGenPic.png";

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap",
    "Responsive",
    "API Calls",
    "GIT",
    "React",
  ];
  const projects = [
    {
      project: projectOneUrl,
      openModal: () => openModal(onlineShopPic),
      title: "Online Shop App",
      skills: ["HTML", "CSS"],
      url: "https://mellow-cactus-359e06.netlify.app/",
      git: "https://github.com/iulicaldarescu/Projects/tree/main/Shopping%20page",
    },

    {
      project: projectTwoUrl,
      openModal: () => openModal(tourismPic),
      title: "Space Tourism Website",
      skills: ["HTML", "CSS", "JavaScript"],
      url: "#",
      git: "https://github.com/iulicaldarescu/Projects/tree/main/space-tourism-website-main",
    },
    {
      project: projectThreeUrl,
      openModal: () => openModal(foodPic),
      title: "Food Recipe API",
      skills: ["HTML", "CSS", "JavaScript", "API"],
      url: "https://benevolent-mooncake-8ce68f.netlify.app",
      git: "https://github.com/iulicaldarescu/Projects/tree/main/Food%20API",
    },

    {
      project: projectFourUrl,
      openModal: () => openModal(passwordGenPic),
      title: "Password Generator",
      skills: ["HTML", "CSS", "JAVASCRIPT"],
      url: "https://nimble-figolla-1dde1d.netlify.app",
      git: "https://github.com/iulicaldarescu/Projects/tree/main/password%20generator",
    },
    {
      project: projectFiveUrl,
      openModal: () => openModal(calculatorPic),
      title: "Calculator",
      skills: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
      url: "#",
      git: "https://github.com/iulicaldarescu/Projects/tree/main/science%20computer",
    },

    {
      project: projectSixUrl,
      openModal: () => openModal(countriesPic),
      title: "Which Country?",
      skills: ["HTML", "CSS", "JAVASCRIPT", "API"],
      url: "#",
      git: "https://github.com/iulicaldarescu/Projects/tree/main/countries",
    },
  ];

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState("");

  const openModal = (pic) => {
    setSelectedPicture(pic);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPicture("");
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isModalOpen]);

  return (
    <div>
      <Portfolio
        linkedIn={<FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />}
        github={<FontAwesomeIcon icon={faGithub} size="2x" color="white" />}
        twitter={<FontAwesomeIcon icon={faTwitter} size="2x" color="white" />}
        facebook={<FontAwesomeIcon icon={faFacebook} size="2x" color="white" />}
      ></Portfolio>
      <p className="mt-20 border-2"></p>
      <div className="sm:grid sm:grid-cols-2 2xl:grid 2xl:grid-cols-3 2xl:w-5/6 2xl:m-auto">
        {skills.map((skill, index) => {
          return <Skill key={index} skill={skill}></Skill>;
        })}
      </div>
      <p className="mt-20 border-2"></p>
      <div className="flex justify-between my-20 font-bold align-middle mx-4 sm:mx-8 2xl:mx-48">
        <h1 className="text-5xl text-white 2xl:text-7xl">Projects</h1>
        <Contact
          marginTop={"mt-0"}
          textSize={"text-xl"}
          justify={"center"}
        ></Contact>
      </div>

      <div className="md:grid md:grid-cols-2 gap-10 2xl:w-8/12 2xl:m-auto">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              project={project.project}
              openModal={project.openModal}
              title={project.title}
              skills={project.skills}
              url={project.url}
              git={project.git}
            ></Project>
          );
        })}
      </div>

      <ContactSection></ContactSection>
      <Footer
        github={<FontAwesomeIcon icon={faGithub} size="2x" color="white" />}
        linkedIn={<FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />}
        twitter={<FontAwesomeIcon icon={faTwitter} size="2x" color="white" />}
        facebook={<FontAwesomeIcon icon={faFacebook} size="2x" color="white" />}
      ></Footer>

      {isModalOpen && (
        <Modal picture={selectedPicture} closeModal={closeModal}></Modal>
      )}
    </div>
  );
}

export default App;
