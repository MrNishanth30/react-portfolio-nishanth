import React from "react";
import Courosel from "../Components/Courosel";
import Header from "../Components/Header";

function Home() {
  return (
    <div>
      <Header />
      <div
        className="introduction flex-width-center"
        style={{ backgroundImage: `url("./introbg.svg")` }}
      >
        <div>
          <h1 data-aos="fade-up">Nishanth</h1>
          <div className="intro-content d-flex justify-content-between">
            <p>Software Developer</p>
            <button className="primary-button font-bold"><a href="#courosel">Get started</a></button>
          </div>
        </div>
      </div>
      <Courosel />
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#001220"
            fill-opacity="1"
            d="M0,160L24,138.7C48,117,96,75,144,90.7C192,107,240,181,288,218.7C336,256,384,256,432,234.7C480,213,528,171,576,181.3C624,192,672,256,720,272C768,288,816,256,864,213.3C912,171,960,117,1008,128C1056,139,1104,213,1152,202.7C1200,192,1248,96,1296,64C1344,32,1392,64,1416,80L1440,96L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-md-4">
            <div className="n-box2 p-5 font-bold">
              <h1 data-aos="fade-right">Yes you are right...</h1>
              <br />
              <p>I'm a javascript developer</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <img data-aos="fade-up" src="./jsbuff.svg" alt="" width="200" height="200" />
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-md-4">
            <div className="n-box2 p-5 font-bold">
              <p data-aos="fade-left">
                JavaScript (often shortened to JS) is a lightweight,
                interpreted, object-oriented language with first-class
                functions, and is best known as the scripting language for Web
                pages, but it's used in many non-browser environments as well
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container n-box2 my-5 devStack">
        <div className="text-center">
          <h3 className="font-bold">My Development Stack</h3>
          <hr />
          <img src="/developer.svg" alt="" width="200" height="200" />
        </div>
        <div className="row">
          <div className="col-md-4 font-bold">
            <h3 className="font-bold">FrontEnd</h3>
            <hr />
            <p>HTML 5/CSS</p>
            <p>Javascript</p>
            <p>JQuery</p>
            <p>React.js</p>
            <p>Redux</p>
          </div>
          <div className="col-md-4 text-center">
            <h3 className="font-bold">UI/Styling</h3>
            <hr />
            <p>Bootstrap</p>
            <p>ANT Design</p>
            <p>Material UI</p>
            <p>Kendo UI</p>
          </div>
          <div className="col-md-4 text-end">
            <h3 className="font-bold">Backend/DB</h3>
            <hr />
            <p>DotNet C#(MVC)</p>
            <p>SQL</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className=" font-bold text-center">Who is Nishanth ?</h3>
        <div
          className="myProfile flex-width-center"
          style={{ backgroundImage: `url("./blog.svg")` }}
        >
          <div>
            <h3>Hi ,Hello ,Namaste</h3>
            <hr />
            <p>
              <pre>
                {JSON.stringify(
                  {
                    Name: "Nishanth Kotian",
                    From: "UDUPI Karnataka",
                    Age: 25,
                    Gender: "Male",
                  },
                  null,
                  2
                )}
              </pre>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
