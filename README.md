# gatsby-plugin-parsely

Easily add [https://www.parse.ly/](Parse.ly Analytics) to your [Gatsby](https://www.gatsbyjs.org/) site.

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
      apikey: YOUR_PARSELY_APIKEY,
      enableInDevelopment: false // send page views when NODE_ENV !== prod
    }
  }
];
```
