const signup = document.getElementById("signupform");

signup.addEventListener("submit", function (eveent) {
  eveent.preventDefault();

  // Get form values
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var street = document.getElementById("street").value;
  var locality = document.getElementById("locality").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var pincode = document.getElementById("pincode").value;

  var formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    address: address,
    street: street,
    locality: locality,
    city: city,
    state: state,
    pincode: pincode,
  };
  console.log(formData);

  console.log("submit form");
});
