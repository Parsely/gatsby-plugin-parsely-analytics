import React from "react";

import { getOptions, absoluteUrlForLocation } from "./utils";

exports.onRouteUpdate = function handleRouteUpdate(
  apiCallbackContext,
  pluginOptions
) {
  const { prevLocation, location } = apiCallbackContext;
  const options = getOptions(pluginOptions);
  if (!options.isEnabled) return;

  const params = {
    url: absoluteUrlForLocation(location),
    urlref: !!prevLocation ? absoluteUrlForLocation(prevLocation) : ""
  };

  // wrap in a timeout to give metadata extraction and react-helmet time to execute
  // adapted from gatsby-plugin-google-analytics
  // https://github.com/gatsbyjs/gatsby/blob/2753c4d75e909699348c4f871f0dbfaee7db37ab/packages/gatsby-plugin-google-analytics/src/gatsby-browser.js#L13
  const sendPageView = () => {
    if (options.parselyTrackPageViewExists) {
      window.PARSELY.beacon.trackPageView(params);
    } else {
      window.PARSELY.pageviewQueue.push(params);
    }
  };

  // Minimum delay for reactHelmet's requestAnimationFrame
  setTimeout(sendPageView, 32);

  return null;
};
