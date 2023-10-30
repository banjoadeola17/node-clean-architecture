class Application {
  constructor({ restServer, database, logger, config }) {
    this.restServer = restServer;
    this.database = database;
    this.logger = logger;
    this.config = config;
  }

  async start() {
    if (this.database) {
      await this.database.connect();
    }

    await this.restServer.start();
  }
}

export default Application;
