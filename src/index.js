import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="Prathyusha.jpg" alt="Prathyusha Shambala" />
  );
}

function Intro() {
  return (
    <div>
      <h1>Prathyusha Shambala</h1>
      <p>
        I'm a passionate front-end developer with a strong foundation in HTML,
        CSS, JavaScript, TypeScript, Angular, ReactJS, Next.js and testing
        frameworks like Jest & Cypress. I specialize in building clean,
        responsive, and user-friendly interfaces that bring digital products to
        life. With a keen eye for design and a love for problem-solving, I enjoy
        transforming complex challenges into elegant, functional solutions.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Angular" emoji="👶" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
