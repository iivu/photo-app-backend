import { app } from './app';
import { APP_PORT } from './app/app.config';
import { connection } from './app/database/mysql';

app.listen(APP_PORT, () => console.log('App listen on http://localhost:3000 🚀'));

connection.connect((err) => {
  if (err) {
    console.log(`Connect to database failed: ${err}.`);
    return;
  }
  console.log('Connect to database successed!');
});
