# Ttokdok API Book

Jekyll로 작성된 Ttokdok API Book

<https://2020swchallenge-moai.github.io/docs/>

![image](https://user-images.githubusercontent.com/16741548/99675259-5b5c6e80-2aba-11eb-8c2e-2e31b9675b16.png)

## Prerequisite

- 파이썬 3이 시스템에 설치되어 있고, `python` 명령어로 접근 가능해야 한다.
    - 일반적으로 `python` 명령어는 파이썬 2가, `python3` 명령어는 파이썬 3이 연결되어 있다. `alias` 설정 혹은 가상환경 생성이 필요하다.

## How to use

1. `/_api/` 디렉토리에 API를 기술한다(yaml).
    - Response 예시(`example`)는 `assets/api/examples/` 디렉토리 밑에 중복되지 않는 이름으로 추가하면 된다.

2. 다음 명령어로 서버를 실행할 수 있다.

```
$ ./run
```

3. 다음 명령어로 GitHub Page에 변경사항을 업데이트할 수 있다.

```
$ ./commit
```
