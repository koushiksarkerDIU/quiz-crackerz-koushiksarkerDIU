import React from "react";

const Tropic = ({ tropic }) => {
  const { id, name, logo, total } = tropic;
  return (
    <div>
      <div className="card mx-auto mb-8 card-compact content-center w-3/4 bg-base-200 shadow-2xl">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tropic;
