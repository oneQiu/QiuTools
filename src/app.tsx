import { runApp, IAppConfig } from 'ice';

const appConfig: IAppConfig = {
  app: {
    rootId: 'root',
  },
  router: {
    type: 'browser',
  },
};

runApp(appConfig);
