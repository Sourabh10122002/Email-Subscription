const scriptURL = 'https://script.google.com/macros/s/AKfycbxPKPH4amRxsWzWm8irb6jR0VXZ5WsnVFkGRoWWY5QwoFf02hOFV6AVGAMHV8FGUaGfUg/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank You for Subscribing!"
            setTimeout(() => {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message));
})