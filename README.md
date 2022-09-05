# :zap: TodoList 프로젝트 소개
:octocat: 바로가기 https://light9639.github.io/TodoList/

![화면 캡처 2022-08-22](https://raw.githubusercontent.com/light9639/TodoList/master/public/light9639.github.io_TodoList_.png)

:sparkles: React TodoList 사이트입니다. :sparkles:

## :rocket: 시작하는 법
미리보기를 원하신다면 다운로드 후 yarn을 설치하고
```bash
yarn vite
# or
yarn dev
```
를 누르고 http://127.0.0.1:5173/ 로 접속하면 미리보기 화면을 띄울 수 있습니다.
## :calendar: 개발인원 및 기간
- 1인 개발 2022.08.25 ~ 2022.08.30(6일 소요)
## :dart: 개발 목적
- React를 통해 TodoList를 만들어보고자 하여 제작하게 되었습니다.
## :black_nib: 구현기능
- React의 `useState`, `useEffect` 기능을 활용하여 제작한 React TodoList입니다.
## :hammer_and_wrench: 적용 기술
### :zap: React
- useState, useEffect 등 리액트 Hook을 사용하였습니다.
- useState를 이용해 바로 렌더링 시켰고, useEffect 와 같은 Life Cycle을 이용해 `mount`, `unmount`시 함수를 실행하였습니다.
- Component로 `inputItem`, `ListItem`, `TitleItem`을 만든 후 App.tsx에서 조합하였습니다.
### :zap: TypeScript
- 타입스크립트를 이용하여 타입을 지정함으로써 오류의 가능성을 줄였습니다.
### :zap: Module.css
- module.css를 사용함으로써 클래스 간의 충돌을 방지하였습니다.
### :zap: Vite
- WebPack을 사용하는 대신 Vite라는 2세대 번들링 툴을 사용하여 서버에서 작동하는 JS의 크기를 줄이고 속도를 높였습니다.
### :zap: Localstorage
- 데이터를 Localstorage에 저장함으로써 영구적인 저장이 가능함.