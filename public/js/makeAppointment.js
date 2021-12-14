//This file needs to handle the process of making an appointment with the company. if else loop to get through hardcoded data plus value capture from time and date.
// const weekday = ["Monday", "Tuesday", "Wednesday","Thursday", "Friday"]

// const timeslotsIndex = 


console.log("HJELLO")
const appointmentSubmit = document.getElementById('appointmentSubmit');

const makeAppointmentFormHandler = async (event) => {
    event.preventDefault();
    const appData = {
        time: 13,
        customer_id: 2,
        company_id : 1
}
    try {
        console.log("HJELLO", event)
        // var checkedCbs = document.querySelectorAll('.priceCheckOut input[type="checkbox"]:checked');
        // const smallDog = document.getElementById('smallDog').value.trim()
        // const mediumDog = document.getElementById('mediumDog').value.trim()
        // const bigDog = document.getElementById('bigDog').value.trim()
        const priceCheckOut = document.querySelectorAll('[name="priceCheckOut"]:checked')
        
        console.log("sidd", priceCheckOut)
        const packageCheckOut = document.querySelectorAll('[name="packageCheckOut"]:checked')
        var time = 1;
        console.log(priceCheckOut, packageCheckOut, time)
        
        
        // const time = document.getElementById("time")
    
        // if (priceCheckOut && packageCheckOut && time) {
            // Send a POST request to the API endpoint
           
            const response = await fetch('/api/bookings/makeAppointment', {
                method: 'POST',
                // body: JSON.stringify({ priceCheckOut, packageCheckOut, time }),
                body: JSON.stringify(appData),
                headers: { 'Content-Type': 'application/json' },
            });
            console.log(appData)
        
        
            if (response.ok) {
                window.location.href = '/thanks';
                alert('Failed to create project');
            }
    
           
        // }
        


       
    //         console.log("hahha")
    //     await fetch("/api/bookings/makeAppointment", {
          
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify( priceCheckOut),
    //   })
    //         .then((response) => response.json())
            
    //     .then((data) => {
    //       console.log("Success:", data);
    //     //   window.location.href = '/';
    //     document.location.replace('/');
    //     }).catch((error) => {
    //     console.log(error);
    //   });

      
            
    //   res.status(200).json(err)
    
      

    } catch (e) {
        console.log("This is a promise catcher")
        console.log(e)

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

}}

appointmentSubmit.addEventListener('click',makeAppointmentFormHandler )
