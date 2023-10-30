const config = {
  serviceName: {
    doc: "Microservice Name",
    format: "*",
    default: null,
    env: "SERVICE_NAME",
    sensitive: false,
  },
  httpPort: {
    doc: "The rest port to bind",
    format: "port",
    default: 30007,
    env: "HTTP_PORT",
    sensitive: false,
  },
  bodyLimit: {
    doc: "The port to bind",
    format: "*",
    default: "20mb",
    env: "BODY_LIMIT",
    sensitive: false,
  },
  apiVersion: {
    doc: "The API version",
    format: "*",
    default: "v1",
    env: "API_VERSION",
    sensitive: false,
  },
  env: {
    doc: "The application environment",
    format: ["production", "development", "staging"],
    default: "development",
    env: "NODE_ENV",
    sensitive: false,
  },
};

exports.app = config;
