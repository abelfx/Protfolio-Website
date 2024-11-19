document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("searchBar");

  const java = document.querySelectorAll(".java");
  const js = document.querySelectorAll(".javaScript");

  searchBar.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const search = searchBar.value.trim();
      if (search === "java") {
        js.forEach((elements) => {
          elements.style.display = "none";
        });

        java.forEach((elements) => {
          elements.style.display = "block";
        });
      } else if (search === "javaScript") {
        java.forEach((elements) => {
          elements.style.display = "none";
        });

        js.forEach((elements) => {
          elements.style.display = "block";
        });
      }
    }
  });
});
