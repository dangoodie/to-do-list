const TopSection = () => {
  const title = "Projects";

  const container = document.createElement("div");
  container.className = "top-section";

  const titleText = document.createElement("h2");
  titleText.className = "title";
  titleText.textContent = title;

  const analyticsBtn = document.createElement("div");
  analyticsBtn.className = "analytics-btn";
  analyticsBtn.textContent = "Analytics";

  container.append(titleText, analyticsBtn);

  return container;
};

export default TopSection;
