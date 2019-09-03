# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.5] - 2019-09-03

### Fixed

- Wrap `trackPageView` in a timeout (min. delay for React Helmet's `requestAnimationFrame`) to ensure in-pixel metadata is sent along with the proper URL
