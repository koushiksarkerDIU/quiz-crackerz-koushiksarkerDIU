import React from "react";
import { Link } from "react-router-dom";
import Static from "../Static/Static";

const Tropic = ({ tropic }) => {
  const { name, logo, total, id } = tropic;
  return (
    <div>
      <div className="card mx-auto mb-8 card-compact content-center w-3/4 bg-base-200 shadow-2xl">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-between items-center">
            <h2 className="card-title">{name}</h2>
            <Link to={`/quiz/${id}`}>
              <button className="btn btn-outline">Lets Start </button>
            </Link>
            <Static quizTotal={total}></Static>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tropic;
