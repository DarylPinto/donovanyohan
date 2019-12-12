import React, { useState, useEffect } from 'react'


// const TypedText = ({ speed, text, delay }) => {
//   const [currentText, setCurrentText] = useState("");

//   function typeText(str) {
//     let nextChar = text[str.length];
//     console.log(str);
//     if (nextChar !== undefined) {
//       setCurrentText(str + nextChar);
//       setTimeout(() => {
//         typeText(str + nextChar);
//       }, 3000 / speed + Math.floor(Math.random() * 20))
//     } else {
//       return
//     }
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       typeText(currentText);
//     }, delay);
//   }, []);


//   return (
//     <p>
//       {currentText}
//       <span className="cursor">|</span>
//       <style jsx>{`
//       .cursor {
//         animation: fade 0.9s ease infinite;
//       }
//       @keyframes fade {
//         0% { opacity: 0; }
//         50% { opacity: 1; }
//         100% { opacity: 0; }
//       }
//       ::selection {
//         background: #FFF500; 
//       }
//     `}</style>
//     </p>

//   );
// };

const Hero = props => (
  <div>
    <div className='container'>
      <div className='wrapper'>
        <div className='logo' style={props.customImageStyle}>
          {props.image}
        </div>
        <div className='text'>
          {props.text}
          {/* <TypedText speed={props.speed ? props.speed : 150} text={props.text} delay={props.delay ? props.delay : 0} /> */}
        </div>
      </div>
    </div>
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: "Open Sans";
      }
      .container {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
      }
      .wrapper {
        display: flex;
        align-items: center;
        width: 95vw;
        max-width: 1100px;
      }
      .text {
        display: inline-block;
        margin-left: 32px;
        font-family: 'Open Sans';
        font-weight: 300;
        font-size: 47px;
        line-height: 1.3em;
        letter-spacing: -0.01em;
        height: 200px;
      }
      .typedText {
        display: inline-block !important;
      }
      .logo {
        margin-top: -24px;
        width: 429px;
        min-width: 429px;
      }



      // Adjust for small displays

      @media only screen and (max-width: 1130px) {
        .text {
          flex-basis: 60%;
          flex-shrink: 1;
          font-size: 4.1717vw;
          margin-left: 2.8vw;
          height: 18.18vw;
        }
        .logo {
          flex-shrink: 2;
          flex-basis: 40%;
          margin-top: -2.1818vw;
          min-width: 38%;
        }
      }



      // Adjust for Mobile

      @media only screen and (max-width: 767px) {
        .container {
          min-width: 100%;
          height: 95vh;
        }
        .wrapper {
          max-width: 100%;
          margin-top: 20vh;
          flex-direction: column;
        }
        .text {
          flex-basis: 100%;
          flex-shrink: unset;
          font-size: 8.5vw;
          margin: 24px;
          text-align: center;
          height: auto;
          text-size-adjust: none;
        }
        .logo {
          margin-top: 0;
          max-width: 66%;
          min-height: 66vw;
        }
      }
    `}</style>
  </div>
);

export default Hero;
