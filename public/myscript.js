function getUserList() {
    var textArea = document.getElementById('mytextarea');
    var url = 'http://' + location.host + '/users';
    fetch(url)
    .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
        textArea.value = JSON.stringify(myJson);
      });
}

function insertUser() {    
    var textArea = document.getElementById('mytextarea');
    var firstName = document.getElementById('firstname');
    var lastName = document.getElementById('lastname');
    var eMail = document.getElementById('email');

    let user = {
        first_name: firstName.value,
	    last_name: lastName.value,
	    email: eMail.value     
    };

    var url = 'http://' + location.host + '/users';
    
    fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
    })
    .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
        textArea.value = JSON.stringify(myJson);
      });
}

function updateUser() {    
    var textArea = document.getElementById('mytextarea');
    var id = document.getElementById('ID');
    var firstName = document.getElementById('firstname');
    var lastName = document.getElementById('lastname');
    var eMail = document.getElementById('email');
    
    let user = {
        id: parseInt(id.value),
        first_name: firstName.value,
	    last_name: lastName.value,
	    email: eMail.value     
    };

    var url = 'http://' + location.host + '/users';
    
    fetch(url, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
    })
    .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
        textArea.value = JSON.stringify(myJson);
      });
}

function deleteUser() {    
    var textArea = document.getElementById('mytextarea');
    var id = document.getElementById('ID');    
    
    var url = 'http://' + location.host + '/users/' + id.value;
    
    fetch(url, {
    method: 'DELETE'
    })
    .then(function(response) {
        return response.text();
      })
      .then(function(myText) {
        console.log(myText);
        textArea.value = myText;
      });
}