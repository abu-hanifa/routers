const express = require("express");

const app = express()
const port = 6000
app.use(require("./messages.route"));

app.listen(port, () => {
    console.log(`the end http://localhost:${port}`);
})