console.log("Script Running");

customerID();

function customerID() {
  var customerIDUL = document.getElementById("customerId");
  fetch("https://northwind.vercel.app/api/orders")
    .then((res) => res.json())
    .then((data) => {
      var usaCounter = 0;
      data.forEach((element) => {
        //Display CustomerID
        let liElement = document.createElement("li");
        liElement.innerText = element.customerId;
        customerIDUL.appendChild(liElement);
        //Usa Counter
        if (element.shipAddress.country === "USA") usaCounter++;
        //1996 order
        var orderYear = element.orderDate.slice(0, 4);
        if (orderYear == "1996")
          console.log(
            "Customer id: " + element.customerId + " Year: " + element.orderDate
          );
        //Delayed order
        requiredDate = new Date(element.requiredDate);
        shippedDate = new Date(element.shippedDate);
        if (requiredDate < shippedDate)
          console.log("Delayed Order Id: " + element.customerId);
      });
      document.getElementById("usaCounter").innerText += " " + usaCounter;
    });
}
