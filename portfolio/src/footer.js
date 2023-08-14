export function Footer(props) {
  const linkedIn = props.linkedIn;
  const github = props.github;
  const twitter = props.twitter;
  const facebook = props.facebook;
  return (
    <div className="my-6">
      <p className="text-white text-xl flex justify-center 2xl:text-3xl">
        iulian caldarescu
      </p>

      <div className="flex justify-center gap-4 mt-6 sm:gap-8 md:gap-20 ">
        <p>{github}</p>
        <p>{linkedIn}</p>
        <p>{twitter}</p>
        <p>{facebook}</p>
      </div>
    </div>
  );
}
