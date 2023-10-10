console.log("Script start runing");

function displayList() {
  axios.get("https://northwind.vercel.app/api/products").then((response) => {
    var products = response.data;
    var count = document.getElementById("itemCount").value;
    var counter = 0;
    console.log(count + " " + counter);
    products.forEach((element) => {
      if (counter >= count) {
        return;
      }
      document
        .querySelector(".items-container")
        .appendChild(createProductCard(element));
      counter++;
    });
  });
}

function createProductCard(element) {
  var cardElement = document.createElement("div");
  cardElement.classList.add("card");

  var h1Element = document.createElement("h1");
  h1Element.innerText = element.id;
  cardElement.appendChild(h1Element);

  var ulElement = document.createElement("ul");

  var liElement = document.createElement("li");
  liElement.innerText = element.name;
  ulElement.appendChild(liElement);

  liElement = document.createElement("li");
  liElement.innerText = element.unitPrice + "$";
  ulElement.appendChild(liElement);

  cardElement.appendChild(ulElement);
  return cardElement;
}
