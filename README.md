# DEVMONG 홈페이지 · 리매뉴팩토리

4hourssoft.com의 화면 구성과 색감을 참고해 한국어로 제작한 정적 홈페이지입니다.
브랜드는 DEVMONG, 하단 회사명은 리매뉴팩토리로 적용했습니다. 문의 이메일은 `dev.mong@gmail.com`입니다. 서비스·회사 소개는 참고 사이트를 바탕으로 한 **예시 문구**이며, 확인되지 않은 전화·주소는 비워두었습니다.

## 먼저 보기

`index.html` 파일을 브라우저로 열면 됩니다. 설치나 빌드가 필요 없습니다.

- 메인: `index.html`
- 회사명·로고·연락처·문구: `site.config.js`
- 디자인: `assets/styles.css`
- 모바일 메뉴·화면 동작: `assets/main.js`
- 개인정보 안내 초안: `privacy.html`
- 찾을 수 없는 페이지: `404.html`
- 연결할 도메인: `CNAME` → `devmong.com`

외부 폰트, 이미지 CDN, 방문 분석 서비스 없이 작동합니다. 원본 사이트의 이메일과 추적 코드는 포함하지 않았습니다.

## 회사 정보 수정

`site.config.js`를 텍스트 편집기로 열어 **따옴표 안의 값**만 수정하세요.

```js
company: {
  name: "DEVMONG",             // 화면의 브랜드 이름
  logo: "",              // 예: "./assets/logo.png"
  legalName: "리매뉴팩토리",  // 하단에 표시할 회사명
  representative: "",     // 대표자명
  businessNumber: ""      // 사업자등록번호
},
contact: {
  email: "dev.mong@gmail.com", // 문의 이메일
  phone: "",              // 대표 전화번호
  address: ""             // 사업장 주소
}
```

- 로고는 `assets` 폴더에 넣고 `logo`에 경로를 입력합니다. 빈 값이거나 이미지가 열리지 않으면 텍스트 회사명이 표시됩니다.
- 이메일을 입력하면 문의 버튼이 `mailto:` 링크로 활성화됩니다. 서버에서 문의를 접수하는 양식은 아닙니다.
- 전화와 주소는 입력한 항목만 문의 영역에 표시됩니다.
- 소개·서비스 문구를 실제 사업에 맞게 바꾸고 `showDraftNotice`를 `false`로 바꾸면 하단의 예시 안내가 사라집니다.
- 정식 개인정보 운영 정보는 `privacy.html`에서 수정합니다.
- 검색·공유용 정보는 `index.html`의 `<title>`과 설명 메타 태그도 함께 바꾸세요. `site.config.js`의 `seo` 설정은 방문자가 보는 브라우저 제목과 설명에 반영되지만, 자바스크립트를 실행하지 않는 검색·공유 봇은 원본 HTML을 읽을 수 있습니다.
- 스크립트를 끈 브라우저에서도 기본 화면을 읽을 수 있도록 HTML에 초기 문구가 들어 있습니다. 스크립트가 꺼진 환경까지 문구를 바꾸려면 `index.html`의 기본 문구도 함께 수정하세요.

## 새 GitHub 계정으로 공개하기

이 홈페이지는 `devmongkr` 계정의 `devmongkr.github.io` 저장소를 사용합니다. 아래 순서는 초기 배포와 도메인 연결을 다시 설정할 때 참고할 수 있습니다.

### 1. GitHub 로그인

