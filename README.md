# gatsby-plugin-parsely-analytics

Easily add [Parse.ly Analytics](https://www.parse.ly/) to your [Gatsby](https://www.gatsbyjs.org/) site.

## Installation

```
npm install --save gatsby-plugin-parsely-analytics
```

Or

```
yarn add gatsby-plugin-parsely-analytics
```

## Usage

In your `gatsby-config.js` file, modify the `plugins` array:

```javascript
plugins: [
  {
    resolve: `gatsby-plugin-parsely-analytics`,
    options: {
      apikey: YOUR_PARSELY_SITE_ID,
      enableInDevelopment: false // send page views when NODE_ENV !== prod
    }
  }
];
```
