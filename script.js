const root = document.getElementById("root");

fetch("https://dogapi.dog/api/v2/breeds")
  .then((res) => {
    return res.json();
  })
  .then((result) => {
    console.log(result.data);
    result.data.slice(0, 10).forEach((dog) => {
      const name = document.createElement("p");
      name.setAttribute("class", "Name");
      name.textContent = dog.attributes.name;

      const btn = document.createElement("button");
      btn.textContent = "Description";
      btn.setAttribute("class", "main-btn");

      const description = document.createElement("p");
      description.setAttribute("class", "Description");
      description.textContent = dog.attributes.description;

      btn.addEventListener("click", () => {
        description.classList.toggle("show");

        if (btn.textContent === "close") {
          btn.textContent = "Description";
        } else {
          btn.textContent = "close";
        }
      });

      root.appendChild(name);
      root.appendChild(description);
      root.appendChild(btn);
    });
  })
  .catch((err) => console.error(err));
