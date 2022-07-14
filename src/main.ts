import { app } from './app';
import { APP_PORT } from './app/app.config';

const listenSuccessMessage = 'App listen on http://localhost:3000 🚀';

app.listen(APP_PORT, () => console.log(listenSuccessMessage));
