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

const projectThreeUrl = "feedback-app.png";
const projectFourUrl = "/password-gen.png";
const projectFiveUrl = "/calculator.png";
const projectSixUrl = "/countries.png";
const projectSevenUrl = "/weatherApp.png";
const projectEightUrl = "/rock-paper-game.png";
const projectNineUrl = "/audiophile.png";
const projectTenUrl = "/Invoices-app.png";
const projectElevenUrl = "/quizz.png";
const countriesPic = "/countriesPic.png";
const calculatorPic = "/calculatorPic.png";
const passwordGenPic = "/passwordGenPic.png";
const weatherPic = "/weatherPic.png";
const rockPaperScissorsPic = "/rockpaperscissorPic.png";
const audiophilePic = "/audiophilePic.png";
const invoicesPic = "/invoicesPic.png";
const quizzPic = "/quizzPic.png";
const feedbackPic = "/feedbackPic.png";

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
    "Supabase",
  ];
  const projects = [
    {
      project: projectFourUrl,
      openModal: () => openModal(passwordGenPic),
      title: "Password Generator",
      skills: ["HTML", "JAVASCRIPT", "TAILWIND CSS"],
      url: "https://nimble-figolla-1dde1d.netlify.app",
      git: "https://github.com/iulicaldarescu/Web-password-generator",
    },
    {
      project: projectFiveUrl,
      openModal: () => openModal(calculatorPic),
      title: "Calculator",
      skills: ["HTML", "TAILWIND CSS", "JAVASCRIPT", "REACT"],
      url: "https://majestic-stocking.surge.sh/",
      git: "https://github.com/iulicaldarescu/Web-Science-Calculator",
    },

    {
      project: projectSixUrl,
      openModal: () => openModal(countriesPic),
      title: "Country finder",
      skills: ["HTML", "TAILWIND CSS", "TYPESCRIPT", "API", "REACT"],
      url: "https://find-country-pradbl85j-iulicaldarescu.vercel.app/",
      git: "https://github.com/iulicaldarescu/Find-Country.git",
    },
    {
      project: projectSevenUrl,
      openModal: () => openModal(weatherPic),
      title: "Weather App",
      skills: ["HTML", "TAILWIND CSS", "JAVASCRIPT", "API", "REACT"],
      url: "https://amused-sink.surge.sh/",
      git: "https://github.com/iulicaldarescu/Web-Weather-App",
    },

    {
      project: projectEightUrl,
      openModal: () => openModal(rockPaperScissorsPic),
      title: "Rock Paper Scissors",
      skills: ["HTML", "TAILWIND CSS", "JAVASCRIPT", "REACT"],
      url: "https://rock-paper-scissors-three-omega.vercel.app/",
      git: "https://github.com/iulicaldarescu/Web-Rock-Paper-Scissors",
    },

    {
      project: projectNineUrl,
      openModal: () => openModal(audiophilePic),
      title: "Audiophile Website",
      skills: ["HTML", "TAILWIND CSS", "JAVASCRIPT", "REACT"],
      url: "https://web-audiophile-project.vercel.app/",
      git: "https://github.com/iulicaldarescu/Web-Audiophile-Project",
    },
    {
      project: projectTenUrl,
      openModal: () => openModal(invoicesPic),
      title: "Invoices App",
      skills: ["HTML", "TAILWIND CSS", "JAVASCRIPT", "REACT", "Supabase"],
      url: "https://invoice-app-ten-ashy.vercel.app/",
      git: "https://github.com/iulicaldarescu/Invoice-app.git",
    },
    {
      project: projectElevenUrl,
      openModal: () => openModal(quizz),
      title: "FrontEnd Quizz",
      skills: ["HTML", "TAILWIND CSS", "JAVASCRIPT", "REACT", "Supabase"],
      url: "https://quizz-app-pi-virid.vercel.app/",
      git: "https://github.com/iulicaldarescu/Quizz-App",
    },
    {
      project: projectThreeUrl,
      openModal: () => openModal(feedbackPic),
      title: "Feedback-app",
      skills: ["HTML", "TAILWIND CSS", "JAVASCRIPT", "REACT", "Supabase"],
      url: "https://product-feedback-w86y-71pxe8hzf-iulicaldarescus-projects.vercel.app/",
      git: "https://github.com/iulicaldarescu/Product-feedback",
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
      <div className="grid grid-cols-2 sm:grid-cols-3 2xl:grid 2xl:grid-cols-3 2xl:w-5/6 2xl:m-auto">
        {skills.map((skill, index) => {
          return <Skill key={index} skill={skill}></Skill>;
        })}
      </div>
      <p className="mt-20 border-2"></p>
      <div className="flex justify-between my-20 font-bold align-middle mx-4 sm:mx-8 2xl:mx-48">
        <h1 className="text-xl text-white 2xl:text-4xl">Projects</h1>
        <Contact
          marginTop={"mt-0"}
          textSize={"text-md"}
          justify={"center"}
        ></Contact>
      </div>

      <div className="md:grid md:grid-cols-2 lg:grid-cols-2 gap-14 2xl:w-8/12 2xl:m-auto">
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