[GitHub 로그인](https://github.com/login)에서 `devmongkr` 계정으로 로그인합니다. 비밀번호 입력과 이메일·보안 인증은 직접 완료합니다.

### 2. 저장소 생성과 파일 업로드

1. GitHub에서 **New repository**를 누릅니다.
2. 이름은 **`devmongkr.github.io`**, 공개 범위는 **Public**으로 정합니다. 무료 계정의 기본 공개 방식입니다.
3. **Add a README file**을 선택하고 저장소를 만듭니다.
4. **Add file → Upload files**에서 이 폴더의 **내용물**을 업로드합니다. `devmong-homepage` 폴더 전체를 상위 폴더로 올리지 마세요.
5. `index.html`, `site.config.js`, `privacy.html`, `404.html`, `CNAME`, `assets`가 저장소 최상위에 있는지 확인합니다. 숨김 파일 `.nojekyll`은 가능하면 함께 업로드하세요. 이 사이트는 Jekyll 템플릿을 사용하지 않아 일반 파일 업로드만으로도 작동합니다.
6. **Commit changes**를 누릅니다.

최상위 파일 구조:

```text
devmongkr.github.io/
├── index.html
├── site.config.js
├── privacy.html
├── 404.html
├── CNAME
├── .nojekyll
└── assets/
    ├── styles.css
    ├── main.js
    └── favicon.svg
```

### 3. GitHub Pages 설정

1. 저장소의 **Settings → Pages**로 이동합니다.
2. **Build and deployment → Source → Deploy from a branch**를 선택합니다.
3. **Branch: main**, 폴더 **/(root)**를 선택하고 **Save**를 누릅니다.
4. **Actions**에서 Pages 배포가 성공했는지 확인합니다. 첫 공개와 수정 반영에는 시간이 걸릴 수 있습니다.

현재 `CNAME`은 최종 도메인인 `devmong.com`으로 설정되어 있습니다. `devmongkr.github.io`로 먼저 테스트하려면 `CNAME`을 잠시 제외하고 Pages의 **Custom domain**을 비워둡니다. 기본 주소에서 정상 동작을 확인한 후 다음 단계를 진행하세요.

## devmong.com 연결

### 1. GitHub에서 도메인 등록

먼저 GitHub 계정의 **Settings → Pages**에서 `devmong.com` 소유권을 인증할 수 있습니다. GitHub가 안내하는 TXT 값을 도메인 관리 업체에 등록합니다. 인증값은 계정 생성 후 확인할 수 있습니다.

이어서 저장소의 **Settings → Pages → Custom domain**에 `devmong.com`을 입력하고 **Save**를 누릅니다. 저장소 최상위의 `CNAME` 내용도 `devmong.com`인지 확인합니다. 도메인 관리 업체의 DNS를 바꾸기 전에 GitHub에 도메인을 먼저 등록하세요.

### 2. domaindiscount24에서 DNS 입력

1. domaindiscount24에 로그인하고 왼쪽의 **Domains → My domains**로 이동합니다.
2. **devmong.com**을 선택하고 **DNS settings**를 엽니다.
3. **Subdomain overview**에서 메인 도메인 행의 **Edit**를 선택합니다.
4. **A/AAAA Record**에서 다음 표의 A 주소 4개를 각각 추가하고 저장합니다. 여러 주소를 한 입력칸에 붙여 넣지 않습니다.
5. `www` 행이 없으면 **Create new subdomain**에 `www`를 입력해 만듭니다.
6. `www` 행의 **Edit → CNAME**에서 CNAME을 활성화하고, 실제 계정의 `devmongkr.github.io`를 입력해 저장합니다.

이 절차는 dd24 기본 네임서버를 사용하는 경우에 적용됩니다. 외부 네임서버를 사용 중이면 그 네임서버를 관리하는 업체에서 DNS를 수정합니다. 네임서버 변경은 필요하지 않습니다. dd24의 CNAME 설정은 `www` 같은 하위 도메인에 사용하고, 메인 도메인에는 A 레코드를 사용합니다.

`devmong.com`을 구입한 업체의 DNS 관리 화면에서 다음 값을 입력합니다. `@`는 `devmong.com` 자체를 뜻하며, 업체에 따라 이름을 비워두거나 도메인 전체를 입력합니다.

| 종류 | 호스트 / 이름 | 대상 / 값 |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | devmongkr.github.io |

`www`의 대상은 **실제로 만든 계정의 `devmongkr.github.io`**이며 `https://`, 슬래시, 저장소 경로를 붙이지 않습니다. 새로 만든 `devmongkr` 계정 기준으로 확정한 값입니다. TTL은 업체 기본값을 사용하면 됩니다.

같은 이름에 기존 홈페이지용 A·AAAA·CNAME이 있으면 새 대상과 충돌하지 않게 조정합니다. 사용 중인 이메일용 MX·TXT 기록은 유지하세요. 이미 운영 중인 사이트가 있다면 새 Pages 사이트가 준비된 다음 전환합니다.

### 3. HTTPS와 접속 확인

1. DNS 반영 후 저장소의 **Settings → Pages**에서 DNS 검사가 통과했는지 확인합니다.
2. 인증서가 준비되면 **Enforce HTTPS**를 선택합니다.
3. `https://devmong.com`과 `https://www.devmong.com`을 열어 화면과 자동 이동을 확인합니다.
4. 모바일 메뉴, 서비스 이동, 개인정보 안내, 설정한 문의 이메일을 확인합니다.

GitHub 안내상 DNS 반영과 HTTPS 준비에는 최대 24시간이 걸릴 수 있습니다. 이 파일을 전달한 시점에는 실제 도메인 연결이나 인증서 발급이 완료되지 않았습니다.

## 배포 후 수정

GitHub에서 `site.config.js`를 열고 연필 아이콘으로 수정한 다음 **Commit changes**를 누르면 Pages가 다시 배포됩니다. 화면이 바로 바뀌지 않으면 배포 완료를 확인하고 새로고침합니다.

## 참고 자료

- 디자인 참고: [4hours Soft](https://4hourssoft.com/)
- [GitHub Pages 시작하기](https://docs.github.com/en/pages/quickstart)
- [공개 브랜치 설정](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [사용자 지정 도메인 연결](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [dd24 A 레코드 설정](https://support.domaindiscount24.com/hc/en-gb/articles/4409767540881-How-and-where-can-I-enter-the-IP-address-A-record-of-my-web-server)
- [dd24 CNAME 설정](https://support.domaindiscount24.com/hc/en-gb/articles/4409759297553-How-and-where-can-I-enter-a-CNAME-entry)
- [dd24 TXT 인증값 설정](https://support.domaindiscount24.com/hc/en-gb/articles/4409774008593-How-can-I-add-a-TXT-record)

DNS 값과 설정 순서는 2026년 10월 16일 GitHub 공식 문서 기준입니다.

## 확인한 항목

- 화면 너비 320·390·768·1423px에서 가로 넘침 없음
- 모바일 메뉴 열기, 문의 영역 이동, 메뉴 자동 닫힘
- 문의 버튼의 이메일 대상과 하단 회사명
- 개인정보 안내 페이지와 로컬 파일·이동 링크
- 자바스크립트 문법 확인

실제 배포 상태는 저장소의 Settings → Pages 및 Actions에서 확인합니다. 도메인 연결은 DNS와 HTTPS 준비가 완료되면 반영됩니다.
