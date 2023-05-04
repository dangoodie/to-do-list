const Greeting = () => {
  const container = document.createElement("div");
  container.className = "greeting";
  container.textContent = "Good Morning";

  return container;
};

export default Greeting;
