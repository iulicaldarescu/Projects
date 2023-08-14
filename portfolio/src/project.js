export function Project(props) {
  const project = props.project;
  const title = props.title;
  const skills = props.skills;
  const url = props.url;
  const git = props.git;
  const openModal = props.openModal;

  const projectPage = () => {
    window.open(url, "_blank");
  };

  const gitPage = () => {
    window.open(git, "_blank");
  };

  return (
    <div className="mt-10 text-white mx-4 pb-4 hover:scale-105 transform transition-transform duration-300 ease-in-out">
      <div>
        <div className="flex justify-center">
          <img
            src={project}
            onClick={openModal}
            alt="Project 1"
            className="object-fit-cover max-h-96 w-10/12 sm:w-5/6 sm:max-h-full lg:h-96 2x md:h-72l:h-96 2xl:w-10/12 cursor-pointer rounded-2xl"
          ></img>
        </div>

        <p className="text-3xl mt-4 pb-2 font-extrabold text-green-800 md:text-2xl lg:text-3xl">
          {title}
        </p>
        <div className="flex flex-wrap gap-4 italic text-gray-300 font-bold ml-8 mt-2 text-lg lg:text-lg">
          {skills.map((skill, index) => {
            return <p key={index}>{skill}</p>;
          })}
        </div>
        <div className="flex gap-6 mt-6 ml-8 text-2xl text-slate-500">
          <p onClick={projectPage} className="cursor-pointer">
            <span className="border-b-2 border-b-green-800 pb-1">
              VIEW SITE
            </span>
          </p>
          <p onClick={gitPage} className="cursor-pointer">
            <span className="border-b-2 border-b-green-800 pb-1">
              VIEW CODE
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
