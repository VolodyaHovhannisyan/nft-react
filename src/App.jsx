import * as styling from "./App.module.css";
import { exportComponentAsPNG } from "react-component-export-image";
import React, { useEffect, useRef, useState } from "react";

// eslint-disable-next-line
const styles = styling.default;

const pengParts = [
  "head",
  "leftEye",
  "leftEyeDiv",
  "rightEye",
  "rightEyeDiv",
  "bill",
  "aBody",
  "leftHand",
  "rightHand",
  "belly",
  "leftFoot",
  "rightFoot",
];

const randomColor = () => {
 
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const randomSize = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let containerStyle = {
  display: "flex",
  height: "700px",
  width: "700px",
  backgroundImage: `conic-gradient(${randomColor()},${randomColor()},${randomColor()},${randomColor()})`,
  backgroundColor: `${randomColor()}`,
};

let border = {
  color: `${randomColor()}`,
  weight: `${randomSize(7, 12)}px`,
  type: `inset`,
};

let body = {
  backgroundColor: `${randomColor()}`,
  backgroundImage: `linear-gradient(to right, ${randomColor()}, ${randomColor()})`,
};

let randHex = randomColor();

let penguinData = [
  {
    content: "head",
    height: `${randomSize(250, 500)}px`,
    width: "14vw",
    backgroundColor: `${body.backgroundColor}`,
    backgroundImage: `${body.backgroundImage}`,
    border: `${border.type}  ${border.weight} ${border.color}`,
    borderRadius: "60% 60%",
    position: "absolute",
    left: "45vw",
    top: "20vh",
  },
  {
    content: "leftEye",
    height: "13vh",
    width: "5vw",
    backgroundColor: `rgb(253 250 250)`,
    border: `${border.type}  ${border.weight} ${border.color}`,
    position: "absolute",
    left: "51vw",
    top: "30vh",
    borderRadius: "60% 60%",
    transform: "rotate(15deg)",
    zIndex: "11",
  },
  {
    content: "leftEyeDiv",
    height: "4vh",
    width: "2vw",
    backgroundColor: `${randomColor()}`,
    border: `${border.type}  ${border.weight} ${border.color}`,
    position: "absolute",
    left: `${randomSize(51.6, 53)}vw`,
    top: "35vh",
    borderRadius: "60% 60%",
    zIndex: "13",
  },
  {
    content: "rightEye",
    height: "13vh",
    width: "5vw",
    backgroundColor: `rgb(253 250 250)`,
    border: `${border.type}  ${border.weight} ${border.color}`,
    position: "absolute",
    left: "47vw",
    top: "30vh",
    borderRadius: "60% 60%",
    transform: "rotate(-15deg)",
  },
  {
    content: "rightEyeDiv",
    height: "4vh",
    width: "2vw",
    backgroundColor: `${randomColor()}`,
    border: `${border.type}  ${border.weight} ${border.color}`,
    position: "absolute",
    left: `${randomSize(48, 49)}vw`,
    top: "35vh",
    borderRadius: "60% 60%",
  },
  {
    content: "bill",
    height: "6vh",
    width: "6vh",
    backgroundColor: `${randomColor()}`,
    position: "absolute",
    left: "50vw",
    top: "40.5vh",
    border: `${border.type}  ${border.weight} ${border.color}`,
    zIndex: "12",
    borderRadius: "75% 0% 0 0",
    transform: "rotate(45deg)",
  },
  {
    content: "aBody",
    height: "40vh",
    width: "20vw",
    backgroundColor: `${body.backgroundColor}`,
    border: `${border.type}  ${border.weight} ${border.color}`,
    backgroundImage: `linear-gradient(to right, ${randomColor()}, ${randomColor()}, ${randomColor()})`,
    borderRadius: "60% 60%",
    position: "absolute",
    left: "42vw",
    top: "45vh",
    zIndex: "10",
  },
  {
    content: "leftHand",
    height: "25vh",
    width: "4vw",
    backgroundColor: `rgb(253 250 250)`,
    border: `${border.type}  ${border.weight} ${border.color}`,
    borderRadius: "60% 60%",
    position: "absolute",
    left: "60vw",
    top: "50vh",
    zIndex: "11",
    transform: "rotate(-25deg)",
  },
  {
    content: "rightHand",
    height: "25vh",
    width: "4vw",
    backgroundColor: `rgb(253 250 250)`,
    border: `${border.type}  ${border.weight} ${border.color}`,
    borderRadius: "60% 60%",
    position: "absolute",
    left: "40vw",
    top: "50vh",
    zIndex: "11",
    transform: "rotate(25deg)",
  },
  {
    content: "belly",
    height: "36vh",
    width: "16vw",
    backgroundColor: `rgb(253 250 250)`,
    border: `${border.type}  ${border.weight} ${border.color}`,
    borderRadius: "60% 60%",
    position: "absolute",
    left: "44vw",
    top: "45vh",
    zIndex: "11",
  },
  {
    content: "leftFoot",
    height: "8vh",
    width: "7vw",
    backgroundColor: `rgb(253 250 250)`,
    border: `${border.type}  ${border.weight} ${border.color}`,
    borderRadius: "60% 60%",
    position: "absolute",
    left: "53vw",
    top: "80vh",
    zIndex: "11",
    transform: "rotate(15deg)",
  },
  {
    content: "rightFoot",
    height: "8vh",
    width: "7vw",
    backgroundColor: `rgb(253 250 250)`,
    border: `${border.type}  ${border.weight} ${border.color}`,
    borderRadius: "60% 60%",
    position: "absolute",
    left: "43vw",
    top: "80vh",
    zIndex: "11",
    transform: "rotate(-15deg)",
  },
];

const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className={"container"} style={containerStyle}>
      
        <div
          className=""
          style={{
            height: `${randomSize(7, 10)}vh`,
            width: `21vw`,
            backgroundImage: `linear-gradient(to right, ${randomColor()}, ${randomColor()}, ${randomColor()})`,
            backgroundColor: `${randomColor()}`,
            position: "absolute",
            left: "42.5vw",
            top: "20vh",
            zIndex: "12",
            borderRadius: "70px 70px 40px 40px",
            border: `${border.type}  ${border.weight} ${border.color}`,
          }}
        ></div>{" "}
        <div
          className=""
          style={{
            height: `${randomSize(7, 12)}vh`,
            width: `12vw`,
            backgroundImage: `linear-gradient(to right, ${randomColor()}, ${randomColor()}, ${randomColor()})`,
            backgroundColor: `${randomColor()}`,
            position: "absolute",
            left: "46.5vw",
            top: "21vh",
            zIndex: "12",
            borderRadius: "70px 70px 40px 40px",
            border: `${border.type}  ${border.weight} ${border.color}`,
          }}
        >
          <div
            className=""
            style={{
              height: `${randomSize(2.7, 4)}vh`,
              width: `50px`,
              backgroundImage: `linear-gradient(to right, ${randomColor()}, ${randomColor()}, ${randomColor()})`,
              backgroundColor: `${randomColor()}`,
              position: "absolute",
              left: "3.5vw",
              top: "1vh",
              zIndex: "12",
              borderRadius: "70px 70px 40px 40px",
              border: `${border.type}  ${border.weight} ${border.color}`,
            }}
          ></div>{" "}
        </div>{" "}
        {pengParts.map((part, i) => {
          return (
            <div style={penguinData[i]} key={part}>
              {" "}
            </div>
          );
        })}{" "}
        <h5> {randHex} </h5>
      </div>
    </div>
  );
});

