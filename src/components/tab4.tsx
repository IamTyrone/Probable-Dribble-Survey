import React from "react";
import Answers from "./answers";

type Props = {
  setAnswers7: any;
  setAnswers8: any;
};

export default function Tab4({ setAnswers7, setAnswers8 }: Props) {
  return (
    <>
      <div className="">
        <h5 className="info-text">What are you doing? (checkboxes)</h5>
        <Answers setAnswers={setAnswers7} />
      </div>
      <br />
      <br />
      <br />
      <div className="">
        <h5 className="info-text">Why are you doing it? (checkboxes)</h5>
        <Answers setAnswers={setAnswers8} />
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
