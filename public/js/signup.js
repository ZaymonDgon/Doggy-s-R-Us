
  //try this


  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const first_name = document.querySelector("#first").value.trim();
    const last_name = document.querySelector("#last").value.trim();
    const email = document.querySelector("#email").value.trim();
    const number = document.querySelector("#number").value.trim();
    const address = document.querySelector("#addy").value.trim();
    const city = document.querySelector("#city").value.trim();
    const state = document.querySelector("#state").value.trim();
    const zip = document.querySelector("#zip").value.trim();
    const password = document.querySelector("#password").value.trim();
    const petName = document.querySelector("#petName").value.trim();
    const breed = document.querySelector("#breed").value.trim();
    const sex = "male";
    const spayed = true;
    const weight = document.querySelector("#weight").value.trim();
    const medication = true;
     const customerdata = {
      email: email,
      first_name: first_name,
      password: password,
      last_name: last_name,
      number: number,
      address: address,
      city: city,
      state: state,
      zip: zip}

      const petData = {
      petName: petName,
      breed: breed,
      sex: sex,
      spayed: true,
      weight: weight,
      medication: true,
    }

    console.log(JSON.stringify(customerdata));
    console.log(customerdata);
    console.log(petData)
    try {
      fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerdata),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          window.location.href = `/customer`;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (err) {
      console.log(err);
    }
    
};

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  const customerlogin = {
    email : email,
    password : password
  }

  console.log(JSON.stringify(customerlogin));
  console.log(customerlogin);
  try {
    fetch("/api/customer/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerlogin),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // window.location.href = '/custommer';
        document.location.replace('/');
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    console.log(err);
  }
};


// //-----------documents under plz--------------------------
// document
//   .querySelector('.signUp-form')
//   .addEventListener('submit', signupFormHandler);
document
.querySelector('.login-form')
.addEventListener('submit',loginFormHandler )

