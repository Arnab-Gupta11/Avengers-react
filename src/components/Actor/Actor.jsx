import PropTypes from "prop-types";
const Actor = ({ actor, handleSelect }) => {
  const { role, image, name, salary } = actor;
  return (
    <div className="">
      <div className="bg-violet-300 text-center px-5 py-10 text-slate-700 rounded-lg">
        <img className="text-center rounded-full w-40 mx-auto" src={image} alt="" />
        <h2 className="text-2xl font-bold mt-4 mb-3">{name}</h2>
        <div className="flex justify-between items-center">
          <p className="font-semibold">
            <span className="text-xl font-semibold">Salary : </span>
            {salary}$
          </p>
          <p className="font-semibold">{role}</p>
        </div>
        <button className="bg-violet-800 text-white px-5 py-3 rounded-lg mt-5" onClick={() => handleSelect(actor)}>
          Select
        </button>
      </div>
    </div>
  );
};

Actor.propTypes = {
  actor: PropTypes.object,
  handleSelect: PropTypes.func,
};
export default Actor;
