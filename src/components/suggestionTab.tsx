import React from 'react'

type Props = {
  setSuggestion: any;
};

export default function SuggestionTab({ setSuggestion } : Props) {
  return (
    <>
      <div className="">
        {/* <h5 className="info-text"></h5> */}
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="tab-pane" id="description">
              <div className="row">
                <h5 className="info-text">
                  {" "}
                  Tell us what you think we can improve.{" "}
                </h5>
                <div className="col-sm-6 col-sm-offset-1">
                  <div className="form-group">
                    <label>Suggestion description</label>
                    <textarea
                      className="form-control"
                      placeholder=""
                      rows={9}
                      onChange={(e: any)=>{setSuggestion(e.target.value)}}
                    ></textarea>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Example</label>
                    <p className="description">
                      "Your text is not bold enough for me to see. Could you
                      mind increasing the weight of the font"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}