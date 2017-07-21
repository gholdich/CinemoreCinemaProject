
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/local');

var filmSchema = mongoose.Schema({
	
		"filmId": Number,
		"title": String,
		"genres": Array,
		"poster": String,
		"carouselPoster": String,
		"shortDes": String,
		"director": String,
		"releaseDate": String,
		"director": String,
		"cast": String,
		"videoId": String
	
	});
var timeSchema=mongoose.Schema({
	"monday": String,
	"tuesday": String,
	"wednesday": String,
	"thursday": String,
	"friday": String,
	"saturday": String,
	"sunday":String
});
var showingsSchema= mongoose.Schema({
	"showingId": Number,
	"screenId": Number,
	"filmId": Number,
	"date": String,
	"time": String
});	
var cinemaSchema = mongoose.Schema({
		
		"cinemaId": Number,
		"location": String,
		"openingTimes":[timeSchema],
		"showings":[showingsSchema],
		"about": String
	  
});



var Film = mongoose.model('Film', filmSchema);
var Cinema = mongoose.model('Cinema', cinemaSchema);

const films =[
	  {
		"filmId": 1,
		"title": "Spider-Man: Homecoming",
		"genres": ["Action", "Adventure", "Sci-Fi"],
		"poster": "spiderman.jpg",
		"carouselPoster":"Spider-Man-Homecoming.jpg",
		"shortDes": "Peter Parker juggles the highs and lows of adolescence with his newfound powers, and learns life is tough when you're a teenage superhero with the weight of the world on your shoulders.",
		"description": "Peter Parker juggles the highs and lows of adolescence with his newfound powers, and learns life is tough when you're a teenage superhero with the weight of the world on your shoulders. After his first brush of danger doing battle alongside Iron Man, Peter Parker returns home to Aunt May, where his normal life presents a very different set of problems. School is a drag, money is tight and he is forbidden to use his superpowers to win the heart of the cute girl he can't stop staring at. But, Peter doesn't have too much time to ponder the trappings of adolescence. As he dons his spandex costume and transforms into his alter-ego of Spider-Man, he finds himself in demand in the crime-riddled city he calls home. When a new threat lands in NYC in the shape of a winged antagonist named Vulture, Peter must set aside his own personal angst and fight for the lives of those he loves, while keeping his new identify a secret. Spider-Man: Homecoming marks a welcome return to one of Marvels best-loved superheroes. Starring Tom Holland (Avengers: Infinity War) as the mighty webslinger, aka Peter Parker, the movie also features Robert Downey Jr. (Captain America: Civil War) as Iron Man, who acts as mentor to the fledgling hero. The strong support continues with Michael Keaton (Birdman) as Vulture, and Marisa Tomei (The Big Short) as Aunt May. Immerse yourself in the on-screen action and book Spider-Man: Homecoming in eye-popping 3D, IMAX or IMAX 3D at selected QA Cinemas!",
		"releaseDate": "7th Jul 2017",
		"director": "Jon Watts",
		"cast": "Robert Downey Jr., Marisa Tomei, Tom Holland",
		"videoId": "https://www.youtube.com/embed/U0D3AOldjMU"
	  },
	  {
		"filmId": 2,
		"title": "War For The Planet Of The Apes",
		"genres": ["Action", "Adventure", "Drama", "Sci-Fi", "Thriller"],
		"poster": "WarForThePlanetOfTheApes.jpg",
		"carouselPoster":"War-For-The-Planet-Of-The-Apes.png",
		"shortDes": "It's man versus ape in the final bloodbath that will determine the fate of the entire world.",
		"description": "It's man versus ape in the final bloodbath that will determine the fate of the entire world. There's two choices: cooperate or destroy. And it's clear which decision has been made. This time, it's war. The humans believe there is no place for the apes within modern society – their way of life is primitive and different, and they can't be trusted to integrate peacefully. So, they only have one aim: exterminate them. The apes, led by Caesar (Andy Serkis), are forced into a bitter bloodbath, virtually helpless against the advanced weaponry that the humans possess. Caesar watches as his friends and family are slaughtered, and a new resolve takes over. Somewhere deep within him, the animal is awoken. A fresh hatred grips Caesar and he sets out to destroy the man (Woody Harrelson) who has led the war which will destroy his species. During his quest, Caesar wrestles to stop the rage he feels from taking over his own glimmer of humanity, as he risks truly becoming the monster that the humans see him as. When man and ape finally face each other, the future of both species hangs in the balance. Matt Reeves (Cloverfield) directs the third instalment of the franchise, set in a sci-fi universe that has gripped audiences since the first film was released in 1968. The modern adaptation features the incredible Andy Serkis, who played Gollum in the Lord of the Rings franchise, alongside Woody Harrelson (The Hunger Games franchise) as the cold-blooded colonel. Immerse yourself in the on-screen action when you book tickets for War For The Planet Of The Apes in superb 3D at Vue Cinemas! ",
		"releaseDate": "11th Jul 2017",
		"director": "Matt Reeves",
		"cast": "Woody Harrelson, Judy Greer, Andy Serkis",
		"videoId": "https://www.youtube.com/embed/Y23E0OgEHuY"
	  },
	  {
		"filmId": 3,
		"title": "Wonder Woman",
		"genres": ["Action", "Adventure", "Fantasy", "Sci-Fi", "War"],
		"poster": "wonderwoman.jpg",
		"carouselPoster":"wonderwoman.jpg",
		"shortDes": "Raised on a sheltered island paradise, when an American pilot crashes on their shores and tells of a massive conflict raging in the outside world, Diana leaves her home, convinced she can stop the threat.",
		"description": "Raised on a sheltered island paradise, when an American pilot crashes on their shores and tells of a massive conflict raging in the outside world, Diana leaves her home, convinced she can stop the threat. Before she was Wonder Woman, she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, when an American pilot crashes on their shores and tells of a massive conflict raging in the outside world, Diana leaves her home, convinced she can stop the threat. Fighting alongside man in a war to end all wars, Diana will discover her full powers...and her true destiny. Step right into the world of Wonder Woman and catch the hotly-anticipated movie in 3D, IMAX or IMAX 3D at selected Vue Cinemas! ",
		"releaseDate": "2nd Jun 2017",
		"director": "Patty Jenkins",
		"cast": "Gal Gadot",
		"videoId": "https://www.youtube.com/embed/qeZ8X5FKl78"
	  },
	  {
		"filmId": 4,
		"title": "The Wave",
		"genres": ["True-Story", "Drama", "German-Cinema", "Thriller"],
		"poster": "thewave.jpg",
		"carouselPoster":"",
		"shortDes": "A high school teacher's experiment to demonstrate to his students what life is like under a dictatorship spins horribly out of control when he forms a social unit with a life of its own.",
		"description": "High school teacher, Rainer Wegner, may be popular with the students, but he's also unorthodox. He's forced to teach autocracy for the school's project week. He's less than enthusiastic at first, but the response of the students is surprising to say the least. He forces the students to become more invested in the prospect of self rule, and soon the class project has its own power and eerily starts to resemble Germany's past. Can Wegner and his class realize what's happening before the horrors start repeating themselves?",
		"releaseDate": "19th Sep 2008",
		"director": "Dennis Gansel",
		"cast": "Frederick Lau, Max Riemelt, Jennifer Ulrich",
		"videoId": "https://www.youtube.com/embed/4FYDF8wGn5E"
	  },
	  {
		"filmId": 5,
		"title": "Finding Nemo",
		"genres": ["Animation","Childrens","Comedy"],
		"poster": "nemo.jpg",
		"carouselPoster":"",
		"shortDes": "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
		"description": "A clown fish named Marlin lives in the Great Barrier Reef loses his son, Nemo. After he ventures into the open sea, despite his father's constant warnings about many of the ocean's dangers. Nemo is abducted by a boat and netted up and sent to a dentist's office in Sydney. So, while Marlin ventures off to try to retrieve Nemo, Marlin meets a fish named Dory, a blue tang suffering from short-term memory loss. The companions travel a great distance, encountering various dangerous sea creatures such as sharks, anglerfish and jellyfish, in order to rescue Nemo from the dentist's office, which is situated by Sydney Harbor. While the two are doing this, Nemo and the other sea animals in the dentist's fish tank plot a way to return to Sydney Harbor to live their lives free again.",
		"releaseDate": "10 Oct 2003",
		"director": "Andrew Stanton",
		"cast": "Albert Brooks, Ellen DeGeneres, Alexander Gould",
		"videoId": "https://www.youtube.com/embed/2zLkasScy7A"
	  },
	  {
		"filmId": 6,
		"title": "Gladiator",
		"genres": ["Action","Adventure","Drama"],
		"poster": "gladiator.jpg",
		"carouselPoster":"",
		"shortDes": "When a Roman general is betrayed and his family murdered by an emperor's corrupt son, he comes to Rome as a gladiator to seek revenge.",
		"description": "Maximus is a powerful Roman general, loved by the people and the aging Emperor, Marcus Aurelius. Before his death, the Emperor chooses Maximus to be his heir over his own son, Commodus, and a power struggle leaves Maximus and his family condemned to death. The powerful general is unable to save his family, and his loss of will allows him to get captured and put into the Gladiator games until he dies. The only desire that fuels him now is the chance to rise to the top so that he will be able to look into the eyes of the man who will feel his revenge.",
		"releaseDate": "12 May 2000",
		"director": "Ridley Scott",
		"cast": "Russell Crowe, Joaquin Phoenix, Connie Nielsen",
		"videoId": "https://www.youtube.com/embed/Q-b7B8tOAQU"
	  },
	  {
		"filmId": 7,
		"title": "The Silence of the Lambs",
		"genres": ["Crime", "Drama", "Thriller"],
		"poster": "silence.jpg",
		"carouselPoster":"",
		"shortDes": "A young F.B.I. cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.",
		"description": "Young FBI agent Clarice Starling is assigned to help find a missing woman to save her from a psychopathic serial killer who skins his victims. Clarice attempts to gain a better insight into the twisted mind of the killer by talking to another psychopath: Hannibal Lecter, who used to be a respected psychiatrist. FBI agent Jack Crawford believes that Lecter, who is also a very powerful and clever mind manipulator, has the answers to their questions and can help locate the killer. However, Clarice must first gain Lecter's confidence before the inmate will give away any information.",
		"releaseDate": "31 May 1991",
		"director": "Jonathan Demme",
		"cast": "Jodie Foster, Anthony Hopkins, Lawrence A. Bonney",
		"videoId": "https://www.youtube.com/embed/W6Mm8Sbe__o"
	  },
	  {
		"filmId": 8,
		"title": "Master and Commander",
		"genres": ["Action","Adventure","Drama"],
		"poster": "master.jpg",
		"carouselPoster":"",
		"shortDes": "During the Napoleonic Wars, a brash British captain pushes his ship and crew to their limits in pursuit of a formidable French war vessel around South America.",
		"description": "The year is 1805. Europe has fallen to Napoleon, and only the Royal Navy stands in his way to total victory. Off the cost of South America, a new conflict is brewing. Captain Jack \"Lucky Jack\" Aubrey of the Man-of-War HMS Surprise is under orders to sink or capture the French privateer Acheron, which has been deployed to the region. After seven weeks of uneventful sailing, the Acheron strikes first, all but crippling the Surprise in an engagement in which Aubrey realizes his enemy's ship is nautically superior to his own. Along with his close friend and confidant Stephan Maturin who also happens to be the ship's surgeon, Aubrey is now faced with the choice of retreating to England and admitting defeat or remaining at the Acheron's mercy. Aubrey must now do the impossible if he is to survive, repair his ship, catch up to his enemy and defeat the Acheron--somehow.",
		"releaseDate": "28 Nov 2003",
		"director": "Peter Weir",
		"cast": "Russell Crowe, Paul Bettany, Billy Boyd",
		"videoId": "https://www.youtube.com/embed/5kLoPYkYs9I"
	  },
	  {
		"filmId": 9,
		"title": "The Princess Bride",
		"genres": ["Adventure","Family","Fantasy"],
		"poster": "princessbride.jpg",
		"carouselPoster":"",
		"shortDes": "While home sick in bed, a young boy's grandfather reads him a story called The Princess Bride.",
		"description": "A kindly grandfather sits down with his ill grandson and reads him a story. The story is one that has been passed down from father to son for generations. As the grandfather reads the story, the action comes alive. The story is a classic tale of love and adventure as the beautiful Buttercup, engaged to the odious Prince Humperdinck, is kidnapped and held against her will in order to start a war, It is up to Westley (her childhood beau, now returned as the Dread Pirate Roberts) to save her. On the way he meets a thief and his hired helpers, an accomplished swordsman and a huge, super strong giant, both of whom become Westley's companions in his quest.",
		"releaseDate": "9 Oct 1987",
		"director": "Rob Reiner",
		"cast": "Cary Elwes, Mandy Patinkin, Robin Wright",
		"videoId": "https://www.youtube.com/embed/O3CIXEAjcc8"
	  },
	  {
		"filmId": 10,
		"title": "The Devil's Advocate",
		"genres": ["drama","Mystery", "Thriller"],
		"poster": "devilsAdvocate.jpg",
		"carouselPoster":"",
		"shortDes": "An exceptionally adept Florida lawyer is offered a job to work in New York City for a high-end law firm with a high-end boss - the biggest opportunity of his career to date.",
		"description": "Kevin Lomax, a ruthless young Florida attorney that never lost a case, is recruited by the most powerful law firm in the world. In spite of his mother's disagreement, which compares New York City to Babylon, he accepts the offer and the money that comes along. But soon, his wife starts feeling homesick as she witnesses devilish apparitions. However, Kevin is sinking in his new cases and pays less and less attention to his wife. His boss and mentor, John Milton, seems to always know how to overcome every problem and that just freaks Kevin right off.",
		"releaseDate": "16 Jan 1998",
		"director": "Taylor Hackford",
		"cast": "Keanu Reeves, Al Pacino, Charlize Theron",
		"videoId": "https://www.youtube.com/embed/O3CIXEAjcc8"
	  }
	];
