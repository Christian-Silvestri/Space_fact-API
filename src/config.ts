const missingSetting = "Warning: No value set for environment variable";

const config = {
  "PORT": process.env.PORT || missingSetting,
};

export default config;