import { moduleFederationConfig } from "./webpack.config";

module.exports = {
  output: {
    uniqueName: 'cart',
    publicPath: 'auto',
  },
  plugins: [
    new ModuleFederationPlugin(moduleFederationConfig)
    ({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './Module': './src/app/app.module.ts',
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: true },
        '@angular/common': { singleton: true, strictVersion: true },
        '@angular/router': { singleton: true, strictVersion: true },
      },
    }),
  ],
};
