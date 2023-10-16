console.log("Script Running");

customerID();

function customerID() {
  var customerIDUL = document.getElementById("customerId");
  fetch("https://northwind.vercel.app/api/suppliers")
    .then((res) => res.json())
    .then((data) => {
      var usaCounter = 0;
      data.forEach((element) => {
        //Display CustomerID
        let liElement = document.createElement("li");
        liElement.innerText = element.companyName;
        customerIDUL.appendChild(liElement);
        //Usa Counter
        if (element.address.country === "Japan") usaCounter++;
      });
      document.getElementById("usaCounter").innerText += " " + usaCounter;
      return data;
    })
    .then((data) => {
      console.log("Start With M");
      data.forEach((element) => {
        if (element.companyName.charAt(0) == "M") {
          console.log(element.companyName);
        }
      });
      return data;
    });
}
