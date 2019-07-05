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
  if (options.parselyTrackPageViewExists) {
    window.PARSELY.beacon.trackPageView(params);
  } else {
    window.PARSELY.pageviewQueue.push(params);
  }
};
