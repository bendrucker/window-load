# window-load [![Build Status](https://travis-ci.org/bendrucker/window-load.svg?branch=master)](https://travis-ci.org/bendrucker/window-load)

> Call a callback on window load


## Install

```
$ npm install --save window-load
```


## Usage

```js
var onLoad = require('window-load')

onLoad(function () {
  //=> window is loaded  
})
```

## API

#### `onLoad(callback)` -> `undefined`

##### callback

*Required*  
Type: `function`

A callback to call on window load. If window load has already occurred, the callback will be called on the next tick.


## License

MIT © [Ben Drucker](http://bendrucker.me)
