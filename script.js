const root = document.getElementById("root");

fetch(
  "https://api.thedogapi.com/v1/breeds?page=0&api_key=live_MzN4dbb958FOUG2pVKxfXc2d6DuheEAc4dADYsOR7GyRmxJSKqQbvTNn3m0tQ7sr"
)
  .then((res) => {
    return res.json();
  })
  .then((result) => {
    console.log(result);
    let rBreed = [];
    for (let i = 0; i < 10; i++) {
      let i = Math.floor(Math.random() * result.length);
      let r = result[i];
      rBreed.push(r);
    }

    rBreed.forEach((dog) => {
      const name = document.createElement("p");
      name.setAttribute("class", "Name");
      name.textContent = dog.name;

      const img = document.createElement("img");
      img.setAttribute("src", dog.image.url);
      img.setAttribute("class", "dog-img");

      const btn = document.createElement("button");
      btn.textContent = "Description";
      btn.setAttribute("class", "main-btn");

      const description = document.createElement("p");
      description.setAttribute("class", "Description");
      description.textContent = dog.description || dog.temperament;

      btn.addEventListener("click", () => {
        description.classList.toggle("show");

        if (btn.textContent === "close") {
          btn.textContent = "Description";
        } else {
          btn.textContent = "close";
        }
      });

      root.appendChild(name);
      root.appendChild(img);
      root.appendChild(description);
      root.appendChild(btn);
    });
  })
  .catch((err) => console.error(err));
