const app = require('./app');

app.listen(process.env.port, () => {
    console.log("Server is running port on  8000");
})