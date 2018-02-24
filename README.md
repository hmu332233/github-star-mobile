## github star 모바일 검색용 페이지 

- 웨일브라우저의 사이드바에 넣어서 쓸 github star 페이지
- react + redux 연습용

### 개발환경
- 본 프로젝트는 [velopert/react-webpack2-skeleton](https://github.com/velopert/react-webpack2-skeleton)의 hmr branch 시작으로 만들어졌습니다.
- 다음과 같이 devServer가 수정되었습니다.
```js
devServer: {
    contentBase: paths.context,
    host: '0.0.0.0',
    port: 3000,
    hot: true,
    inline: false,
    disableHostCheck: true
},
```

### 추가 설치
- reactstrap
```bash
$ npm install bootstrap@4.0.0-beta.2 --save
$ npm install --save reactstrap@next
```
참고 - [reactstrap](https://reactstrap.github.io/)
- redux
```bash
$ npm install --save redux react-redux
$ npm install --save redux-thunk
```

### 커멘드
- 개발서버 실행
```bash
$ cd dev
$ npm start
```
- 빌드
```bash
$ cd dev
$ npm run build
```

### 배포
- 아래의 명령어로 dev의 결과물을 빌드하고 github에서 사용가능하도록 밖으로 꺼낸다.
```bash
$ ./build.sh
```