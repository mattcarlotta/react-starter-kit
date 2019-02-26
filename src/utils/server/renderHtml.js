/* eslint-disable lodash/prefer-lodash-method */
import serialize from "serialize-javascript";
import { minify } from "html-minifier";
import { inDevelopment } from "../../../envs";

//= =============================================================================//
// SERVER-SIDE FUNCTION TO CREATE CLIENT-SIDE HTML                                /
//= =============================================================================//

/**
 * Factory function to create client-side DOM.
 * @function renderHtml
 * @param {object} head - supporting head tags.
 * @param {object} assets - supporting styles and scripts tags.
 * @param {object} htmlContent - JSX to be rendered inside of root.
 * @param {object} initialState - initial React state for client.
 * @param {object} initialProps - initial Redux props for client.
 * @returns {html}
 */
export default (head, assets, htmlContent, initialState, initialProps) => {
  const styles = assets.filter(file => file.endsWith(".css"));
  const scripts = assets.filter(file => file.endsWith(".js"));

  const html = `
    <!doctype html>
    <html ${head.htmlAttributes.toString()}>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!--[if IE]>
          <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
        <![endif]-->

        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

        ${head.title.toString()}
        ${head.base.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}

        <!-- Insert bundled styles into <link> tag -->
        ${styles
          .map(
            file =>
              `<link href="${file}" media="screen, projection" rel="stylesheet" type="text/css">`
          )
          .join("\n")}
      </head>
      <body>
        <!-- Insert the router, which passed from server-side -->
        <div id="root">${htmlContent}</div>

        <!-- Store the initial state into window -->
        <script>
          // Use serialize-javascript for mitigating XSS attacks. See the following security issues:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__INITIAL_STATE__=${serialize(initialState)};
          window.__INITIAL_PROPS__=${serialize(initialProps)};
        </script>

        <!-- Insert bundled scripts into <script> tag -->
        ${scripts.map(file => `<script src="${file}"></script>`).join("\n")}

        ${head.script.toString()}
      </body>
    </html>
  `;

  // html-minifier configuration, refer to "https://github.com/kangax/html-minifier" for more configuration
  const minifyConfig = {
    collapseWhitespace: true,
    removeComments: true,
    trimCustomFragments: true,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: true
  };

  // Minify html in production
  return inDevelopment ? html : minify(html, minifyConfig);
};
