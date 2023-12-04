---
thumbnail: './images/kakao-emoticon-shop-thumb.webp'
title: '카카오 이모티콘샵 클론'
description: 'HTML, CSS, JS만 가지고 만들어 본 프론트엔드 첫 프로젝트!'
tags: ['프로그래머스', '알고리즘']
date: 2022-01-03
---

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbrrpqC%2FbtrvvDVQdUg%2FkjWVeA0FgavFXgYBMO3xF0%2Fimg.jpg)

> 프로젝트 사이트: https://n0hack.github.io/kakao-emoticon-shop
>
> 프로젝트 저장소: https://github.com/n0hack/kakao-emoticon-shop

# Project Overview

리그 오브 레전드 데이터 분석가로의 길을 멈추고, 다시 개발 분야로 돌아와 자신감과 흥미를 되찾기 위해 진행한 첫 프론트엔드 클론 프로젝트입니다. 개인적으로 카카오(Kakao)에서 운영 중인 웹 서비스들의 구성이 마음에 들어 그중 하나인 [카카오 이모티콘샵](https://e.kakao.com/)을 주제로 선택하게 되었고, 프론트엔드를 구성하는 기본 요소인 `HTML`, `CSS`, `JavaScript` 세 가지만을 사용해 진행했습니다.

> 콘텐츠 중심 서비스이기에, 배너 이미지가 자주 변경될 수 있어 작업물과 차이가 있을 수 있습니다.

## 작업 기간

### 2021.12.01 - 2021.12.31

프로젝트 초반부에 구조가 마음에 들지 않아 몇 번씩 갈아엎었습니다 😞

## 기술 스택

### Frontend

- HTML5
- CSS3
- JavaScript (ES6+)

## 주요 구현 사항

- 홈 배너 이미지에 Slick Slider 라이브러리 적용
- 무한 스크롤에 따른 컨텐츠 로드 (신규/인기 이모티콘)
- 드래그 스크롤 (터치 제스처를 통한 스크롤)

# 결과 화면

## 1. 홈

배너 이미지에 Slick Slider 라이브러리를 적용하여, 일정 시간마다 자동 전환되도록 했습니다.

![](https://blog.kakaocdn.net/dn/bnWFHW/btrpIxNGLFa/BjhHpERMGaYu4MqsDsakE0/img.gif)

## 2. 신규

IntersectionObserver API를 사용하여, 무한 스크롤에 따라 컨텐츠가 로드되도록 했습니다. 크롤링한 데이터가 없어, 다섯 줄 단위로 동일한 컨텐츠(이모티콘)를 반복했습니다.

![](https://blog.kakaocdn.net/dn/bBuWI6/btrpHFki77C/lWJxXxLOn5U1Jz1FN0sMi0/img.gif)

## 3. 인기

IntersectionObserver API를 사용하여, 무한 스크롤에 따라 컨텐츠가 로드되도록 했습니다. 크롤링한 데이터가 없어, 10개의 기본 이모티콘 이후로는 더미 데이터(Dummy Datas)를 출력했습니다.

![](https://blog.kakaocdn.net/dn/DeWe4/btrpGzd0x3k/7C4d30yhd7XSJk7jV59sK0/img.gif)

## 4. 스타일

![](https://blog.kakaocdn.net/dn/bvi3LY/btrpP3qzwEo/HYQSiCkzr3kPFPofppfFkK/img.gif)

## 5. 마이페이지

![](https://blog.kakaocdn.net/dn/FiRqW/btrpHGpYKKE/z40r445Z0WsRLHzJ1db5yK/img.gif)

## 6. 공지사항 & 자주묻는 질문

![](https://blog.kakaocdn.net/dn/dc6oHG/btrpz21pM0w/tsQsPZPEBpgH4mMkJCTpgk/img.gif)

## 7. 팝업 페이지

window.open 메소드를 이용해, 버튼을 눌러 팝업창을 열 수 있도록 구현했습니다.

![](https://blog.kakaocdn.net/dn/bJYL9w/btrpPEq2I2h/rtPb6xvrTkhMcLoQGzGljK/img.gif)

## 번외. 모바일 사이즈 (0-767px)

데스크톱에서 브라우저 크기를 작게 하고 이용 시, 모바일에서 터치로 스크롤하는 것과 같은 효과를 구현했습니다. 데스크톱에서는 터치 대신 마우스 클릭 이벤트가 발생하기 때문에, 터치와 마우스 클릭 이벤트 두 가지에 대해 모두 처리해야 합니다.

![](https://blog.kakaocdn.net/dn/R6QXB/btrpD1u2jX6/Kbb7QeIMWgdj3Ana5PKrm0/img.gif)

# Project Review

## 달성한 목표 & 잘한 점

### 스스로 찾아 보는 습관

개발할 때 가장 좋은 것은 내가 고민한 문제는 다른 개발자도 고민했던 문제이고, 그로 인해 대부분의 레퍼런스가 인터넷 안에 존재한다는 것입니다.  처음에는 공부했던 책에 없는 내용이라면 구현하지 못 할 거라는 두려움이 있었는데, 하나 둘 시간을 들여 찾아 보니 이 라이브러리는 어떻게 사용하는지, 그리고 이 문제는 어떻게 해결하는지와 같은 솔루션을 어렵지 않게 얻을 수 있었습니다.

이처럼 이번 프로젝트를 통해 궁금한 건 스스로 찾아 보면서 해결할 수 있는 능력을 기를 수 있게 되었는데, 이를 바탕으로 이후 프로젝트를 진행할 때는, 필요한 기술 문서를 참고해 보면서 진행할 생각입니다.

### 무한 스크롤 구현

무한 스크롤을 구현할 때는 IntersectionObserver API 이전에 window 객체에 scroll 이벤트를 등록하여 구현하는 방법이 있었습니다. 하지만 Web API 중 하나인 IntersectionObserver를 이용하면 비동기적으로 작업하기 때문에 성능에 있어 많은 이점을 가져올 수 있습니다. 프로젝트를 진행하면서 두 방법의 차이를 알게 되었고, 이제는 IntersectionObserver API를 완벽은 아니지만 적절하게 사용할 수 있습니다.

### 라이브러리 도움 없이 드래그 스크롤 직접 구현

드래그 스크롤(Drag Scroll)은 모바일에서의 터치 스크롤을 데스크톱 환경의 웹에서도 사용 가능하도록 한 기술입니다. 기본적으로 터치를 이용하여 스크롤 하는 느낌이기 때문에 터치 스크롤(Touch Scroll)이라 부르는 것이 맞는 것 같지만, 개인적으로는 드래그 스크롤이 부르기 편해 이대로 진행했습니다. 이 기능은 무조건 직접 구현해 보자라는 생각을 갖고 만들었고, 프로젝트 내에서 재사용이 정말 많이 되기 때문에 완성했을 때의 만족도가 매우 높습니다. 이후 다른 프로젝트에서도 사용할 가능성이 있어, 라이브러리로 만들어 배포해 볼 생각입니다.

SlickSlider는 이번에는 라이브러리를 사용했지만, 프로젝트와 별개로 구현해 볼 생각입니다 😆

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FQ813b%2FbtrpOykpl5O%2FbYH4Sc4JV9GrOxxCHNEhQK%2Fimg.png)

## 개선 사항 & 아쉬운 점

### BEM에 대한 이해 부족

BEM(Block Element Modifier) 방법론이 익숙하지 않은 상태에서, 처음하는 프로젝트의 규모가 크다보니 작명과 블록 단위로 나누는 부분에서 혼란스러운 점이 많았습니다. BEM이라는 것이 아예 모르고 진행했을 때와 비교해서는 큰 개선이 있었지만, 다음에는 상대적으로 작은 웹사이트라도 만들어 보면서 기본기를 탄탄하게 다져야 할 필요를 느꼈습니다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FxQcat%2FbtrpD1BPOkD%2F2mbNuy9KiiDoasp9O1pNgk%2Fimg.png)

### 프로젝트 구조의 아쉬움

최대한 예쁘고, 깔끔하게 정리해 봤지만 아무리 해도 만족되지 않았습니다. 개인마다, 팀마다 다른 거라 생각은 하지만, 다른 사이드 프로젝트도 해 보면서 좀 더 가다듬을 필요를 느꼈습니다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcgyveR%2FbtrpxxAEytX%2FVGfhHfobbhZwnOS4YMd1J1%2Fimg.png)

### 깔끔하지 않은 코드 (기능 구현에만 치중한 문제)

화면마다 대응되는 CSS/JavaScript 파일을 생성하니, 코드 중복이 많이 발생했습니다. 게다가 웹 브라우저는 파일들이 하나의 스코프로 합쳐지기 때문에 이름 충돌 문제도 있었습니다. 리팩토링을 통해 겹치는 부분을 최대한 제거했으나, 기능 구현에만 너무 치중했던 터라 나중가서 하려니 너무 막막했습니다. 그래서 여전히 아쉬운 부분이 많이 남습니다.

다음에는 리팩토링을 최대한 병행하면서 해 볼 생각이고, 스코프의 경우 mjs 확장자로 해결 할 수 있다 하나, 웹팩과 같은 번들러를 이용해 볼 생각입니다.

### 무한 스크롤 & 더미 데이터

무한 스크롤에 따라 컨텐츠를 로드하면서, 매번 새로운 이미지를 보여주고 싶었지만 별도의 데이터가 없어 그러지 못했습니다. 비슷한 프로젝트를 진행하게 되면, 그 때는 백엔드도 공부를 해서 크롤링한 데이터를 내려주는 식으로 처리해 볼 생각입니다.

## 프로젝트 후기

본 프로젝트는 원래 2주의 기간동안 진행하려던 프로젝트였습니다. 하지만 위의 프로젝트 기간 부분에서 짧게 언급했듯, 프로젝트 구조를 잡는 데에 너무 많은 시간을 허비했습니다. 조금이라도 만족스럽지 않으면 전부 삭제하고, 다시 만들고를 반복했죠 ㅠㅠ.. 그렇게 시간만 지나가니 이대로는 안 되겠다 싶어서 적당히 타협을 하게 되었고, 그 뒤로는 크게 막히는 부분 없이 착착 진행된 것 같아요. 그래도 시간을 날렸다는 생각은 들지 않고, 좋은 경험이 되었다는 생각이 듭니다. 물론 이후 프로젝트를 하면서 더 나은 구조를 잡을 수 있도록 계속 시도도 할 거구요. 화이팅!

# Skills Guide

### 드래그 스크롤

- [마우스로 터치 스크롤 구현하기](#)

### 무한 스크롤

- [Intersection Observer API로 무한 스크롤 구현하기](#)

> 프로젝트를 진행하며 구현했던 기능을 여러분께 공유합니다 ❤️
