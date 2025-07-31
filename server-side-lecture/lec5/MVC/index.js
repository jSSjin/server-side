const express = require('express');
const app = express();
const PORT = 3000;
const prductRoutes = require('./routes/prductRoutes')

app.use(express.json());
app.use("/api/v1", prductRoutes)
// Start server

app.listen(PORT, () => {

          console.log(`🚀 Server is running at http://localhost:${PORT}`);

});