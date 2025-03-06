# @ant-design/v5-patch-for-react-19

React Trigger Component

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]
[![build status][github-actions-image]][github-actions-url]
[![Test coverage][codecov-image]][codecov-url]
[![bundle size][bundlephobia-image]][bundlephobia-url]
[![dumi][dumi-image]][dumi-url]

[npm-image]: http://img.shields.io/npm/v/@ant-design/v5-patch-for-react-19.svg?style=flat-square
[npm-url]: http://npmjs.org/package/@ant-design/v5-patch-for-react-19
[github-actions-image]: https://github.com/ant-design/v5-patch-for-react-19/workflows/CI/badge.svg
[github-actions-url]: https://github.com/ant-design/v5-patch-for-react-19/actions
[circleci-image]: https://img.shields.io/circleci/ant-design/v5-patch-for-react-19/master?style=flat-square
[circleci-url]: https://circleci.com/gh/ant-design/v5-patch-for-react-19
[codecov-image]: https://img.shields.io/codecov/c/github/ant-design/v5-patch-for-react-19/master.svg?style=flat-square
[codecov-url]: https://app.codecov.io/gh/ant-design/v5-patch-for-react-19
[david-url]: https://david-dm.org/ant-design/v5-patch-for-react-19
[david-image]: https://david-dm.org/ant-design/v5-patch-for-react-19/status.svg?style=flat-square
[david-dev-url]: https://david-dm.org/ant-design/v5-patch-for-react-19?type=dev
[david-dev-image]: https://david-dm.org/ant-design/v5-patch-for-react-19/dev-status.svg?style=flat-square
[download-image]: https://img.shields.io/npm/dm/@ant-design/v5-patch-for-react-19.svg?style=flat-square
[download-url]: https://npmjs.org/package/@ant-design/v5-patch-for-react-19
[bundlephobia-url]: https://bundlephobia.com/result?p=@ant-design/v5-patch-for-react-19
[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/@ant-design/v5-patch-for-react-19
[dumi-image]: https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square
[dumi-url]: https://github.com/umijs/dumi

## Install

[![@ant-design/v5-patch-for-react-19](https://nodei.co/npm/@ant-design/v5-patch-for-react-19.png)](https://npmjs.org/package/@ant-design/v5-patch-for-react-19)

## Usage

Import directly and will auto fill the patch on React 19:

```js
import '@ant-design/v5-patch-for-react-19';
```

For next layout.tsx
```js
import Fix from '@ant-design/v5-patch-for-react-19'
export default function(props:propsWithChildren){
    return <AntdRegistry>
        <Fix />
        {children}
    </AntdRegistry>
}
```
## Compatibility

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11, Edge                                                                                                                                                                                                     | last 2 versions                                                                                                                                                                                                  | last 2 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                                      |

## Example

http://localhost:8000/

online example: http://ant-design.github.io/v5-patch-for-react-19/

## Development

```
npm install
npm start
```

## Test Case

```
npm test
```

## Coverage

```
npm run coverage
```

open coverage/ dir

## License

Released under the MIT license.
