class ToggleTheme {
  constructor(element, moon) {
    this.element = element;
    this.moon = moon;
  }

  init() {
    this.element.addEventListener("click", () => {
      this.changeTheme();
    });
  }

  changeTheme() {
    if (this.moon.classList.contains("far")) {
      document.documentElement.style.setProperty(
        "--background-color",
        "hsl(207, 26%, 17%)"
      );
      document.documentElement.style.setProperty(
        "--background-elements",
        "hsl(209, 23%, 22%)"
      );
      document.documentElement.style.setProperty(
        "--text-color",
        "hsl(0, 0%, 100%)"
      );
      document.documentElement.style.setProperty(
        "--input-color",
        "hsl(0, 0%, 100%)"
      );
      document.documentElement.style.setProperty(
        "--box-shadow",
        "0 0 5px black"
      );
    } else {
      document.documentElement.style.setProperty(
        "--background-color",
        "hsl(0, 0%, 98%)"
      );
      document.documentElement.style.setProperty(
        "--background-elements",
        "hsl(0, 0%, 100%)"
      );
      document.documentElement.style.setProperty(
        "--text-color",
        "hsl(200, 15%, 8%"
      );
      document.documentElement.style.setProperty(
        "--input-color",
        "hsl(0, 0%, 52%)"
      );
      document.documentElement.style.setProperty(
        "--box-shadow",
        "0 0 5px gray"
      );
    }

    this.moon.classList.toggle("far");
    this.moon.classList.toggle("fas");
  }
}

export const toggleTheme = new ToggleTheme(
  document.querySelector(".header__toggle"),
  document.querySelector(".header__toggle__moon")
);
