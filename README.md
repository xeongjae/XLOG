# XLOG

> 이 프로젝트는 [craigary/nobelium](https://github.com/craigary/nobelium)을 기반으로 제작되었습니다.

## 소개

XLOG는 Next.js와 Notion API를 활용한 개인 기술 블로그 플랫폼입니다. Notion을 CMS(Content Management System)로 사용하여 편리하게 콘텐츠를 관리할 수 있습니다.

## 주요 기능

- 🌓 다크 모드 지원
- 📱 반응형 디자인
- 💬 Utterances 댓글 시스템
- 📝 Notion을 통한 콘텐츠 관리
- 🔍 SEO 최적화

## 기술 스택

- Next.js
- React
- Tailwind CSS
- Notion API

## 시작하기

1. 이 저장소를 클론합니다:

```bash
git clone https://github.com/xeongjae/XLOG.git
```

2. 의존성을 설치합니다:

```bash
npm install
# or
yarn install
```

3. 환경 변수를 설정합니다:
   `.env.local` 파일을 생성하고 필요한 환경 변수를 설정합니다:

```
NOTION_API_KEY=your-notion-api-key
```

4. 개발 서버를 실행합니다:

```bash
npm run dev
# or
yarn dev
```

## 설정

`site.config.js` 파일에서 다음과 같은 설정을 커스터마이즈할 수 있습니다:

- 프로필 정보
- 블로그 제목 및 설명
- 테마 설정
- Notion 페이지 ID
- 댓글 시스템
- 기타 플러그인 설정

## 라이선스

MIT License

## 감사의 글

이 프로젝트는 [craigary/nobelium](https://github.com/craigary/nobelium)을 기반으로 제작되었습니다.
