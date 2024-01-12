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
      <div className="">
        <div className="flex justify-center">
          <img
            src={project}
            onClick={openModal}
            alt="Project 1"
            className="object-fit-cover h-56 max-h-72 w-7/12  sm:w-2/6 sm:max-h-72 md:w-5/6 md:h-60  lg:w-3/5 lg:h-[12rem] xl:h-[15rem] 2xl:h-[400px] 2xl:w-[400px] cursor-pointer rounded-2xl"
          ></img>
        </div>

        <p className="text-base mt-4 text-center pb-2 font-extrabold text-green-800 md:text-xl lg:text-xl">
          {title}
        </p>
        <div className="flex flex-wrap gap-4 italic text-gray-300 font-bold mt-2 text-md sm:text-sm sm:px-32 md:px-4 lg:text-base lg:px-10 justify-center">
          {skills.map((skill, index) => {
            return (
              <p className="bg-emerald-600 rounded-2xl px-5" key={index}>
                {skill}
              </p>
            );
          })}
        </div>
        <div className="flex gap-6 mt-6  text-sm text-slate-500 justify-center">
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
