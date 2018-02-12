## github star 모바일 검색용 페이지 

- 웨일브라우저의 사이드바에 넣어서 쓸 github star 페이지

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

