import Application from "../src/app/Application";
import container from "../src/container";

async function init() {
  const app = new Application(container.cradle);
  await app.start();
  const server = app.restServer.express;
  return server;
}

process.nextTick(async () => {
  if (process.env.NODE_ENV !== "development") await init();
  run();
});