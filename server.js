const express = require("express");
const fs = require("fs");


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
  
  const r = param => {
	  
  }


  if (typeof r !== 'undefined') {
    res.json(r);
  } else {
    res.json([]);
  }
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});
