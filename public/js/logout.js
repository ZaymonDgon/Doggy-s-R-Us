const session = require("express-session")

const logoutBtn= document.getElementById('logout')
const logoutFunc= async () =>{
    const logoutUser= await session.destroy()
}