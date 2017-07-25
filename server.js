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
var forumSchema= mongoose.Schema({
	
	"username": String,
	"question": String,
	"comments": Array
})

var ContactForm = mongoose.model('ContactForm', contactFormSchema);
var Forum = mongoose.model('Forum', forumSchema);

var commentsArray=[];
var cinemaArray=[];
var filmArray=[];
var contactformArray=[];
var forumArray=[];

MongoClient.connect('mongodb://localhost/local', function(err, db) {//connects server to mongo
	
	const cinemas = db.collection('cinemas').find({}).toArray(function(err,docs){//finds collection called cinemas
		cinemaArray = docs;//save cinema info from mongodb to array 
	});
	const films = db.collection('films').find({}).toArray(function(err,docs){
		//console.log('Result of find:',docs);
		filmArray = docs;
	});
	const forum = db.collection('forums');
});


app.set("port", process.env.PORT || 8081);//set the port of server at 8081(localhost:8081)

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.get('/api/forum', (req,res)=>{//gets mongodb information and sends it to the /api/forum/- this is created here
	MongoClient.connect('mongodb://localhost/local', function(err, db){
		const forum = db.collection('forums').find({}).toArray(function(err,docs){
			//console.log('Result of find:',docs);
			forumArray = docs;
		})
	});
	const r = (() => {
	  return forumArray;
  })();
  
  if (typeof r !== 'undefined') {
    res.json(r);
  } else {
    res.json([]);
  }
	
});
app.post('/api/forum', (req,res)=>{//.post adds information to the api, the method tells the api what you intend to do
	console.log('You\'ve received a request to add a post to the forum on the faq page');
	const forum = new Forum({
		'username': req.body.username,
		'question': req.body.question,
		'comments': req.body.comments
	});
	forum.save();
});
app.put('/api/forum', (req,res)=>{//.put edits elements of the api
	console.log('You\'ve received a put request');
	MongoClient.connect('mongodb://localhost/local', function(err, db){
		const forum = db.collection('forums').update({question: req.body.question},{$push:{comments: req.body.comment}})//this command finds the document with question : req.body.question(this is detailed in client)
																														//$push adds to the array of your choice
	});
	
}); 
app.get("/api/contactform", (req,res) => {
	
	MongoClient.connect('mongodb://localhost/local', function(err, db) {
		const contactform = db.collection('contactforms').find({}).toArray(function(err,docs){
			//console.log('Result of find:',docs);
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
