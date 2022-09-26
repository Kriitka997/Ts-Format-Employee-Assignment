import app from './config/express';
import env from './config/env';
import consoleMessage from './config/server-message';

app.listen(env.PORT, () => {
    console.log(consoleMessage.server);
})