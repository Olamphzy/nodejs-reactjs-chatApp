const express = require("express");  //runs HTTP server
const cors = require("cors");  //to call this server from any other origin
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));


// create a post endpoint for authenticate
app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    // Get or create user on Chat Engine!
    try {
      const r = await axios.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name: username },
        { headers: { "Private-Key": "451c79af-2e0f-4a1c-ab92-1373d66ee1de" } }
      );
      return res.status(r.status).json(r.data);
    } catch (e) {
      return res.status(e.response.status).json(e.response.data);
    }
  });

// 451c79af-2e0f-4a1c-ab92-1373d66ee1de
//That is fake password. To add real authentication code to our node server, we need to giver users access to chat api and backend functionality
//we do that using chat engine.io {Chat engine.io provides full stack chat tools which makes adding chat into node and react apps very easy} 
// create chat engine projects and store our users in  this projects. All users in chat engine project can chat with one another through their apis and platform
app.listen(3001);  //we run the app on port 3001