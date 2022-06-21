import React from "react";
import Answers from "./answers";

type Props = {
  setAnswers5: any;
  setAnswers6: any;
  questions: any
};

export default function Tab3({ setAnswers5, setAnswers6, questions }: Props) {
  return (
    <>
      <div className="">
        <h5 className="info-text">{questions[4]}? (checkboxes)</h5>
        <Answers setAnswers={setAnswers5} />
      </div>
      <br />
      <br />
      <br />
      <div className="">
        <h5 className="info-text">{questions[5]}? (checkboxes)</h5>
        <Answers setAnswers={setAnswers6} />
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
