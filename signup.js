// const signup = document.getElementById("signupform");

document
  .getElementById("signupform")
  .addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form values
    var form = document.getElementById("signupform");

    var form = document.getElementById("signupform");
    var formData = {};

    for (var i = 0; i < form.elements.length; i++) {
      var element = form.elements[i];
      if (element.type !== "button") {
        formData[element.name] = element.value;
      }
    }
    event.target.reset();
    console.log(formData);
  });
