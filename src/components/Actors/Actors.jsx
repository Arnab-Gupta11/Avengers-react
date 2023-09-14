import { useEffect, useState } from "react";
import Actor from "../Actor/Actor";
import PropTypes from "prop-types";
const Actors = ({ handleSelect }) => {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setActors(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-5">
      {actors.map((actor) => (
        <Actor key={actor.id} handleSelect={handleSelect} actor={actor}></Actor>
      ))}
    </div>
  );
};

Actors.propTypes = {
  handleSelect: PropTypes.func,
};
export default Actors;
