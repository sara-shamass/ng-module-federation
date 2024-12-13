import { withModuleFederation } from '@nx/module-federation/angular';



export const moduleFederationConfig = require('./module-federation.config');

/**
 * DTS Plugin is disabled in Nx Workspaces as Nx already provides Typing support for Module Federation
 * The DTS Plugin can be enabled by setting dts: true
 * Learn more about the DTS Plugin here: https://module-federation.io/configure/dts.html
 */
export default withModuleFederation(moduleFederationConfig, { dts: false });
