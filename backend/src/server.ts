import app from './app';
import database from './database';

database.sync(); //{force: true}); // drop e recria
console.log("Database running at 3006");

app.listen(3000);
console.log('Server running at 3000');