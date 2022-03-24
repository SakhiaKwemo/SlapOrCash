const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

const answer = [];

app.use(cors());
app.use(express.json());

const db = mysql.createConnection ({
    host: "us-cdbr-east-04.cleardb.com",
    user: "b8a87416e71132",  
    password: "39f4a642", 
    database: "heroku_dae24e7c3d6b223"
});

//mysql://bbb706357a1af9:88eee656@us-cdbr-east-04.cleardb.com/heroku_f193e2a84b6c8af?reconnect=true
//mysql://b8a87416e71132:39f4a642@us-cdbr-east-04.cleardb.com/heroku_dae24e7c3d6b223?reconnect=true

app.post("/create", (req, res) => {
    const roomkey = req.body.roomkey;

    db.query("INSERT INTO roomkeytable (roomkey, vote1, vote2, ready, winner) VALUES (?, 0, 0, 0, null)", 
    [roomkey], 
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Values inserted");
        }
    })
}); 

app.post("/voteHeart", (req, res) => {
    const room = req.body.room;
    db.query("UPDATE roomkeytable SET vote1 = 'heart' WHERE (roomkey = ?)", 
    [room], 
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Values inserted");
        }
    })
}); 

app.post("/voteSC", (req, res) => {
    const room = req.body.room;
    db.query("UPDATE roomkeytable SET vote1 = 'slap' WHERE (roomkey = ?)", 
    [room], 
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Values inserted");
        }
    })
}); 

app.post("/voteSlap", (req, res) => {
    const room = req.body.room;
    db.query("UPDATE roomkeytable SET vote1 = 'slap' WHERE (roomkey = ?)", 
    [room], 
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Values inserted");
        }
    })
}); 

app.post("/voteCash", (req, res) => {
    const room = req.body.room;
    db.query("UPDATE roomkeytable SET vote1 = 'cash' WHERE (roomkey = ?)", 
    [room], 
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Values inserted");
        }
    })
}); 

app.post("/voteCount", (req, res) => {
    const votes = req.body.votes;
    db.query("UPDATE roomkeytable SET vote2 = '?' WHERE (roomkey IS NOT NULL)", 
    [votes], 
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Values inserted");
        }
    })
}); 

app.post("/voteInitialCount", (req, res) => {
    db.query("UPDATE roomkeytable SET vote2 = '0' WHERE (roomkey IS NOT NULL)",  
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Values inserted");
        }
    })
}); 

app.post("/empty", (req, res) => {
    db.query("DELETE FROM roomkeytable",  
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Values inserted");
        }
    })
}); 

app.post("/Ready0", (req, res) => {
    db.query("UPDATE roomkeytable SET ready = '0' WHERE (roomkey IS NOT NULL)", 
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Values inserted");
        }
    })
}); 

app.post("/Ready1", (req, res) => {
    db.query("UPDATE roomkeytable SET ready = '1' WHERE (roomkey IS NOT NULL)", 
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Values inserted");
        }
    })
}); 

app.post("/Ready2", (req, res) => {
    db.query("UPDATE roomkeytable SET ready = '2' WHERE (roomkey IS NOT NULL)", 
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Values inserted");
        }
    })
}); 

app.post("/Ready3", (req, res) => {
    db.query("UPDATE roomkeytable SET ready = '3' WHERE (roomkey IS NOT NULL)", 
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Values inserted");
        }
    })
}); 

app.post("/Ready4", (req, res) => {
    db.query("UPDATE roomkeytable SET ready = '4' WHERE (roomkey IS NOT NULL)", 
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Values inserted");
        }
    })
});

app.post("/Ready5", (req, res) => {
    db.query("UPDATE roomkeytable SET ready = '5' WHERE (roomkey IS NOT NULL)", 
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Values inserted");
        }
    })
});

app.post("/Ready0", (req, res) => {
    db.query("UPDATE roomkeytable SET ready = '0' WHERE (roomkey IS NOT NULL)", 
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Values inserted");
        }
    })
});

app.post("/winner", (req, res) => {
    const winner = req.body.winner;
    db.query("UPDATE roomkeytable SET winner = (?) WHERE (roomkey IS NOT NULL)", 
    [winner], 
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Values inserted");
        }
    })
}); 

app.get("/get", (req, res) => {
    db.query("SELECT * FROM roomkeytable", (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
}) 

app.get("/getVoteCount", (req, res) => {
    db.query("SELECT vote2 FROM roomkeytable", (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
}) 

app.get("/getVote1", (req, res) => {
    db.query("SELECT vote1 FROM roomkeytable", (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
}) 

app.get("/getMyVote1", (req, res) => {
    const room = req.body.room;
    db.query("SELECT vote1 FROM roomkeytable WHERE (roomkey = ?) ", 
    [room], 
    (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
}) 

app.get("/Ready", (req, res) => {
    db.query("SELECT ready FROM roomkeytable", 
    (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
}) 

app.get("/winner", (req, res) => {
    db.query("SELECT winner FROM roomkeytable", (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
}) 

app.get("/getSongs", (req, res) => {
    db.query("SELECT * FROM songs", (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
}) 

app.listen(3001, () => {
    console.log("hi")
});  