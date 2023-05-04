import "./style.css";
import MainContainer from "./components/Main/MainContainer";
import SideBar from "./components/Sidebar/Sidebar";

const Index = () => {
  const container = document.createElement("div");
  container.classList.add("flex");
  container.id = "content";

  container.appendChild(SideBar());
  container.appendChild(MainContainer());

  return container;
};

document.body.appendChild(Index());
