const express = require("express");
const fs = require("fs");
const MongoClient= require('mongodb');
const app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/local');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var contactFormSchema = mongoose.Schema({
	
			"honorific": String,
			"firstName": String,
			"surname": String,
			"dob": String,
			"email": String,
			"contactReason": String,
			"message": String
});

var ContactForm = mongoose.model('ContactForm', contactFormSchema);

var commentsArray=[];
var cinemaArray=[];
var filmArray=[];
var contactformArray=[];

MongoClient.connect('mongodb://localhost/local', function(err, db) {
	
	const cinemas = db.collection('cinemas').find({}).toArray(function(err,docs){
		cinemaArray = docs;
	});
	const films = db.collection('films').find({}).toArray(function(err,docs){
		//console.log('Result of find:',docs);
		filmArray = docs;
	});
});


app.set("port", process.env.PORT || 8081);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/contactform", (req,res) => {
	
	MongoClient.connect('mongodb://localhost/local', function(err, db) {
		const contactform = db.collection('contactforms').find({}).toArray(function(err,docs){
			console.log('Result of find:',docs);
			contactformArray = docs;
		})
	})
   
	 const r = (() => {
	  return contactformArray;
  })();
  
  if (typeof r !== 'undefined') {
    res.json(r);
  } else {
    res.json([]);
  }

});
 app.post("/api/contactform", (req,res) =>{
	console.log('you\'ve received a post request');
	console.log('honorific:'+ req.body.firstName);
	const contactform = new ContactForm({
			
			"honorific": req.body.honorific,
			"firstName": req.body.firstName,
			"surname": req.body.surname,
			"dob": req.body.dob,
			"email": req.body.email,
			"contactReason": req.body.contactReason,
			"message": req.body.message
	});
	contactform.save();
	
});

app.get("/api/films", (req, res) => {
  const param = req.query.q;

  if (!param) {
    res.json({
      error: "Missing required parameter `q`"
    });
    return;
  }
  
  const r = ((param) => {
	  return filmArray.filter(film => film.title.toLowerCase().includes(param));
  })(param);
  
  
  if (typeof r !== 'undefined') {
    res.json(r);
  } else {
    res.json([]);
  }
});

app.get("/api/cinemas", (req, res) => {
  
  if (typeof cinemaArray !== 'undefined') {
    res.json(cinemaArray);
  } else {
    res.json([]);
  }
});

app.get("/api/showings", (req, res) => {
  
  const r = (() => {
	  return filmArray;
  })();
  
  if (typeof r !== 'undefined') {
    res.json(r);
  } else {
    res.json([]);
  }

});

app.get("/api/locations", (req, res) => {
  
  const r = (() => {
	  return cinemaArray.map(cinema => {
		return { 'id': cinema.cinemaId, 'name': cinema.location };
	});
  })();
  
  if (typeof r !== 'undefined') {
    res.json(r);
  } else {
    res.json([]);
  }

});

app.get("/api/showtimes", (req, res) => {
  const param = req.query.q;

  if (!param) {
    res.json({
      error: "Missing required parameter `q`"
    });
    return;
  }
  
  const r = ((param) => {
	  return cinemaArray.filter(cinema => cinema.cinemaId == param).map(cinema => cinema.showings)[0];
  })(param);
  
  
  if (typeof r !== 'undefined') {
    res.json(r);
  } else {
    res.json([]);
  }
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});
