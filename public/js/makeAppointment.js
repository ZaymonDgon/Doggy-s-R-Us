//This file needs to handle the process of making an appointment with the company. if else loop to get through hardcoded data plus value capture from time and date.
// const weekday = ["Monday", "Tuesday", "Wednesday","Thursday", "Friday"]
// const timeslotsIndex = 

const makeAppointmentFormHandler = async (event) => {
    event.preventDefault();
    // var checkedCbs = document.querySelectorAll('.priceCheckOut input[type="checkbox"]:checked');
    const smallDog = document.getElementById('smallDog').value.trim()
    const mediumDog = document.getElementById('mediumDog').value.trim()
    const bigDog = document.getElementById('bigDog').value.trim()
    const appointmentSubmit = document.getElementById('appointmentSubmit');
    const time = document.getElementById("time")

    if (smallDog && time ) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/appointment/makeAppointment', {
            method: 'POST',
            body: JSON.stringify({ smallDog, time }),
            headers: { 'Content-Type': 'application/json' },
        });
    }
    if (mediumDog ) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/appointment/makeAppointment', {
            method: 'POST',
            body: JSON.stringify({ mediumDog, time }),
            headers: { 'Content-Type': 'application/json' },
        });
    }
    if (bigDog ) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/appointment/makeAppointment', {
            method: 'POST',
            body: JSON.stringify({ bigDog, time }),
            headers: { 'Content-Type': 'application/json' },
        });
    }
     
}

loginBtn.addEventListener('click',makeAppointmentFormHandler )
