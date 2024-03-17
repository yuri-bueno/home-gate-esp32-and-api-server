const app = require("express")();
const appWs = require("express-ws")(app);

app.ws("/", (ws) => {
  ws.on("message", (msg) => {
    console.log("Received: ", msg);
    ws.send(msg);
  });
});

app.listen(81, () => console.log("Server has been started"));
