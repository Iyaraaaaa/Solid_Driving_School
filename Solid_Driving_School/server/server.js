const dotenv = require('dotenv');
const app = require('./src/app');
const connectToMongoDB = require('./src/config/db.config');
const createSuperUserAdmin = require('./src/config/superuser.config');



dotenv.config();

connectToMongoDB();
createSuperUserAdmin();


const PORT = process.env.PORT;

app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)});