---
thumbnail: './images/good-position-script-tag/thumb.webp'
title: 'script 태그는 어느 곳에 위치하는 것이 좋을까?'
description: 'script 태그를 두기 좋은 위치와 async와 defer 속성을 소개합니다.'
tags: ['웹', 'async', 'defer']
date: 2021-10-02
---

# 자바스크립트를 불러오는 방법

HTML 문서를 작성하면서 자바스크립트 파일을 포함시켜야 할 때, 가장 기본적인 방법으로 `head` 안에 `script` 태그를 넣는 방법이 있습니다. 대충 아래와 같은 코드가 나오겠지요?

```html
<!doctype html>
<html lang="ko">
  <head>
    <title>Document</title>
    <script src="main.js"></script>
  </head>
  <body></body>
</html>
```

위 코드에 의해 우리는 HTML 문서에서 자바스크립트 코드를 불러와 사용할 수 있습니다. 하지만 이 코드에는 약간의 문제가 있는데, 이를 이해하기 위해서는 HTML 문서가 파싱(Parsing)되는 과정을 알아야 합니다. HTML 문서는 위에서부터 아래로 파싱이 진행되며, 중간에 `script` 태그를 만나면 파싱을 잠시 중단하고 스크립트를 먼저 불러오게 됩니다. 그리고 이 과정이 끝나면, 다시 HTML 파싱을 재개하는 식으로 동작합니다.

동작 과정을 그림으로 보면 다음과 같습니다.

![](./images/good-position-script-tag/1.webp)

언뜻 보기에는 큰 문제가 없어 보이지만, 다음과 같은 단점이 있습니다.

- 자바스크립트의 용량이 커지면, 사용자가 웹페이지를 보기까지의 시간(TTV)이 오래 걸린다.

> 그렇기 때문에 `script` 태그는 몇 가지의 다른 방법들로 사용하게 됩니다.

## body 최하단에 작성하기

```html
<!doctype html>
<html lang="ko">
  <head>
    <title>Document</title>
  </head>
  <body>
    <script src="main.js"></script>
  </body>
</html>
```

이렇게 `body` 태그 맨 밑에 `script` 태그를 작성하게 되면, 다음과 같이 동작합니다.

![](./images/good-position-script-tag/2.webp)

이 방법은 웹페이지를 전부 불러온 이후, 스크립트를 가져오기 때문에 사용자가 웹페이지를 보기까지 지연되는 시간이 없습니다. 하지만 자바스크립트를 마지막에 불러오기 때문에, 그 전에 웹페이지의 동적인 요소들이 올바르게 동작하지 않을 수 있습니다.

## async 속성 사용하기

```html
<!doctype html>
<html lang="ko">
  <head>
    <title>Document</title>
    <script async src="main.js"></script>
  </head>
  <body></body>
</html>
```

이 방법은 `script` 태그 안에 `async` 속성을 적어줌으로써, HTML 파싱 과정과 문서 내의 모든 자바스크립트 Fetching 과정이 비동기로 진행될 수 있게 합니다. 그리고 Fetching이 완료된 스크립트가 있으면, 그때서야 HTML 파싱을 잠시 중단하고 Fetching이 완료된 순서대로 Execution을 진행합니다.

![](./images/good-position-script-tag/3.webp)

확실히 HTML 문서 파싱과 Fetching이 병렬로 진행되기 때문에, 속도가 빨라져 단점이 해결된 것처럼 보일 수 있습니다. 하지만 `async`는 Fetching이 완료된 순서대로 스크립트를 실행하기 때문에 스크립트간에 의존성 문제가 발생할 수 있습니다.

예를 들어 A와 B라는 스크립트가 있는데, B는 A안에 있는 코드를 참조하고 있습니다. 그렇다면 이 두 파일을 HTML 문서에 불러오려 한다면, 반드시 A가 먼저 불러와져야 합니다. 하지만 `async`는 순서를 보장하지 않는 특성 때문에, B가 먼저 실행되어 올바르게 동작하지 못 할 수 있습니다.

## defer 속성 사용하기

```html
<!doctype html>
<html lang="ko">
  <head>
    <title>Document</title>
    <script defer src="main.js"></script>
  </head>
  <body></body>
</html>
```

`defer`는 `async`와 사용 방법이 동일하지만, 동작 방식에 약간의 차이가 있습니다.

`defer`는 `async`처럼 Fetching과 파싱이 병렬로 진행됩니다. 하지만 스크립트를 실행하는 시점이 다른데, `defer`는 불러온 스크립트를 HTML 문서가 완전히 파싱된 이후 실행합니다. 그리고 불러오는 스크립트의 순서까지 보장해 줍니다. 그렇기 때문에 `async` 보다는 `defer`를 사용하는 것이 좋습니다.

# 결론 🎉

![](./images/good-position-script-tag/thumb.webp)

<center>defer가 좋다..! 😆</center>
