export function Skill(props) {
  const skill = props.skill;

  return (
    <div className="text-slate-500 mt-10 text-center hover:text-slate-50">
      <p className="text-2xl font-bold 2xl:text-2xl italic">{skill}</p>
    </div>
  );
}
