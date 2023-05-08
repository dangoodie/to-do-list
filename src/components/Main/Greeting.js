import moment from "moment";

const Greeting = () => {
  const container = document.createElement("div");
  container.className = "greeting";

  function getGreeting() {
    const hour = moment().format("k");

    if (hour < 12) container.textContent = "Good Morning";
    if (hour >= 12 && hour < 17) container.textContent = "Good Afternoon";
    if (hour >= 17) container.textContent = "Good Evening";
  }
  getGreeting();

  setInterval(getGreeting, 1000);

  return container;
};

export default Greeting;
