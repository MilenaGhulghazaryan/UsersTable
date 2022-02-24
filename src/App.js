import express from "express";

const app = express();

let users = {};

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




//CREATE
app.post("/users", (req, res) => {
    const id = `user_${Date.now()}_${Math.random()}`;
    const newUser = {
        id,
        ...req.body
    };

    users[id] = newUser;
    res.send(newUser);
});


app.listen(3002);