import React from "react";
import Answers from "./answers";

type Props = {
  setAnswers3: any;
  setAnswers4: any;
};

export default function Tab2({ setAnswers3, setAnswers4 }: Props) {
  return (
    <>
      <div className="">
        <h5 className="info-text">What are you doing? (checkboxes)</h5>
        <Answers setAnswers={setAnswers3} />
      </div>
      <br />
      <br />
      <br />
      <div className="">
        <h5 className="info-text">Why are you doing it? (checkboxes)</h5>
        <Answers setAnswers={setAnswers4} />
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
