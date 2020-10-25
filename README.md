# Ttokdok API Book

## How to use

1. `/_api/` 디렉토리에 API를 기술한다(yaml).
    - Response 예시(`example`)는 `assets/api/examples/` 디렉토리 밑에 중복되지 않는 이름으로 추가하면 된다.
2. `/documents/_api_book_page/` 디렉토리에 위 1단계에서 작성한 yaml 파일과 **동일한** 이름의 html 파일을 만든다. 예를 들어, 1단계에서 `/_api/test.yaml`을 만들었다면, `/documents/_api_book_page/test.html`을 만들어야 한다.
3. 위 2단계에서 만든 html 파일에 다음 내용을 추가한다. 다른 내용은 추가할 필요 없다(추가해도 표시되지 않는다).

```
---
---
```
