import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Button from "./components/Button/Button";
import Card from "./components/Cards/Card";
// Component
function App() {
  return (
    //  Fragment
    <>
      {/* Element */}

      <Navbar />
      <div className="flexBox">
        <div className="right">
          <h1>Vite</h1>
          <h1>Next Generation Frontend Tooling</h1>
          <h4>
            Get ready for a development environment that can finally catch up
            with you.
          </h4>

          <Button text="Get Started" bgColor="#747bff" color="white" />
          <Button text="Why Vite?" />
          <Button text="View on GitHub" color="black" />
          <Button
            text="ViteConf 23!"
            bgColor="#747bff"
            color="white"
            icon={"🎉"}
          />
        </div>

        <div className="left">
          <img className="logo" src={viteLogo} alt="" />
        </div>
      </div>
      <div className="cardBox">
        <Card
          icon={"💡"}
          text="Instant Server Start"
          para="On demand file serving over native ESM, no bundling required!"
        />
        <Card
          text="Lightning"
          icon={"⚡️"}
          para="Hot Module Replacement (HMR) that stays fast regardless of app size."
        />
        <Card
          text="Rich Features"
          icon={"🛠️"}
          para="Out-of-the-box support for TypeScript, JSX, CSS and more."
        />
      </div>
      <div className="S_card">
        <Card
          icon={"📦"}
          text="Optimized Build"
          para="Pre-configured Rollup build with multi-page and library mode support."
        />

        <Card
          icon={"🔩"}
          text="Universal Plugins"
          para="Rollup-superset plugin interface shared between dev and build."
        />
        <Card
          text="Fully Typed APIs"
          icon={"🔑"}
          para="Flexible programmatic APIs with full TypeScript typing."
        />
      </div>
      <br />
      <br />
      <hr />
      <br />
      <div className="center_div">
        <Card text="Vite is free and open source, made possible by wonderful sponsors." />
      </div>
      <div className="NameBox">
        <Card text="Stack Blitz" icon={"⚡️"} />
        <Card text="LAB"   icon={"🔩"}/>
        <Card text="Astro"   icon={"🛠️"} />
      </div>
      <div className="center_div">
        <Card text="Premium Sponserd" />
      </div>
    </>
  );
}

export default App;

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
