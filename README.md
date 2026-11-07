22400719 차주호

README.md & Weekly Review

Project Information: 프로젝트 소개, 선택 이유, 원본 GitHub URL 및 라이선스
- 이 프로젝트는 계산기 입니다. 선택한 이유는 조건에 최대한 맞추어 찾아보다가 조건에 부합하는 몇가지의 프로젝트 중에 수정할만한 부분이 보여 이걸로 선택하게 되었습니다. 원본 GitHub URL은 https://github.com/amanhex/Calculator.git 입니다. 

Installation: 설치·실행 방법 및 실행 화면
1. 깃 클론 
- git clone https://github.com/JuhoCha/OSS2026_10.git
2. 설치
- npm install
3. 서버 실행 
- npm run dev
4. 링크 클릭
- http://localhost:5174/



Source Code Exploration: 주요 파일, 컴포넌트, 코드 분석


Customizing: 수정한 3가지 내용, 수정 파일명 및 전/후 결과
- 수정한 세 가지: 숫자 배열 변경 및 삭제 버튼 추가, 제목에 이름 추가, 색상 변경 

Deployment: 실제 접근 가능한 Vercel URL
- https://ossassign1022400719.vercel.app/

Weekly Review:

새롭게 배운 내용 3가지:
1. 수업에서 듣기는 했지만 java script는 {} 안에서 사용하고, java script xml이랑 같은 말이다. 특별하게 다른건 중괄호가 제일 큼.  
2. className은 화면 글자가 아니고 css가 사용하는거임. 
3. 각각의 element 수정하기 위해서는 각각 해당하는 파일을 찾아가는데 src 파일 안에서 색 변경은 css js 수정은 jsx에서 잘 찾아서 하나 변경하면 그 연관된 파일을 찾아가서 수정해줘야 하고, vercel로 push하면서 잘 바뀐건지 확인하는게 편하다. 

어려웠던 점과 해결 방법:
- 처음 이런 작업을 해보다 보니 설레고 재밌었습니다. 매일 매주 새로운걸 배우는 재미가 있지만 이번에는 특히 fork라는 기능을 사용해보는것도 처음이고 그랬는데 npm 을 사용해 다운로드 받고 서버를 여는것도 설레고 재미있었습니다. 처음에 error가 뜨길래 왜 안될까 했는데 학교 파일인 assign10-c01-.. 이런 파일 안에 들어가 있으면 당연히 npm 명령어가 먹히지 않고, cd를 사용해 Calculator 파일 안으로 들어가야 실행된다는 것을 많은 실수를 통해 배웠습니다. 

AI 활용 내용 및 느낀 점:
- npm install 하고 할 때 readme 하나하나 따라하는데 설정이 막히거나 error가 뜨는 부분이 있으면 ai를 사용해 질문하고 해결했습니다. 그리고 여러 블로그를 참고하여 오류들을 수정하였습니다. 