const App = () => {
  const componentRef = useRef();

  const [show, setShow] = useState(0);

  useEffect(() => {
    console.log("mounted");
    if (show < 50) {
      setTimeout(() => {
        console.log("updated");

        border = {
          color: `${randomColor()}`,
          weight: `${randomSize(7, 12)}px`,
          type: `inset`,
        };

        containerStyle = {
          display: "flex",
          height: "700px",
          width: "700px",
          backgroundImage: `linear-gradient(to right, ${randomColor()}, ${randomColor()})`,
          backgroundColor: `${randomColor()}`,
        };

        body = {
          backgroundColor: `${randomColor()}`,
          backgroundImage: `linear-gradient(to right, ${randomColor()}, ${randomColor()})`,
        };

        penguinData = [
          {
            content: "head",
            height: `${randomSize(250, 500)}px`,
            width: "14vw",
            backgroundColor: `${body.backgroundColor}`,
            backgroundImage: `${body.backgroundImage}`,
            border: `${border.type}  ${border.weight} ${border.color}`,
            borderRadius: "60% 60%",
            position: "absolute",
            left: "45vw",
            top: "20vh",
          },
          {
            content: "leftEye",
            height: "13vh",
            width: "5vw",
            backgroundColor: `rgb(253 250 250)`,
            border: `${border.type}  ${border.weight} ${border.color}`,
            position: "absolute",
            left: "51vw",
            top: "30vh",
            borderRadius: "60% 60%",
            transform: "rotate(15deg)",
            zIndex: "11",
          },
          {
            content: "leftEyeDiv",
            height: "4vh",
            width: "2vw",
            backgroundColor: `${randomColor()}`,
            border: `${border.type}  ${border.weight} ${border.color}`,
            position: "absolute",
            left: `${randomSize(51.6, 53)}vw`,
            top: "35vh",
            borderRadius: "60% 60%",
            zIndex: "13",
          },
          {
            content: "rightEye",
            height: "13vh",
            width: "5vw",
            backgroundColor: `rgb(253 250 250)`,
            border: `${border.type}  ${border.weight} ${border.color}`,
            position: "absolute",
            left: "47vw",
            top: "30vh",
            borderRadius: "60% 60%",
            transform: "rotate(-15deg)",
          },
          {
            content: "rightEyeDiv",
            height: "4vh",
            width: "2vw",
            backgroundColor: `${randomColor()}`,
            border: `${border.type}  ${border.weight} ${border.color}`,
            position: "absolute",
            left: `${randomSize(48, 49)}vw`,
            top: "35vh",
            borderRadius: "60% 60%",
          },
          {
            content: "bill",
            height: "6vh",
            width: "6vh",
            backgroundColor: `${randomColor()}`,
            position: "absolute",
            left: "50vw",
            top: "40.5vh",
            border: `${border.type}  ${border.weight} ${border.color}`,
            zIndex: "12",
            borderRadius: "75% 0% 0 0",
            transform: "rotate(45deg)",
          },
          {
            content: "aBody",
            height: "40vh",
            width: "20vw",
            backgroundColor: `${body.backgroundColor}`,
            border: `${border.type}  ${border.weight} ${border.color}`,
            backgroundImage: `linear-gradient(to right, ${randomColor()}, ${randomColor()}, ${randomColor()})`,
            borderRadius: "60% 60%",
            position: "absolute",
            left: "42vw",
            top: "45vh",
            zIndex: "10",
          },
          {
            content: "leftHand",
            height: "25vh",
            width: "4vw",
            backgroundColor: `rgb(253 250 250)`,
            border: `${border.type}  ${border.weight} ${border.color}`,
            borderRadius: "60% 60%",
            position: "absolute",
            left: "60vw",
            top: "50vh",
            zIndex: "11",
            transform: "rotate(-25deg)",
          },
          {
            content: "rightHand",
            height: "25vh",
            width: "4vw",
            backgroundColor: `rgb(253 250 250)`,
            border: `${border.type}  ${border.weight} ${border.color}`,
            borderRadius: "60% 60%",
            position: "absolute",
            left: "40vw",
            top: "50vh",
            zIndex: "11",
            transform: "rotate(25deg)",
          },
          {
            content: "belly",
            height: "36vh",
            width: "16vw",
            backgroundColor: `rgb(253 250 250)`,
            border: `${border.type}  ${border.weight} ${border.color}`,
            borderRadius: "60% 60%",
            position: "absolute",
            left: "44vw",
            top: "45vh",
            zIndex: "11",
          },
          {
            content: "leftFoot",
            height: "8vh",
            width: "7vw",
            backgroundColor: `rgb(253 250 250)`,
            border: `${border.type}  ${border.weight} ${border.color}`,
            borderRadius: "60% 60%",
            position: "absolute",
            left: "53vw",
            top: "80vh",
            zIndex: "11",
            transform: "rotate(15deg)",
          },
          {
            content: "rightFoot",
            height: "8vh",
            width: "7vw",
            backgroundColor: `rgb(253 250 250)`,
            border: `${border.type}  ${border.weight} ${border.color}`,
            borderRadius: "60% 60%",
            position: "absolute",
            left: "43vw",
            top: "80vh",
            zIndex: "11",
            transform: "rotate(-15deg)",
          },
        ];

        randHex = randomColor();

        setShow((prev) => (prev += 1));
        // exportComponentAsPNG(componentRef)
      }, 300);
    }
    return () => {
      return clearTimeout(2000);
    };
  }, [show]);

  return (
    <>
      <button
        onClick={() => {
          exportComponentAsPNG(componentRef);
        }}
      >
        Export As PNG
      </button>
      <ComponentToPrint ref={componentRef} />
    </>
  );
};

export default App;
 