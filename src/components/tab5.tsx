import React from "react";
import Answers from "./answers";

type Props = {
  setAnswers9: any;
  setAnswers10: any;
};

export default function Tab5({ setAnswers9, setAnswers10 }: Props) {
  return (
    <>
      <div className="">
        <h5 className="info-text">What are you doing? (checkboxes)</h5>
        <Answers setAnswers={setAnswers9} />
      </div>
      <br />
      <br />
      <br />
      <div className="">
        <h5 className="info-text">Why are you doing it? (checkboxes)</h5>
        <Answers setAnswers={setAnswers10} />
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
