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
const projectSevenUrl = "/weatherApp.png";
const projectEightUrl = "/rock-paper-game.png";
const projectNineUrl = "/audiophile.png";
const projectTenUrl = "/Invoices-app.png";
const onlineShopPic = "/online-shop.png";
const tourismPic = "/tourism.png";
const countriesPic = "/countriesPic.png";
const foodPic = "/foodPic.png";
const calculatorPic = "/calculatorPic.png";
const passwordGenPic = "/passwordGenPic.png";
const weatherPic = "/weatherPic.png";
const rockPaperScissorsPic = "/rockpaperscissorPic.png";
const audiophilePic = "/audiophilePic.png";
const invoicesPic = "/invoicesPic.png"

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
      git: "https://github.com/iulicaldarescu/Web-Shopping-Page",
    },

    {
      project: projectTwoUrl,
      openModal: () => openModal(tourismPic),
      title: "Space Tourism Website",
      skills: ["HTML", "CSS", "JavaScript"],
      url: "#",
      git: "https://github.com/iulicaldarescu/Web-Space-Tourism-",
    },
    {
      project: projectThreeUrl,
      openModal: () => openModal(foodPic),
      title: "Food Recipe API",
      skills: ["HTML", "CSS", "JavaScript", "API"],
      url: "https://benevolent-mooncake-8ce68f.netlify.app",
      git: "https://github.com/iulicaldarescu/Web-find-meals",
    },

    {
      project: projectFourUrl,
      openModal: () => openModal(passwordGenPic),
      title: "Password Generator",
      skills: ["HTML", "CSS", "JAVASCRIPT"],
      url: "https://nimble-figolla-1dde1d.netlify.app",
      git: "https://github.com/iulicaldarescu/Web-password-generator",
    },
    {
      project: projectFiveUrl,
      openModal: () => openModal(calculatorPic),
      title: "Calculator",
      skills: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
      url: "https://majestic-stocking.surge.sh/",
      git: "https://github.com/iulicaldarescu/Web-Science-Calculator",
    },

    {
      project: projectSixUrl,
      openModal: () => openModal(countriesPic),
      title: "Which Country?",
      skills: ["HTML", "CSS", "JAVASCRIPT", "API"],
      url: "#",
      git: "https://github.com/iulicaldarescu/Which-Country",
    },
    {
      project: projectSevenUrl,
      openModal: () => openModal(weatherPic),
      title: "Weather App",
      skills: ["HTML", "CSS", "JAVASCRIPT", "API", "REACT"],
      url: "https://amused-sink.surge.sh/",
      git: "https://github.com/iulicaldarescu/Web-Weather-App",
    },

    {
      project: projectEightUrl,
      openModal: () => openModal(rockPaperScissorsPic),
      title: "Rock Paper Scissors",
      skills: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
      url: "https://rock-paper-scissors-three-omega.vercel.app/",
      git: "https://github.com/iulicaldarescu/Web-Rock-Paper-Scissors",
    },

    {
      project: projectNineUrl,
      openModal: () => openModal(audiophilePic),
      title: "Audiophile Website",
      skills: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
      url: "https://web-audiophile-project.vercel.app/",
      git: "https://github.com/iulicaldarescu/Web-Audiophile-Project",
    },
    {
      project: projectTenUrl,
      openModal: () => openModal(invoicesPic),
      title: "Invoices App",
      skills: ["HTML", "CSS", "JAVASCRIPT", "REACT", "Supabase"],
      url: "invoice-app-ten-ashy.vercel.app",
      git: "https://github.com/iulicaldarescu/Invoice-app.git",
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

      <div className="md:grid md:grid-cols-2 gap-14 2xl:w-8/12 2xl:m-auto">
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
