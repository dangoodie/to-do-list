import squidLogo from "../../assets/squid-logo.svg";

const Logo = () => {
  const container = document.createElement("div");
  container.className = "logo-container";

  const squid = new Image();
  squid.src = squidLogo;
  squid.className = "logo-img";

  const logo = document.createElement("h1");
  logo.className = "logo-text";
  logo.innerText = "Squidlist";

  container.append(squid, logo);
  return container;
}

export default Logo