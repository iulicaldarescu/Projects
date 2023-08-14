export function Portfolio(props) {
  const linkedIn = props.linkedIn;
  const github = props.github;
  const twitter = props.twitter;
  const facebook = props.facebook;

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="md:flex md:flex-row-reverse md:relative">
      <div className="md:flex md:justify-between md:basis-5/12 lg:basis-4/12">
        <p
          className="text-white text-lg flex justify-center
         md:absolute md:left-0 md:text-2xl md:font-bold md:mt-4 md:ml-6 2xl:text-3xl"
        >
          iulian caldarescu
        </p>

        <div className="w-4/6 m-auto bg-slate-800 md:w-full md:mr-0 md:mt-0 2xl:w-4/6">
          <div className="flex justify-center gap-4 mt-2 pt-4 md:justify-end md:gap-6 md:mr-4">
            <div>
              <a href="https://github.com/iulicaldarescu?tab=repositories">
                {github}
              </a>{" "}
            </div>
            <div>
              {" "}
              <a href="linkedin.com/in/iulian-caldarescu-a44535176">
                {linkedIn}
              </a>
            </div>
            <div>{twitter}</div>
            <div>{facebook}</div>
          </div>

          <div>
            <img src="/me.png" alt="Iulian" className="object-cover"></img>
          </div>
        </div>
      </div>

      <div className="md:basis-7/12 md:mt-20 lg:basis-8/12">
        <div className="text-white text-center mt-6 mx-4">
          <p className="text-4xl md:font-extrabold md:text-4xl lg:text-5xl 2xl:text-4xl">
            Nice to meet you!
          </p>
          <p className="text-4xl md:font-extrabold md:text-4xl md:mt-5 lg:text-5xl 2xl:text-5xl">
            I'm {""}
            <span className="border-b-4 border-b-green-800 md:font-extrabold md:text-4xl md:mt-5 lg:text-5xl 2xl:text-5xl">
              Iulian Caldarescu
            </span>
          </p>
          <p className="mt-6 leading-8 text-lg sm:px-4 md:mt-12 lg:text-2xl 2xl:text-4xl 2xl:px-32">
            Based in Romania, I'm a junior front-end developer passionate about
            building beautiful web apps.
          </p>
          <p
            onClick={scrollToBottom}
            className="text-2xl mt-10 md:text-left md:mt-10 lg:mt-16 lg:text-3xl 2xl:text-4xl 2xl:pt-32 2xl:ml-32 cursor-pointer"
          >
            <span className="border-b-4 border-b-green-800">Contact Me</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
