const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  const loginBtn = document.getElementById('loginBtn')
  const signupBtn = document.getElementById('signupBtn')
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/customer/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/customerDashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  loginBtn.addEventListener('click',loginFormHandler )
  signupBtn.addEventListener('click',() =>
  {window.location.href = "/signup"})
  