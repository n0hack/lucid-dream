---
thumbnail: './images/infinite-slide-like-slick/thumb.webp'
title: 'Slick 같은 무한 루프 슬라이드 만들기'
description: '흔히 볼 수 있는 슬라이드 UI를 가볍게 구현하는 방법을 소개합니다.'
tags: ['자바스크립트', 'Carousel', '캐러셀', '슬라이드']
date: 2022-01-09
---

# Carousel UI

캐러셀은 사전적으로 회전목마라는 뜻을 가지고 있으며, 웹에서는 슬라이드 형태로 순환하면서 사용자에게 콘텐츠를 보여주는 UI를 말합니다. 일전에 카카오 이모티콘샵 클론 프로젝트를 진행하면서 메인 배너에 슬라이드 라이브러리인 [Slick](https://kenwheeler.github.io/slick/)을 사용했었는데, 직접 구현해보면 어땠을까 하는 아쉬움이 계속 남았습니다. 그래서 이번 기회에 Slick 같은 느낌으로 무한 루프 슬라이드를 만들어 봤기에 소개해 볼까 합니다.

이번에 구현한 기능은 다음과 같습니다.

- n초 간격으로 슬라이드를 자동으로 넘긴다.
- 이전 또는 다음 버튼을 눌러 슬라이드를 앞뒤로 넘긴다.
- 페이지네이션 버튼을 누르면 특정 슬라이드로 이동한다.
- 버튼은 슬라이드 개수에 맞춰 동적으로 생성한다. (1개인 경우 제외)

그리고 이번에는 제가 즐겨하는 게임인 리그 오브 레전드에 제리(Zeri)라는 신규 챔피언이 출시된다 하여, 이를 기념으로 주로 사용하는 챔피언들의 일러스트를 이용해 슬라이드를 디자인했습니다. 1월 21일 출시라는데 얼른 나왔으면 좋겠네요!

![리그 오브 레전드 신규 챔피언 '제리'](./images/infinite-slide-like-slick/1.webp)

# Carousel 구현하기

## 구현 전에 짚고 넘어가기

Slick 공식 문서의 데모 화면을 보면 맨 처음 슬라이드에서 이전 버튼을 누르거나 혹은 맨 마지막 슬라이드에서 다음 버튼을 눌렀을 때, 마치 슬라이드가 바로 옆에 붙어 있는 것처럼 보입니다. 이는 다음과 같은 형태로 구현되어 있기 때문입니다.

![무한 슬라이드 UI의 일반적인 구조](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtCjl8%2FbtrqgbqandO%2FQIYEdp59k7P0aaaC4dEp41%2Fimg.jpg)

복사본은 HTML을 마크업 할 때부터 추가할 필요 없이, 자바스크립트에서 동적으로 양 끝의 요소를 복사하여 부모 리스트에 추가해주면 됩니다. 이후에는 리스트를 슬라이드의 가로 사이즈만큼 좌우로 이동시키는 식으로 구현하면 됩니다. 만약 슬라이드의 사이즈가 800px이라면, 리스트를 800px 움직이면 다음 슬라이드가 화면에 보여지겠죠?

## 예제로 준비한 HTML/CSS 코드

### HTML 코드

```html title="index.html"
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>Carousel</title>
    <!-- Styles -->
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
      integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="slide">
      <ul class="slide__list">
        <li class="slide__item">
          <img class="slide__image" src="images/1.jpeg" alt="키아나" />
        </li>
        <li class="slide__item">
          <img class="slide__image" src="images/2.jpeg" alt="르블랑" />
        </li>
        <li class="slide__item">
          <img class="slide__image" src="images/3.jpeg" alt="피즈" />
        </li>
        <li class="slide__item">
          <img class="slide__image" src="images/4.jpeg" alt="트위스티드 페이트" />
        </li>
        <li class="slide__item">
          <img class="slide__image" src="images/5.jpeg" alt="제리" />
        </li>
      </ul>
      <div class="buttons"></div>
      <div class="paginations"></div>
    </div>
    <!-- Scripts -->
    <script src="app.js"></script>
  </body>
</html>
```

스타일 부분에 추가한 Font Awesome은 태그 형태(`<i class="fas fa-arrow">`)로 아이콘을 사용할 수 있게 도와주는 라이브러리입니다. 사용 방법이 정말 간단하고, 공식 문서에서도 친절하게 설명해주고 있기 때문에 궁금한 분들은 한 번 확인해 보세요. 버튼 부분은 슬라이드 개수에 맞춰 동적으로 생성할 예정이기에 비워뒀습니다.

### CSS 코드

```css title="style.css"
* {
  margin: 0;
  padding: 0;
}

button {
  border: 0;
  outline: 0;
  background: transparent;
  cursor: pointer;
}

.slide {
  position: relative;
  overflow: hidden;
}

.slide__list {
  display: flex;
  transform: translate(0, 0);
}

.slide__item {
  flex: 0 0 100%;
  list-style: none;
}

.slide__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.buttons {
  position: absolute;
  top: 0;
  width: 100%;
  height: calc(100% - 1rem);
}

.buttons__prev,
.buttons__next {
  position: absolute;
  top: 50%;
  width: 36px;
  height: 36px;
  background: #fff;
  border-radius: 50%;
  transform: translateY(-50%);
}

.buttons__prev {
  left: 1rem;
}

.buttons__next {
  right: 1rem;
}

.paginations {
  padding-top: 1rem;
  text-align: center;
}

.pagination {
  width: 12px;
  height: 12px;
  background: rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
}

.pagination:not(:last-child) {
  margin-right: 0.3rem;
}

.pagination.on {
  background: #333;
}
```

여기까지 작성하면 화면에는 첫 번째 이미지만 보일 건데, 나머지 이미지는 자바스크립트 로직을 통해 보여주면 됩니다.

## 자바스크립트 로직 작성

### 필요한 변수 선언 & 함수 정의

뼈대가 되는 부분은 다음과 같으며, 주석 처리한 함수를 하나씩 구현해 나가면 됩니다.

```javascript title="app.js"
const list = document.querySelector('.slide__list');
const items = document.querySelectorAll('.slide__item');
const buttons = document.querySelector('.buttons');
const paginations = document.querySelector('.paginations');
const lastIndex = items.length - 1;
let selected = 0;
let interval;

const setTransition = (value) => {
  list.style.transition = value;
};

const setTranslate = ({ index, reset }) => {
  if (reset) list.style.transform = `translate(-${list.clientWidth}px, 0)`;
  else list.style.transform = `translate(-${(index + 1) * list.clientWidth}px, 0)`;
};

const activePagination = (index) => {
  [...paginations.children].forEach((pagination) => {
    pagination.classList.remove('on');
  });
  paginations.children[index].classList.add('on');
};

// <-- 나머지 함수는 여기부터 작성해 주세요!

const render = () => {
  // makeButton();
  // makePagination();
  // cloneElement();
  // autoplay({ duration: 2000 });
};
render();
```

전부는 아니고 몇 가지 변수와 함수에 대해서만 설명하겠습니다.

- **selected**: 현재 슬라이드의 인덱스를 담은 변수
- **interval**: 슬라이드를 자동으로 움직일 때, setInterval ID를 저장할 변수
- **setTransition**: 슬라이드 전환 시 CSS Animation 속성을 부여하는 함수
- **setTranslate**: 슬라이드 인덱스에 맞춰 CSS Translate 값을 조정하는 함수
- **activePagination**: 슬라이드 인덱스에 맞춰 페이지네이션 버튼을 활성화하는 함수
- **render**: 필요한 요소들을 화면에 그리고, 슬라이드를 자동으로 재생하는 함수

### 이전/다음 버튼 만들기

이전/다음 버튼을 누르면 슬라이드를 좌우로 이동할 수 있습니다.

```javascript title="app.js"
const handlePrev = () => {
  selected -= 1;
  setTransition('transform 0.3s linear');
  setTranslate({ index: selected });
  if (selected < 0) {
    selected = lastIndex;
    setTimeout(() => {
      setTransition('');
      setTranslate({ index: selected });
    }, 300);
  }
  if (selected >= 0) activePagination(selected);
};

const handleNext = () => {
  selected += 1;
  setTransition('transform 0.3s linear');
  setTranslate({ index: selected });
  if (selected > lastIndex) {
    selected = 0;
    setTimeout(() => {
      setTransition('');
      setTranslate({ index: selected });
    }, 300);
  }
  if (selected <= lastIndex) activePagination(selected);
};

const makeButton = () => {
  if (items.length > 1) {
    const prevButton = document.createElement('button');
    prevButton.classList.add('buttons__prev');
    prevButton.innerHTML = '<i class="fas fa-arrow-left"></i>';
    prevButton.addEventListener('click', handlePrev);

    const nextButton = document.createElement('button');
    nextButton.classList.add('buttons__next');
    nextButton.innerHTML = '<i class="fas fa-arrow-right"></i>';
    nextButton.addEventListener('click', handleNext);

    buttons.appendChild(prevButton);
    buttons.appendChild(nextButton);
  }
};
```

`makeButton` 함수는 슬라이드 개수가 2개 이상인 경우에만 버튼을 생성합니다. 버튼을 동적으로 생성함과 동시에 이벤트도 연결하는데, 각 이벤트 핸들러 함수는 현재 슬라이드의 인덱스를 담고 있는 `selected` 변수의 값을 1씩 증감시키며 리스트의 `Translate` 속성 값을 조정합니다.

여기서 유의해야 하는 부분이 있다면 슬라이드의 유효 인덱스 범위를 벗어난 경우인데, 유효 범위를 벗어난 이후에도 올바르게 동작할 수 있도록 슬라이드 위치를 알맞게 조정해야 합니다. 예를 들어 Clone 1 슬라이드에 도착했으면, 2번 슬라이드로 자연스럽게 넘어갈 수 있도록 1번 슬라이드 위치로 `Translate` 값을 변경해야 합니다.

> 여기까지만 구현하면 오류가 발생할 텐데, 맨 앞과 맨 뒤의 요소를 복사하는 부분까지 구현해야 합니다.

### 페이지네이션 버튼 만들기

페이지네이션 버튼은 하단에 위치하며, 인덱스에 맞는 슬라이드로 바로 이동할 수 있도록 도와줍니다.

```javascript title="app.js"
const handlePagination = (e) => {
  if (e.target.dataset.num) {
    selected = parseInt(e.target.dataset.num);
    setTransition('all 0.3s linear');
    setTranslate({ index: selected });
    activePagination(selected);
  }
};

const makePagination = () => {
  if (items.length > 1) {
    for (let i = 0; i < items.length; i++) {
      const button = document.createElement('button');
      button.dataset.num = i;
      button.classList.add('pagination');
      if (i === 0) {
        button.classList.add('on');
      }
      paginations.appendChild(button);
      paginations.addEventListener('click', handlePagination);
    }
  }
};
```

`makePagination` 함수는 슬라이드 개수에 맞춰 버튼을 동적으로 생성한 뒤, 각 슬라이드의 인덱스를 버튼 요소의 `data-num` 속성에 할당합니다. 또한 웹사이트가 열리면 항상 첫 슬라이드부터 시작하기 때문에, 첫 번째 버튼 요소에는 추가적으로 `on` 클래스를 부여해 현재 어떤 슬라이드가 사용자에게 보여지고 있는지 알려줍니다.

### 맨 앞 & 맨 뒤 요소 복사하기

슬라이드 양 끝의 요소를 복사하면, 맨 앞에서 이전 슬라이드로 이동하거나 할 때 자연스럽게 넘길 수 있습니다.

```javascript title="app.js"
// Clone the first and last elements.
const cloneElement = () => {
  list.prepend(items[lastIndex].cloneNode(true));
  list.append(items[0].cloneNode(true));
  setTranslate({ reset: true });
};
```

요소를 복사하는 `cloneNode` 메서드의 인자로 true를 준 이유는 깊은 복사를 하기 위함입니다. 이렇게 하지 않으면 복사를 위해 사용한 요소와 메모리 주소를 공유하는 완전히 동일한 요소를 만들기 때문에, 나중에 복사본을 제거할 때 원본까지 제거되는 문제가 발생할 수 있습니다. 본 예제에서는 복사한 요소를 계속 유지하기에 깊은 복사를 하지 않아도 괜찮습니다.

마지막에 `setTranslate` 함수를 호출한 이유는 복사본들이 리스트의 양 끝에 추가되기 때문입니다. 예를 들어 기존에 3개의 슬라이드가 있었다면, [3 Clone / 1 / 2 / 3 / 1 Clone] 순으로 리스트가 채워지기 때문에 1번 슬라이드 위치로 `Translate` 값을 조정해야 합니다.

### 슬라이드 자동 재생

슬라이드 자동 재생은 `setInterval` 함수를 사용해 구현하면 됩니다.

```javascript
const autoplayIterator = () => {
  selected += 1;
  setTransition('all 0.3s linear');
  setTranslate({ index: selected });
  if (selected > lastIndex) {
    activePagination(0);
    clearInterval(interval);
    setTimeout(() => {
      selected = 0;
      setTransition('');
      setTranslate({ reset: true });
      autoplay({ duration: 2000 });
    }, 300);
  }
  if (selected <= lastIndex) activePagination(selected);
};

const autoplay = ({ duration }) => {
  interval = setInterval(autoplayIterator, duration);
};
```

이 부분의 코드는 `setInterval`을 제외하고는 위에서 구현한 이벤트들의 로직과 거의 비슷합니다. 다만 `clearInterval`을 유효 범위를 벗어났을 때 꼭 해줘야 하는데, 이렇게 하지 않고 `selected` 값만 조정하면서 처리하면, 한 바퀴 돌고 난 후 첫 번째 슬라이드에서 두 번째 슬라이드로 이동할 때 2초(2000ms)가 아닌 4초(4000ms)가 걸립니다. 이는 복사본이 존재하기 때문입니다.

> 같은 1번 슬라이드를 보는 것 같아 보이지만, 내부적으로는 복사된 1번 슬라이드에서 2초, 그리고 원본 1번 슬라이드에서 2초로 총 4초가 소요됩니다.

## 구현 결과

인덱스를 신경 쓰는 부분이 복잡했지만, 그래도 이렇게 무한 루프 슬라이드를 만들었습니다.

![리그 오브 레전드 챔피언들로 완성한 무한 루프 슬라이드](./images/infinite-slide-like-slick/3.webp)

어떤가요 Slick이랑 비슷한 느낌인가요? 하지만 아직 부족한 부분들이 남아 있습니다. 저는 두 가지 정도가 해결해야 하는 과제로 떠오르는데요. 첫 번째로는 창의 크기를 변경할 때 자연스럽게 변경될 수 있도록 하는 것이 있고, 두 번째로는 좌우 스와이프를 이용한 슬라이드 전환이 있습니다. 저는 기본적인 구현이 초기 목표였기에 여기서 마무리하겠지만, 좀 더 완성도를 높이고 싶은 분들께는 이 두 가지도 마저 구현해 보시는 걸 추천드립니다!

# 참고 자료

- [패스트캠퍼스：가장 보통의 UI - Carousel](https://shindongri.dev/blog/fastcampus-carousel/)
- [완벽한 캐러셀(carousel) 제작하기 : 1부](https://code.tutsplus.com/ko/tutorials/create-the-perfect-carousel-part-1--cms-29481)
- [비동기 프로그래밍](https://helloworldjavascript.net/pages/285-async.html)