const cinemas=[ {
		"cinemaId": 1,
		"location": "Manchester",
		"openingTimes":{
					"monday": "09:00 - 23:00",
					"tuesday": "09:00 - 23:00",
					"wednesday": "09:00 - 23:00",
					"thursday": "09:00 - 01:00",
					"friday": "09:00 - 23:00",
					"saturday": "09:00 - 01:00",
					"sunday": "11:00 - 23:00"
		},
		"showings":[
				{
					"showingId": 1,
					"screenId": "",
					"filmId": 1,
					"date": "",
					"time": "10:00"
				},
				{
					"showingId": 2,
					"screenId": "",
					"filmId": 2,
					"date": "",
					"time": "11:00"
				},
				{
					"showingId": 3,
					"screenId": "",
					"filmId": 1,
					"date": "",
					"time": "12:00"
				},
				{
					"showingId": 4,
					"screenId": "",
					"filmId": 2,
					"date": "",
					"time": "13:00"
				}
				
		],
		"about": "Opened in April 2017, QA Cinemas Manchester is flagship venue of the chain."
	  },
	  {
		"cinemaId": 2,
		"location": "London",
		"openingTimes":{
					"monday": "10:00 - 23:00",
					"tuesday": "09:00 - 23:00",
					"wednesday": "09:00 - 23:00",
					"thursday": "09:00 - 23:00",
					"friday": "09:00 - 01:00",
					"saturday": "09:00 - 01:00",
					"sunday": "11:00 - 22:00"
				},
		"showings":[
				{
					"showingId": 1,
					"screenId": "",
					"filmId": 2,
					"date": "",
					"time": "10:01"
				},
				{
					"showingId": 2,
					"screenId": "",
					"filmId": 3,
					"date": "",
					"time": "11:01"
				},
				{
					"showingId": 3,
					"screenId": "",
					"filmId": 2,
					"date": "",
					"time": "12:01"
				},
				{
					"showingId": 4,
					"screenId": "",
					"filmId": 3,
					"date": "",
					"time": "13:01"
				}
				
				
		],
		"about": "The largest QA Cinema. This venue boasts 10 screens, inluding 3 iMax theatres."
	  },
	  {
		"cinemaId": 3,
		"location": "Glasgow",
		"openingTimes":{
					"monday": "10:00 - 23:00",
					"tuesday": "09:00 - 23:00",
					"wednesday": "09:00 - 23:00",
					"thursday": "09:00 - 23:00",
					"friday": "09:00 - 01:00",
					"saturday": "09:00 - 01:00",
					"sunday": "11:00 - 22:00"
				},
		"showings":[
				{
					"showingId": 1,
					"screenId": "",
					"filmId": 4,
					"date": "",
					"time": "10:02"
				},
				{
					"showingId": 2,
					"screenId": "",
					"filmId": 5,
					"date": "",
					"time": "11:02"
				},
				{
					"showingId": 3,
					"screenId": "",
					"filmId": 1,
					"date": "",
					"time": "12:02"
				},
				{
					"showingId": 4,
					"screenId": "",
					"filmId": 4,
					"date": "",
					"time": "13:02"
				}
				
				
			],
			"about": "Situated in a chamring converted factory, QA Cinemas Glasgow food outlets offer a host of traditional Scottish delicacies as well as the timesless cinema classics."
	  },
	  {
		"cinemaId": 4,
		"location": "Nottingham",
		"openingTimes":{
					"monday": "10:00 - 23:00",
					"tuesday": "09:00 - 23:00",
					"wednesday": "09:00 - 23:00",
					"thursday": "09:00 - 23:00",
					"friday": "09:00 - 01:00",
					"saturday": "09:00 - 01:00",
					"sunday": "11:00 - 22:00"
				},
		"showings":[
				{
					"showingId": 1,
					"screenId": "",
					"filmId": 1,
					"date": "",
					"time": "10:02"
				},
				{
					"showingId": 2,
					"screenId": "",
					"filmId": 3,
					"date": "",
					"time": "11:02"
				},
				{
					"showingId": 3,
					"screenId": "",
					"filmId": 7,
					"date": "",
					"time": "12:02"
				},
				{
					"showingId": 4,
					"screenId": "",
					"filmId": 8,
					"date": "",
					"time": "13:02"
				}
				
				
			],
			"about": "The latest addition to the QA Cinemas inventory, Nottingham features state of the art interiours and facilities and screens with all new extra-comfort seats as standard. Visit QA Cinemas Nottingham for the ultimate, indulgent cinema experience."
	  },
	  {
		"cinemaId": 5,
		"location": "Bristol",
		"openingTimes":{
					"monday": "10:00 - 23:00",
					"tuesday": "09:00 - 23:00",
					"wednesday": "09:00 - 23:00",
					"thursday": "09:00 - 23:00",
					"friday": "09:00 - 01:00",
					"saturday": "09:00 - 01:00",
					"sunday": "11:00 - 22:00"
				},
		"showings":[
				{
					"showingId": 1,
					"screenId": "",
					"filmId": 5,
					"date": "",
					"time": "10:02"
				},
				{
					"showingId": 2,
					"screenId": "",
					"filmId": 5,
					"date": "",
					"time": "11:02"
				},
				{
					"showingId": 3,
					"screenId": "",
					"filmId": 8,
					"date": "",
					"time": "12:02"
				},
				{
					"showingId": 4,
					"screenId": "",
					"filmId": 9,
					"date": "",
					"time": "13:02"
				},
				{
					"showingId": 5,
					"screenId": "",
					"filmId": 7,
					"date": "",
					"time": "13:02"
				},
				{
					"showingId": 6,
					"screenId": "",
					"filmId": 10,
					"date": "",
					"time": "13:02"
				}
				
				
			],
			"about": "Located amongst the campus of Bristol University, this branch of QA Cinemas couldn't be more perfectly situated for students. With that in mind, Bristol offers an array of student deals and events. All are welcome at QA Cinemas Bristol. Why not enjoy a delicious a la cart menu at our very own italian restaurant, Roma-QA"
	  },
	  {
		"cinemaId": 6,
		"location": "Southampton",
		"openingTimes":{
					"monday": "10:00 - 23:00",
					"tuesday": "09:00 - 23:00",
					"wednesday": "09:00 - 23:00",
					"thursday": "09:00 - 23:00",
					"friday": "09:00 - 01:00",
					"saturday": "09:00 - 01:00",
					"sunday": "11:00 - 22:00"
				},
		"showings":[
				{
					"showingId": 1,
					"screenId": "",
					"filmId": 10,
					"date": "",
					"time": "10:02"
				},
				{
					"showingId": 2,
					"screenId": "",
					"filmId": 6,
					"date": "",
					"time": "11:02"
				},
				{
					"showingId": 3,
					"screenId": "",
					"filmId": 2,
					"date": "",
					"time": "12:02"
				},
				{
					"showingId": 4,
					"screenId": "",
					"filmId": 7,
					"date": "",
					"time": "13:02"
				}	
			],
			"about": "QA Cinemas Southampton will take you back to the golden eara of cinema. Located in the recently aquired and newly refurbished cinema (formerly Hollywood Cinemas), this branch keeps all the classic and timeless character while also showcasing the latest in odern refinement."
	  }];



films.map(data => {
	const film = new Film(data);
	
	film.save();
});
cinemas.map(data =>{
	const cinema= new Cinema(data);
	
	cinema.save();
});
