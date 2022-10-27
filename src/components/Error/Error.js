import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      {error && (
        <div>
          <p>{error.status}</p>
          <p>{error.statusText || error.message}</p>
        </div>
      )}
    </div>
  );
};

export default Error;
