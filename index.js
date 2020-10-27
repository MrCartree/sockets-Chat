var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
var PORT = process.env.PORT || 3000;


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/games", function(req, res) {
    res.sendFile(__dirname + "/game.html")
});

io.on("connection", function(socket) {
    console.log("Conected");

    socket.on("chat message", function(msg) {
        console.log("user message", msg)
        io.emit("chat message", msg);
    });
});

http.listen(PORT, function() {
    console.log("Listening on *:" + PORT);
});