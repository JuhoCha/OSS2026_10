22400719 차주호

README.md & Weekly Review

Project Information: 프로젝트 소개, 선택 이유, 원본 GitHub URL 및 라이선스
- 이 프로젝트는 계산기 입니다. 선택한 이유는 조건에 최대한 맞추어 찾아보다가 조건에 부합하는 몇가지의 프로젝트 중에 수정할만한 부분이 보여 이걸로 선택하게 되었습니다. 원본 GitHub URL은 https://github.com/amanhex/Calculator.git 입니다. 
- 라이선스 : This project is licensed under the MIT License - see the LICENSE file for details.
MIT License

Copyright (c) 2022 Aman Kumar Singh

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


Installation: 설치·실행 방법 및 실행 화면
1. 깃 클론 
- git clone https://github.com/JuhoCha/OSS2026_10.git
2. 설치
- npm install
3. 서버 실행 
- npm run dev
4. 링크 클릭(기본은 5173인데 수업에서 실습한 5173이 돌아가고 있어서 5174로 올림. 기본은 5173)
- http://localhost:5174/



Source Code Exploration: 주요 파일, 컴포넌트, 코드 분석
- src 안
-> App.jsx: 각 수식을 누르면 입력을 처리하고 값을 저장한다. 
    - if (buttonName === "=" || buttonName === "Enter"): = 나 enter을 누르면 값이 eval(prevValue)에 들어가고 buttonName에 = 이 값을 나오게 해줌
    - else if (buttonName === "Backspace" || buttonName === "<<"): backspace나 <<을 누르면 글자가 지워짐
    - else if (buttonName === "C"): 모든 글자가 지워진다

-> App.css: 계산기의 색이나 크기를 정함
-> Buttons.jsx: 버튼에 들어가는 숫자들 배열에 저장하고 map으로 돌려준다.
-> ButtonsContainer.jsx: 버튼에 들어갈 숫자들, 배열을 저장함
-> main.jsx: root으로 index.css를 import해온다


Customizing: 수정한 3가지 내용, 수정 파일명 및 전/후 결과
- 수정한 세 가지: 숫자 배열 변경 및 삭제 버튼 추가, 제목에 이름 추가, 색상 변경 
1. ButtonsContainer.jsx 
2. AppTitle.jsx
3. index.css, app.css

Deployment: 실제 접근 가능한 Vercel URL
- https://ossassign1022400719.vercel.app/

Weekly Review:

새롭게 배운 내용 3가지:
1. 수업에서 듣기는 했지만 java script는 {} 안에서 사용하고, java script xml이랑 같은 말이다. 특별하게 다른건 중괄호가 제일 큼.  
2. className은 화면 글자가 아니고 css가 사용하는거임. 
3. 각각의 element 수정하기 위해서는 각각 해당하는 파일을 찾아가는데 src 파일 안에서 색 변경은 css js 수정은 jsx에서 잘 찾아서 하나 변경하면 그 연관된 파일을 찾아가서 수정해줘야 하고, vercel로 push하면서 잘 바뀐건지 확인하는게 편하다. 

어려웠던 점과 해결 방법:
- 처음 이런 작업을 해보다 보니 설레고 재밌었습니다. 매일 매주 새로운걸 배우는 재미가 있지만 이번에는 특히 fork라는 기능을 사용해보는것도 처음이고 그랬는데 npm 을 사용해 다운로드 받고 서버를 여는것도 설레고 재미있었습니다. 처음에 error가 뜨길래 왜 안될까 했는데 학교 파일인 assign10-c01-.. 이런 파일 안에 들어가 있으면 당연히 npm 명령어가 먹히지 않고, cd를 사용해 Calculator 파일 안으로 들어가야 실행된다는 것을 많은 실수를 통해 배웠습니다. 그리고 다 유기적으로 코드가 엮여있어 하나 오타내면 하얀 화면이 나왔는데 오타, 마침표, <></> 이렇게 잘 닫아주기를 잘 해야한다고 다시금 깨달았습니다. 

AI 활용 내용 및 느낀 점:
- npm install 하고 할 때 readme 하나하나 따라하는데 설정이 막히거나 error가 뜨는 부분이 있으면 ai를 사용해 질문하고 해결했습니다. 그리고 여러 블로그를 참고하여 오류들을 수정하였습니다. 