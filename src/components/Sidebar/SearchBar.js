const SearchBar = () => {
  const container = document.createElement("div");
  container.className = "search-container";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Search";
  input.className = "search-input";
  input.name = "search";

  container.appendChild(input);

  return container;
}

export default SearchBar;
