const express = require("express");
const fs = require("fs");
const getShowings = require('./db/showings');
const getCinemas = require('./db/cinemas');

const app = express();

app.set("port", process.env.PORT || 8081);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/films", (req, res) => {
  const param = req.query.q;

  if (!param) {
    res.json({
      error: "Missing required parameter `q`"
    });
    return;
  }
  
  const r = ((param) => {
	  return getShowings.showings.filter(film => film.title.toLowerCase().includes(param));
  })(param);
  
  
  if (typeof r !== 'undefined') {
    res.json(r);
  } else {
    res.json([]);
  }
});

app.get("/api/cinemas", (req, res) => {
  const param = req.query.q;

  if (!param) {
    res.json({
      error: "Missing required parameter `q`"
    });
    return;
  }
  
  const r = ((param) => {
	  return getCinemas.cinema.filter(cinema => cinema.title.toLowerCase().includes(param));
  })(param);
  
  
  if (typeof r !== 'undefined') {
    res.json(r);
  } else {
    res.json([]);
  }
});

app.get("/api/showings", (req, res) => {
  
  const r = (() => {
	  return getShowings.showings;
  })();
  
  
  if (typeof r !== 'undefined') {
    res.json(r);
  } else {
    res.json([]);
  }

});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});
