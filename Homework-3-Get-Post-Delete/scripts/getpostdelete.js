console.log("Script start runing");

var content = document.getElementById("content");

function addItem() {
  var name = document.getElementById("name").value;
  var unitPrice = document.getElementById("unitPrice").value;

  var newProduct = {
    name: name,
    unitPrice: unitPrice,
  };

  axios
    .post("https://northwind.vercel.app/api/products", newProduct)
    .then((res) => {
      console.log(res.data);
      alert("Item Add Successly!");
    });
}

function deleteItems() {
  var id = document.getElementById("deleteItemId").value;
  axios
    .delete("https://northwind.vercel.app/api/products/" + id)
    .then((res) => {
      alert("Items Deleted Succefully!");
    });
}

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

function showGet() {
  var innerText = `<div class="items-lister active">
  <div class="search-bar">
    <input
      type="text"
      name=""
      id="itemCount"
      placeholder="List Item Count"
    />
    <button onclick="displayList()">List Items</button>
  </div>
  <div class="items-container"></div>
</div>`;
  content.innerHTML = innerText;
}
function showDelete() {
  var innerText = `<div class="delete-item">
  <div class="search-bar">
    <input
      type="text"
      name=""
      id="deleteItemId"
      placeholder="Delete ID"
    />
    <button onclick="deleteItems()">Delete Item</button>
  </div>
</div>`;
  content.innerHTML = innerText;
}
function showPost() {
  var innerText = `<div class="card">
  <div>
    <label for="">Name</label>
    <input type="text" name="" id="name" />
  </div>

  <div>
    <label for="">Unit Price</label>
    <input type="text" name="" id="unitPrice" />
  </div>
  <div>
    <button onclick="addItem()">Add</button>
  </div>
</div>`;
  content.innerHTML = innerText;
}
