// implement your API here
const express = require("express");
const db = require("./data/db.js");
const server = express();
server.use(express.json());
server.listen(4000, () => console.log("API running on port 4000"));

//==========================================================Get Test
server.get("/", (req, res) => {
  res.send("server running");
});

//==========================================================Post Requests
server.post("/api/users", (req, res) => {
  const user = req.body;
  db.insert(user)
    .then(user => {
      if (user.name && user.body) {
        res.status(201).json({ users });
      } else {
        res
          .status(400)
          .json({
            success: true,
            errorMessage: "Please provide name and bio for the user."
          });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({
          success: false,
          error: "There was an error while saving the user to the database"
        });
    });
});

//==========================================================Get Requests
server.get("/api/users", (req, res) => {
  db.find()
    .then(users => {
      res.status(201).json({users});
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The user information could not be retrieved." });
    });
});

//----------------------------------------------------------
server.get("/api/users/:id", (req, res) => {
  const id = req.params.id;
  db.findById(id)
    .then(user => {
      if (user) {
        res.status(201).json({user});
      } else {
        res
          .status(404)
          .json({ message: "The user with the specified ID does not exist." });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The user information could not be retrieved." });
    });
});

//==========================================================Delete Requests
server.delete("/api/users/:id", (req, res) => {
  const id = req.params.id;

  db.remove(id)
    .then(user => {
      if (user) {
        res.status(201).json({user});
      } else {
        res
          .status(404)
          .json({ message: "The user with the specified ID does not exist." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "The user could not be removed" });
    });
});

//==========================================================Put Requests
server.put("/api/users/:id", (req, res) => {
  const id = req.params.id;
  const userInfo = req.body;
  db.update(id, userInfo)
    .then((id, userInfo) => {
      if (!id) {
        res
          .status(404)
          .json({ message: "The user with the specified ID does not exist." });
      } else if (!userInfo.name || !userInfo.bio) {
        res
          .status(400)
          .json({ errorMessage: "Please provide name and bio for the user." });
      } else {
        res.status(201).json({userInfo});
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "The user information could not be modified." });
    });
});
