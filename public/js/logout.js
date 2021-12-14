
const logoutBtn= document.getElementById('logout')
const logoutFunc= async () =>{
    const logoutUser= await fetch('/api/customer/logout', {
        method: "POST",
        headers:{'Content-Type': 'application/json'},
    });
    if (logoutUser.ok) {
        document.location.replace('/');
        console.log('logout successful')
      } else {
        alert(response.statusText);
      }
    };
    
logoutBtn.addEventListener('click', logoutFunc)
