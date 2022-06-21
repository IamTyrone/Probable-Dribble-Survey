import React from "react";
import Answers from "./answers";

type Props = {
  setAnswers1: any;
  setAnswers2: any;
  questions: any;
};

export default function Tab1({ setAnswers1, setAnswers2, questions }: Props) {
  return (
    <>
      <div className="">
        <h5 className="info-text">{questions[0]}? (checkboxes)</h5>
        <Answers setAnswers={setAnswers1} />
      </div>
      <br />
      <br />
      <br />
      <div className="">
        <h5 className="info-text">{questions[1]}? (checkboxes)</h5>
        <Answers setAnswers={setAnswers2} />
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
