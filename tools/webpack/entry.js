import { inDevelopment, showErrorOverlay } from "../../envs";

//= =============================================================================//
// ENTRY SETUP FOR WEBPACK DEVELOPMENT & PRODUCTION                               /
//= =============================================================================//

export default () => {
  // Development
  const entry = [
    `webpack-hot-middleware/client?reload=true&overlay=${showErrorOverlay}`,
    "./src/client.js"
  ];

  // Prodcution
  if (!inDevelopment) entry.shift();

  return entry;
};
