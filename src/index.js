import SideBar from "./components/Sidebar/Sidebar";
import "./style.css";

const Index = () => {
  const container = document.createElement("div");
  container.classList.add("flex")
  container.id = "content";

  container.appendChild(SideBar());

  return container;
};

document.body.appendChild(Index());
