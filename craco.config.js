// import {
//   when,
//   whenDev,
//   whenProd,
//   whenTest,
//   ESLINT_MODES,
//   POSTCSS_MODES,
// } from "@craco/craco";

const {
  when,
  whenDev,
  whenProd,
  whenTest,
  ESLINT_MODES,
  POSTCSS_MODES,
} = require("@craco/craco");

module.exports = {
  module: {
    rules: [
      {
        test: /.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
};
