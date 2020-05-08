/**
 * SSR = Gatsby Server-side Rendering
 */
import React from "react";

import { getOptions } from "./utils";

exports.onRenderBody = function handleRenderBody(
  { setPostBodyComponents },
  pluginOptions
) {
  const options = getOptions(pluginOptions);
  if (options.isEnabled) {
    const { apikey, parselyCDN } = options;

    // pixelHost needs double-quotes because of how it'll be embedded.
    const pixelHost = options.pixelHost ? `"${options.pixelHost}"` : null;

    return setPostBodyComponents([
      <script
        key="gatsby-plugin-parsely-analytics"
        id="parsely-cfg"
        async
        defer
        src={`//${parselyCDN}/keys/${apikey}/p.js`}
      />,
      <script
        key="gatsby-plugin-parsely-analytics-onload"
        dangerouslySetInnerHTML={{
          __html: `
          if (typeof window !== "undefined" && window) {
            window.PARSELY = window.PARSELY || {
              pageviewQueue: [],
              autotrack: false,
              pixelhost: ${pixelHost},
              onload: function() {
                for (var i = 0; i < window.PARSELY.pageviewQueue.length; i++) {
                  PARSELY.beacon.trackPageView(window.PARSELY.pageviewQueue[i]);
                }
              },
            };
          }`
        }}
      />
    ]);
  }

  return null; // NODE_ENV != production
};
