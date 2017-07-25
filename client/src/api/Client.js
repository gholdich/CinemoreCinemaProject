//Connection to server
function search(query, cb) {
  return fetch(`/api/films?q=${query}`, {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function fetchShowTimes(query, cb) {
  return fetch(`/api/showtimes?q=${query}`, {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function fetchShowings(cb) {
  return fetch(`/api/showings`, {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function fetchLocations(cb) {
  return fetch(`/api/locations`, {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}
function fetchCinemas(cb) {
  return fetch(`/api/cinemas`, {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}
function addToContactForm(data){
	console.log(JSON.stringify(data));
	return fetch('/api/contactform',{
		method: 'POST',
		headers:{
			'Accept': "application/json",
			'Content-Type': 'application/json'
			},
		body: JSON.stringify({
			honorific: data.honorific,
			firstName: data.firstName,
			surname: data.surname,
			dob: data.dob,
			email: data.email,
			contactReason: data.contactReason,
			message: data.message
			
		}) 
		
	}).then( (res) => {
		console.log(res);
	});


}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error);
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const Client = { search, fetchShowings, fetchLocations, fetchShowTimes, fetchCinemas, addToContactForm };
export default Client;
