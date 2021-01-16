module.exports = {
  apps: [
    {
      name: "HACKATHON_CCR_API",
      script: "build/infra/server.js",
      instances: 1,
      watch: true,
    },
  ],
};
