import React from "react";
import Answers from "./answers";

type Props = {
  setAnswers5: any;
  setAnswers6: any;
};

export default function Tab3({ setAnswers5, setAnswers6 }: Props) {
  return (
    <>
      <div className="">
        <h5 className="info-text">What are you doing? (checkboxes)</h5>
        <Answers setAnswers={setAnswers5} />
      </div>
      <br />
      <br />
      <br />
      <div className="">
        <h5 className="info-text">Why are you doing it? (checkboxes)</h5>
        <Answers setAnswers={setAnswers6} />
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
