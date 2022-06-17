import React from "react";
import Answers from "./answers";

type Props = {};

export default function Tab2({}: Props) {
  return (
    <>
      <div className="">
        <h5 className="info-text">What are you doing? (checkboxes)</h5>
        <Answers />
      </div>
      <br />
      <br />
      <br />
      <div className="">
        <h5 className="info-text">Why are you doing it? (checkboxes)</h5>
        <Answers />
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
