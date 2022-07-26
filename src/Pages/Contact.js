import React from "react";
import Header from "../Components/Header";

function Contact() {
  return (
    <div>
      <Header />
      <div className="container contact mt-5">
        <div className="row pt-5">
          <div className="col-md-6 p-5">
            <img src="./contactus.svg" alt="" />
          </div>
          <div className="col-md-6">
            <div className="form-contact m-2 p-5 n-box2">
              <h3 className="font-bold">Contact me!</h3>
              <hr />
              <input type="text" className="form-control" placeholder="Name" />
              <input
                type="textarea"
                className="form-control"
                placeholder="Email Id"
              />
              <textarea
                placeholder="Description"
                className="form-control"
                rows={3}
                defaultValue={""}
              />
              <button className="primary-button mt-3">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
