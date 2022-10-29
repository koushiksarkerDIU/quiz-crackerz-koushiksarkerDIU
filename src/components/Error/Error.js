import { faFaceSadCry } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      {error && (
        <div>
          <p className="text-9xl mt-10">
            <FontAwesomeIcon icon={faFaceSadCry}></FontAwesomeIcon>
          </p>
          <p className="text-2xl my-5">
            Please Go to{" "}
            <Link className="text-blue-600 font-semibold italic" to="/">
              Home
            </Link>{" "}
            Page
          </p>
          <p>{error.status}</p>
          <p>{error.statusText || error.message}</p>
        </div>
      )}
    </div>
  );
};

export default Error;
