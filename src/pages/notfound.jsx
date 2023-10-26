import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center font-bold text-center">
      <h1 className="text-3xl font-bold">
        Oops!
        <br />
        <p className="text-red-500 text-8xl mt-4">{error.status}</p>
        <br />
        <p className="text-xl font-bold">
          We are sorry, but the page you requested was not found
        </p>
      </h1>
    </div>
  );
};

export default ErrorPage;
