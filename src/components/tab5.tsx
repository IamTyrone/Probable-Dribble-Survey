import React from "react";
import Answers from "./answers";

type Props = {
  setAnswers9: any;
  setAnswers10: any;
  questions: any
};

export default function Tab5({ setAnswers9, setAnswers10, questions }: Props) {
  return (
    <>
      <div className="">
        <h5 className="info-text">{questions[8]}? (checkboxes)</h5>
        <Answers setAnswers={setAnswers9} />
      </div>
      <br />
      <br />
      <br />
      <div className="">
        <h5 className="info-text">{questions[9]}? (checkboxes)</h5>
        <Answers setAnswers={setAnswers10} />
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
