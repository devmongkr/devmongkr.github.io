/*
 * DEVMONG 홈페이지 설정
 * 따옴표 안의 내용만 바꾸고 저장하면 화면에 바로 반영됩니다. 빌드가 필요 없습니다.
 * 서비스/소개 문구는 참고 사이트를 한국어로 옮긴 임시 예시입니다.
 * 실제 제공 서비스와 일치하도록 수정한 뒤 공개하세요.
 */
window.SITE_CONFIG = {
  company: {
    name: "DEVMONG", // 브랜드 이름
    // 로고 파일을 assets 폴더에 넣은 뒤 예: "./assets/logo.png". 비워두면 회사명이 표시됩니다.
    logo: "",
    // 정식 회사 정보가 확인되면 입력하세요. 비워두면 화면에서 생략합니다.
    legalName: "리매뉴팩토리",
    representative: "",
    businessNumber: "120-11-54543"
  },
  contact: {
    // 실제 사용하는 이메일/전화번호만 입력하세요. 비워두면 준비 중으로 표시됩니다.
    email: "dev.mong@gmail.com",
    phone: "",
    address: ""
  },
  seo: {
    title: "DEVMONG | 모바일 앱 개발 스튜디오",
    description: "아이디어를 더 나은 모바일 경험으로 연결합니다. DEVMONG의 서비스와 회사 소개를 만나보세요."
  },
  hero: {
    badge: "모바일 앱 개발 스튜디오",
    line1: "아이디어를 넘어,",
    highlight: "특별한",
    line2: "모바일 경험으로",
    description: "새로운 기술과 창의적인 디자인으로 아이디어를 사용자 중심의 모바일 앱으로 연결합니다.",
    primaryButton: "프로젝트 문의",
    secondaryButton: "서비스 살펴보기"
  },
  services: {
    title: "우리가 만드는 서비스",
    description: "아이디어가 서비스로 완성되는 과정, 필요한 개발 경험을 함께합니다.",
    items: [
      {
        title: "iOS 앱 개발",
        description: "Swift와 SwiftUI를 활용한 네이티브 iOS 앱. 자연스러운 사용 경험과 안정적인 성능을 고려합니다.",
        tags: ["Swift", "SwiftUI", "UIKit", "Core Data"]
      },
      {
        title: "Android 앱 개발",
        description: "Kotlin과 Jetpack Compose 기반의 Android 앱. 다양한 기기와 환경에 맞는 모바일 경험을 설계합니다.",
        tags: ["Kotlin", "Jetpack Compose", "Room", "Coroutines"]
      },
      {
        title: "크로스 플랫폼 개발",
        description: "Flutter와 React Native를 활용해 iOS와 Android를 함께 개발하고, 일관된 서비스 경험을 구현합니다.",
        tags: ["Flutter", "React Native", "Dart", "TypeScript"]
      }
    ]
  },
  about: {
    title: "DEVMONG을 소개합니다",
    description: "더 나은 모바일 경험을 만드는 일. 우리는 그 과정의 가치를 생각합니다.",
    items: [
      { title: "새로운 기술", description: "변화하는 기술을 탐구하고, 서비스에 필요한 방법을 찾습니다." },
      { title: "사용자 중심", description: "사용자의 입장에서 생각하며 모든 디자인과 개발의 방향을 정합니다." },
      { title: "완성도를 향한 노력", description: "세심한 확인과 지속적인 개선으로 안정적인 경험을 만들어갑니다." }
    ]
  },
  inquiry: {
    title: "멋진 시작을 함께 만들어요",
    description: "떠오른 아이디어가 있으신가요? 만들고 싶은 서비스와 고민을 편하게 들려주세요.",
    button: "이메일로 문의하기"
  },
  // 하단 안내 문구 표시 여부
  showDraftNotice: false
};
