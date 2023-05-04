import Greeting from "./Greeting";

const MainContainer = () => {
  const container = document.createElement("div");
  container.className = "main-container";
  container.appendChild(Greeting());

  return container;
};

export default MainContainer;
