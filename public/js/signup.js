const signupForm = async (e) => {
    e.preventDefault();

    const first = document.querySelector('#first').value.trim();
    const last = document.querySelector('#last').value.trim();
    const email = document.querySelector('#email').value.trim();
    const number = document.querySelector('#number').value.trim();
    const address = document.querySelector('#addy').value.trim();
    const city = document.querySelector('#city').value.trim();
    const state = document.querySelector('#state').value.trim();
    const zip = document.querySelector('#zip').value.trim();
    const password = document.querySelector('#password').value.trim();
    const petName = document.querySelector('#petName').value.trim();
    const breed = document.querySelector('#breed').value.trim();
    const sex = "male";
    const spayed = true;
    const weight = document.querySelector('#weight').value.trim(); 
    const medication = true;


    // if (first && last && email && number && address && city && state && zip && password && petName && breed && weight) {
        const response = await fetch('/api/customer', {
            method: 'POST',
            body: JSON.stringify({
                first,
                last,
                email,
                number,
                address,
                city,
                state,
                zip,
                password,
                petName,
                breed,
                weight,
                sex,
                spayed,
                medication
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log(response (err));
            // document.location.replace('/user');
        } else {
            alert(response.statusText);
        }
    };
// };
document
  .querySelector('.signUp-form')
  .addEventListener('submit', signupForm);
