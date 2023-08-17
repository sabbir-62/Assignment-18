const app = require('./app');
require("dotenv").config();
const port = process.env.port || 8000

app.listen(port, () => {
    console.log(`Server is running port on ${port}`  );
})