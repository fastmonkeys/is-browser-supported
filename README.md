# is-browser-supported [![Build Status](https://travis-ci.org/fastmonkeys/is-browser-supported.svg?branch=master)](https://travis-ci.org/fastmonkeys/is-browser-supported)

Check if user agent string matches with browser criterias like in [Autoprefixer](https://github.com/postcss/autoprefixer).

## Install

```
$ npm install --save is-browser-supported
```


## Usage

```js
const isBrowserSupported = require('is-browser-supported');

isBrowserSupported('Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)', 'last 1 version');
//=> false

isBrowserSupported('Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko', 'last 1 version');
//=> true
```


## API

### isBrowserSupported(userAgent, [selections])

#### userAgent

Type: `string`

A user agent string to be checked.

#### selections

Type: `string`<br>
Default: [same as Browserslist](https://github.com/ai/browserslist#queries)

Browser criteria to check the user agent string against, see [Browserslist's documentation](https://github.com/ai/browserslist#queries) for more details.


## License

MIT © [Fast Monkeys](http://www.fastmonkeys.com)
