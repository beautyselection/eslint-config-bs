# fe-lint

뷰티셀렉션 FE에서 사용하는 eslint는 [airbnb 컨벤션](https://github.com/airbnb/javascript)을 기반으로 하고 있습니다.

언제든 더 좋은 linting 방법이 있다면 Test Case와 함께 PR 바랍니다 😉

## Todo

- [x] airbnb 컨벤션 기반의 linting
- [ ] Husky를 통한 git commit전 lint test 

## Install

lint를 적용하고자 하는 프로젝트에 npm 혹은 yarn을 이용해 패키지를 추가합니다.

```
$ npm install --save-dev git+https://github.com/beautyselection/eslint-config-bs.git
$ yarn add -D git+https://github.com/beautyselection/eslint-config-bs.git
```

이 후에 프로젝트의 `package.json` 파일에 `scripts`를 추가합니다.

```
{
  "scripts": {
    // ...
    "lint": "node_modules/.bin/eslint",
    // ...
  }
}
```

프로젝트에 `.eslintrc.js` 파일을 생성하고 `eslint-config-bs`를 extends 하고 필요에 따라 `settings` 값을 추가합니다.

```
module.exports = {
  extends: ["bs"],
  settings: {
    react: {
      version: "detect",
    },
  },
};
```

## How to use?

프로젝트 내의 모든 파일에 대한 lint 검사를 하기 위해서는 `.`를 사용합니다.

```
$ npm run lint .
$ yarn lint .
```

만약 일부 파일이나 디렉토리만 검사를 희망하는 경우 폴더의 경로 혹은 파일의 경로를 입력합니다.

```
$ npm run lint {path|file}
$ yarn lint {path|file}

// examples
$ yarn lint src/components
$ yarn lint src/components/atoms/Input.tsx
```
