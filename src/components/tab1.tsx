import React from "react";
import Answers from "./answers";

type Props = {
  setAnswers1: any;
  setAnswers2: any;
};

export default function Tab1({ setAnswers1, setAnswers2 }: Props) {
  return (
    <>
      <div className="">
        <h5 className="info-text">What are you doing? (checkboxes)</h5>
        <Answers setAnswers={setAnswers1} />
      </div>
      <br />
      <br />
      <br />
      <div className="">
        <h5 className="info-text">Why are you doing it? (checkboxes)</h5>
        <Answers setAnswers={setAnswers2} />
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
