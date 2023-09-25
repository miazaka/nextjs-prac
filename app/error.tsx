"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("error", error);

  return (
    <>
      <div>ErrorPage</div>;
      <button className="btn" onClick={() => reset()}>retry</button>
    </>
  );
};

export default ErrorPage;
