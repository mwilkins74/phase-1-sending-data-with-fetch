function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: 'James',
            email: 'jamesperters@timetoemail.com'
        })
      })  
    .then(function(response) {
        response.json()
    })
    .then(function(object) {
        document.body.innerHTML = object('id')
    })
    .catch(function(error) {
        document.body.innerHTML = error.message 
    })
}