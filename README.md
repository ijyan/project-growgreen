# GrowGreen

## 프로젝트 소개

- 습관을 개선하여 건강한 삶을 살아가는 것을 희망하는 사람들을 위한 사이트입니다.
- 실생활에서도 간단하게 실천할 수 있는 식단과 운동 및 건강관리 팁 등을 제공합니다.

## 개발 환경

#### Front
<img src="https://img.shields.io/badge/react-61dafb?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/eslint-4b32c3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-f7b93e?style=for-the-badge&logo=prettier&logoColor=black"> <img src="https://img.shields.io/badge/axios-5a29e4?style=for-the-badge&logo=axios&logoColor=white">
<img src="https://img.shields.io/badge/react router-ca4245?style=for-the-badge&logo=reactrouter&logoColor=white">
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
<img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white">
<img src="https://img.shields.io/badge/zustand-333333?style=for-the-badge&logo=zustand&logoColor=white">

#### 디자인
<img src="https://img.shields.io/badge/figma-f24e1e?style=for-the-badge&logo=figma&logoColor=white">

#### 협업툴
<img src="https://img.shields.io/badge/slack-4a154b?style=for-the-badge&logo=slack&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/notion-000?style=for-the-badge&logo=notion&logoColor=white">

## 기능

### [로그인]
- 아이디와 비밀번호를 입력하고 로그인 버튼 클릭 시 유효성 검사가 진행되고 통과하지 못한 경우 각 경고 문구가 입력창 하단에 표시됩니다.
- 아이디, 비밀번호 형식이 유효하지 않을 경우에는 각 입력창 하단에 경고 문구가 나타납니다.
- 로그인 버튼 클릭 시 아이디 또는 비밀번호가 일치하지 않을 경우에는 경고 문구가 나타나며, 로그인에 성공하면 홈 피드 화면으로 이동합니다.

  |                                                    로그인                                                    |
  |:---------------------------------------------------------------------------------------------------------:|
  | ![login](https://github.com/ijyan/project-growgreen/assets/87649569/eeb91b96-6fa7-482d-9b76-23267541f079) |

### [회원가입]
- 아이디, 비밀번호, 이름, 닉네임, 이메일을 입력하고 회원가입 버튼 클릭 시 유효성 검사가 진행되고 통과하지 못한 경우 각 경고 문구가 입력창 하단에 표시됩니다.
- 작성이 완료된 후, 유효성 검사가 통과된 경우 회원가입 버튼을 누르면 완료됩니다.

  |                                                   회원가입                                                   |
  |:--------------------------------------------------------------------------------------------------------:|
  | ![join](https://github.com/ijyan/project-growgreen/assets/87649569/84d4039c-d849-48e2-aa4d-eb480f636f8f) |

### [로그아웃]
- header에 닉네임을 클릭 후 나타나는 모달창의 로그아웃 버튼을 클릭하면 로그아웃이 됩니다.

  |                                                    로그아웃                                                    |
  |:----------------------------------------------------------------------------------------------------------:|
  | ![logout](https://github.com/ijyan/project-growgreen/assets/87649569/8e491a56-4673-4520-930c-91587f603982) |

### [게시글]
#### 1. 게시글 작성 & 등록
- 로그인 된 유저만 게시글을 작성할 수 있으며, 로그인이 되어 있지 않을 경우 로그인 페이지로 이동합니다.
- 카테고리, 제목, 본문을 입력하고 게시물 등록 버튼 클릭 시 유효성 검사가 진행되고 통과하지 못한 경우 각 경고 문구가 입력창 하단에 표시됩니다.
- 게시글은 한 페이지에 10개의 항목 씩 보여줍니다.

  |                                                   게시글 작성                                                    | 게시글 등록 |
  |:-----------------------------------------------------------------------------------------------------------:|:------:|
  | ![written](https://github.com/ijyan/project-growgreen/assets/87649569/bcefa468-f9e1-412b-9d97-0ef6d1eb9918) | ![postnew](https://github.com/ijyan/project-growgreen/assets/87649569/91a2a8ed-2b5c-410a-a83d-b2434f96c173) |

#### 2. 게시글 수정 & 삭제
- 자신의 게시글일 경우 '수정', '삭제' 버튼을 통해 삭제가 가능합니다.
- 게시글 삭제 버튼 클릭 시, alert 창을 띄워 재확인 합니다. alert 창의 확인 클릭 시 해당 게시글이 삭제 됩니다.

#### 3. 좋아요와 댓글
- 좋아요와 댓글 수는 실시간으로 반영됩니다.
- 자신의 댓글일 경우 삭제가 가능합니다.

  |                                                  좋아요와 댓글                                                   |
  |:----------------------------------------------------------------------------------------------------------:|
  | ![comment](https://github.com/ijyan/project-growgreen/assets/87649569/016344e1-a00f-44d7-a957-c069d7dccf70) |

#### 4. 검색
- 게시글 타이틀로 검색할 수 있습니다. 영어는 대소문자를 가리지 않습니다.
- 클릭 시 해당 게시글의 상세페이지로 이동합니다.

  |                                                     검색                                                     |
  |:----------------------------------------------------------------------------------------------------------:|
  | ![search](https://github.com/ijyan/project-growgreen/assets/87649569/e5cc2652-7ba5-45a9-a4e4-4d3228aaeb4c) |

### [프로필]
#### 프로필 수정
- 사용자의 이름, 닉네임, 비밀번호, 이메일, 프로필 사진 중 한 가지를 수정하면 저장 버튼이 활성화 됩니다.
- 저장 버튼을 클릭 시 유효성 검사를 통과하지 못하면 하단에 경고 문구가 나타나며 저장 버튼이 비활성화 됩니다.

  |                                                    프로필                                                     |
  |:----------------------------------------------------------------------------------------------------------:|
  | ![profile](https://github.com/ijyan/project-growgreen/assets/87649569/56208f71-db30-47a7-8cf7-61e90a11d6ee) |
