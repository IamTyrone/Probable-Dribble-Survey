import React, { useState } from "react";

type Props = {
  setAnswers: any;
};

export default function Answers({ setAnswers }: Props) {
  const [clicked5, setClicked5] = useState(false);
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  const [rating, setRating] = useState(0);

  const clickedStyle = { color: "#33b5e5" };
  const defaultStyle = {};
  return (
    <div className="row">
      <div className="col-sm-10 col-sm-offset-2">
        <div className="col-sm-2">
          <div className="choice" data-toggle="wizard-checkbox">
            <input
              type="checkbox"
              name="jobb"
              value="Design"
              onClick={() => {
                setClicked1(true);
              }}
            />
            <div
              className="card card-checkboxes card-hover-effect"
              onClick={() => {
                if (
                  clicked5 === false &&
                  clicked4 === false &&
                  clicked3 === false &&
                  clicked2 === false &&
                  clicked1 === false
                ) {
                  setClicked1(true);
                  setRating(1);
                } else {
                  setClicked1(false);
                }
              }}
            >
              <i
                className="ti-star"
                style={clicked1 ? clickedStyle : defaultStyle}
              ></i>
            </div>
            <p>1</p>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="choice" data-toggle="wizard-checkbox">
            <input type="checkbox" name="jobb" value="Code" />
            <div
              className="card card-checkboxes card-hover-effect"
              onClick={() => {
                if (
                  clicked5 === false &&
                  clicked4 === false &&
                  clicked3 === false &&
                  clicked2 === false &&
                  clicked1 === false
                ) {
                  setClicked2(true);
                  setRating(2);
                } else {
                  setClicked2(false);
                }
              }}
            >
              <i
                className="ti-star"
                style={clicked2 ? clickedStyle : defaultStyle}
              ></i>
            </div>
            <p>2</p>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="choice" data-toggle="wizard-checkbox">
            <input type="checkbox" name="jobb" value="Develop" />
            <div
              className="card card-checkboxes card-hover-effect"
              onClick={() => {
                if (
                  clicked5 === false &&
                  clicked4 === false &&
                  clicked3 === false &&
                  clicked2 === false &&
                  clicked1 === false
                ) {
                  setClicked3(true);
                  setRating(3);
                } else {
                  setClicked3(false);
                }
              }}
            >
              <i
                className="ti-star"
                style={clicked3 ? clickedStyle : defaultStyle}
              ></i>
            </div>
            <p>3</p>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="choice" data-toggle="wizard-checkbox">
            <input type="checkbox" name="jobb" value="Develop" />
            <div
              className="card card-checkboxes card-hover-effect"
              onClick={() => {
                if (
                  clicked5 === false &&
                  clicked4 === false &&
                  clicked3 === false &&
                  clicked2 === false &&
                  clicked1 === false
                ) {
                  setClicked4(true);
                  setRating(4);
                } else {
                  setClicked4(false);
                }
              }}
            >
              <i
                className="ti-star"
                style={clicked4 ? clickedStyle : defaultStyle}
              ></i>
            </div>
            <p>4</p>
          </div>
        </div>
        <div className="col-sm-2">
          <div className="choice" data-toggle="wizard-checkbox">
            <input type="checkbox" name="jobb" value="Develop" />
            <div
              className="card card-checkboxes card-hover-effect"
              onClick={() => {
                if (
                  clicked5 === false &&
                  clicked4 === false &&
                  clicked3 === false &&
                  clicked2 === false &&
                  clicked1 === false
                ) {
                  setClicked5(true);
                  setRating(5);
                } else {
                  setClicked5(false);
                }
              }}
            >
              <i
                className="ti-star"
                style={clicked5 ? clickedStyle : defaultStyle}
              ></i>
            </div>
            <p>5</p>
          </div>
        </div>
      </div>
    </div>
  );
}
