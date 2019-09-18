const DEFAULT_OPTIONS = {
  apikey: null,
  enableInDevelopment: false,
  parselyCDN: "cdn.parsely.com",
  pixelHost: null
};

export function getOptions(pluginOptions) {
  const options = { ...DEFAULT_OPTIONS, ...pluginOptions };
  return {
    ...options,
    isEnabled: isEnabled(options),
    parselyTrackPageViewExists: parselyTrackPageViewExists()
  };
}

export function absoluteUrlForLocation(location) {
  return [
    window.location.protocol,
    "//",
    window.location.host,
    location.pathname,
    location.search,
    location.hash,
  ].join("")
}

function parselyTrackPageViewExists() {
  return (
    typeof window !== "undefined" &&
    typeof window.PARSELY !== "undefined" &&
    typeof window.PARSELY.beacon !== "undefined" &&
    typeof window.PARSELY.beacon.trackPageView !== "undefined"
  );
}

function isEnabled(pluginOptions) {
  const shouldTrack =
    process.env.NODE_ENV === "production" || pluginOptions.enableInDevelopment;
  const hasValidApikey =
    typeof pluginOptions.apikey === "string" && pluginOptions.apikey.length > 0;
  return shouldTrack && hasValidApikey;
}
