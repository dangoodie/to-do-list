import SideBar from "./components/Sidebar";
import "./style.css";

const Index = () => {
  const container = document.createElement("div");
  container.id = "content";

  container.appendChild(SideBar());

  return container;
};

document.body.appendChild(Index());
