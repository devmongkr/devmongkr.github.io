# DEVMONG 홈페이지 · 리매뉴팩토리

- 홈페이지: [devmong.com](http://devmong.com/)
- 저장소: [devmongkr/devmongkr.github.io](https://github.com/devmongkr/devmongkr.github.io)
- 브랜드: **DEVMONG**
- 하단 회사명: **리매뉴팩토리**
- 사업자등록번호: **120-11-54543**
- 문의 이메일: **dev.mong@gmail.com**

4hourssoft.com의 화면 구성과 색감을 참고해 한국어로 제작한 정적 홈페이지입니다. GitHub Pages에 배포했으며, devmong.com과 www.devmong.com의 DNS 연결 및 GitHub 도메인 소유권 인증을 완료했습니다. HTTPS 인증서는 GitHub에서 발급을 진행 중입니다.

## 회사 정보와 문구 수정

1. 저장소에서 `site.config.js`를 엽니다.
2. 연필 아이콘으로 수정 화면을 열어 따옴표 안의 값을 바꿉니다.
3. **Commit changes**로 저장하면 GitHub Pages가 자동으로 다시 배포합니다.

`company.name`은 상단 브랜드, `company.legalName`은 하단 회사명입니다. `contact.email`을 바꾸면 문의 버튼의 이메일 주소가 함께 바뀝니다. 전화와 주소는 입력한 항목만 표시됩니다.

로고를 바꾸려면 `assets` 폴더에 이미지를 넣고 `company.logo`를 `./assets/logo.png`처럼 지정합니다. 비워두거나 이미지가 열리지 않으면 텍스트 브랜드가 표시됩니다.

`hero`, `services`, `about`, `inquiry`에서 소개 문구를 수정할 수 있습니다.

검색·공유용 정보는 `index.html`의 `<title>`과 설명 메타 태그도 함께 수정합니다. `site.config.js`의 `seo`는 브라우저에 표시되는 제목과 설명을 갱신합니다. 자바스크립트를 실행하지 않는 검색·공유 봇과 브라우저는 원본 HTML의 문구를 읽을 수 있습니다.

## 파일 구성

| 파일 | 역할 |
| --- | --- |
| `index.html` | 홈페이지와 기본 문구 |
| `site.config.js` | 브랜드·회사 정보·문의·서비스 문구 |
| `assets/styles.css` | 색상·크기·반응형 디자인 |
| `assets/main.js` | 설정 반영·모바일 메뉴·화면 효과 |
| `assets/favicon.svg` | 브라우저 탭 아이콘 |
| `privacy.html` | 현재 기능에 대한 개인정보 안내 초안 |
| `404.html` | 존재하지 않는 페이지 안내 |
| `CNAME` | `devmong.com` 연결 유지 |
| `.nojekyll` | 정적 파일 그대로 게시 |

`index.html`을 브라우저로 열면 로컬에서도 볼 수 있습니다. 별도 설치나 빌드가 필요 없습니다. 외부 폰트·이미지 CDN·방문 분석 서비스는 사용하지 않습니다. 문의 버튼은 이메일 프로그램을 여는 방식이며, 서버에 문의를 접수하는 입력 양식은 없습니다.

## 현재 배포 설정

저장소의 **Settings → Pages**에서 다음 설정을 사용합니다.

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/(root)**
- Custom domain: **devmong.com**

최근 배포 상태는 **Actions** 또는 **Settings → Pages**에서 확인합니다. 수정 후 화면이 바로 바뀌지 않으면 배포 완료를 확인하고 새로고침합니다.

## domaindiscount24 DNS 설정

**Domains → My domains → devmong.com → DNS settings**에서 관리합니다.

| 종류 | 호스트 | 값 |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | devmongkr.github.io |

GitHub 소유권 인증을 위한 `_github-pages-challenge-devmongkr` TXT 레코드가 등록되어 있습니다. 해당 인증 기록과 기존 Google 인증 TXT, 이메일 전달 및 메일 서버 설정은 유지합니다.

GitHub Pages가 도메인 인증서를 준비하면 **Settings → Pages → Enforce HTTPS**를 사용합니다. 인증서 발급과 DNS 반영은 서비스 처리 시간이 걸릴 수 있습니다.

## 확인한 항목

- 320·390·768·1423px 화면 너비에서 가로 넘침 없음
- 모바일 메뉴 열기·닫기와 문의 영역 이동
- 브랜드·하단 회사명·문의 이메일 반영
- 게시된 모든 소스가 검증한 로컬 파일과 정확히 일치
- devmong.com에서 새 홈페이지 응답 확인
- 외부 DNS에서 A·CNAME·소유권 TXT 확인
- 기존 이메일 서버 유지 확인

## 참고

- [GitHub Pages 안내](https://docs.github.com/en/pages/quickstart)
- [GitHub 사용자 지정 도메인](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [domaindiscount24 A 레코드](https://support.domaindiscount24.com/hc/en-gb/articles/4409767540881-How-and-where-can-I-enter-the-IP-address-A-record-of-my-web-server)
- [domaindiscount24 CNAME](https://support.domaindiscount24.com/hc/en-gb/articles/4409759297553-How-and-where-can-I-enter-a-CNAME-entry)

작성일: 2026년 10월 16일

## InstaCoupang 공개 정책 페이지

- 개인정보처리방침: `pang/privacy.html`
- 데이터 삭제 안내: `pang/data-deletion.html`

지정한 원문 두 페이지의 본문을 그대로 옮긴 정적 페이지입니다. 두 문서 사이의 링크는 같은 폴더의 새 페이지로 연결합니다. 원문이 바뀌면 복사본도 별도로 갱신합니다. 공통 서식은 `pang/assets/policy.css`에서 수정합니다.
