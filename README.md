# fe-lint

뷰티셀렉션 FE에서 사용하는 eslint는 [airbnb 컨벤션](https://github.com/airbnb/javascript)을 기반으로 하고 있습니다.

언제든 더 좋은 linting 방법이 있다면 Test Case와 함께 PR 바랍니다 😉

## Todo

- [x] airbnb 컨벤션 기반의 linting
- [x] Husky를 통한 git commit전 lint test 

## Install

lint를 적용하고자 하는 프로젝트에 npm 혹은 yarn을 이용해 패키지를 추가합니다.

```
$ npm install --save-dev git+https://github.com/beautyselection/eslint-config-bs.git eslint prettier husky lint-staged
$ yarn add -D git+https://github.com/beautyselection/eslint-config-bs.git eslint prettier husky lint-staged
```

이 후에 프로젝트의 `package.json` 파일에 `scripts`를 추가합니다.

```
{
  "scripts": {
    // ...
    "lint": "./node_modules/.bin/eslint",
    "prettier": "./node_modules/.bin/prettier",
    "prepare": "./node_modules/.bin/husky install",
    // ...
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": [
      "yarn lint --fix",
      "yarn prettier --write"
    ]
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

<img width="250" alt="image" src="https://user-images.githubusercontent.com/38205068/164403733-820ccb47-216b-4572-82a0-4483a81d1494.png">

위 사진과 같이 `.husky` 디렉토리가 생성되지 않은 프로젝트의 경우 최초 한번에 한배 아래 명령들을 실행합니다.

아래 명령어를 통해 husky를 install 합니다.

```
yarn prepare
```

`.husky` 폴더가 생성되었다면 아래 명령어를 통해 `pre-commit` git hook을 생성합니다.

```
./node_modules/.bin/husky add .husky/pre-commit ''
```

이 후 아래 내용으로 `.husky/pre-commit` 파일의 내용을 대체합니다.


```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "[husky] Running pre-commit hook"
yarn lint-staged
echo "[husky] Finish pre-commit hook"
```

## How to use?

프로젝트 내의 모든 파일에 대한 lint 검사를 하기 위해서는 `lint .` 명령어를 사용합니다.

```
$ npm run lint .
$ yarn lint .
```

만약 일부 파일이나 디렉토리만 검사를 희망하는 경우 폴더의 경로 혹은 파일의 경로를 입력합니다.

```
$ npm run lint {path|file}
$ yarn lint {path|file}

// examples
$ yarn lint ./src/components
$ yarn lint ./src/components/atoms/Input.tsx
```

lint 검사와 함께 오류를 해결하기 위해서는 `--fix` 옵션을 사용합니다.

```
$ npm run lint . --fix
$ yarn lint . --fix
```

또한 Git commit 시에 lint 검사 상에 오류가 있다면 아래 화면과 함께 commit 되지 않습니다.

<img width="720" alt="image" src="https://user-images.githubusercontent.com/38205068/164404861-b0c0b22b-c38b-486f-b8d8-ff5d051f1e60.png">

## Reference Document
* https://tech.kakao.com/2019/12/05/make-better-use-of-eslint/
* https://typicode.github.io/husky/
* https://github.com/okonet/lint-staged
* https://kir93.tistory.com/entry/husky-lint-staged%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%98%EC%97%AC-git-hook%EA%B1%B8%EA%B8%B0
