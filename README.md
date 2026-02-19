# Academic Personal Website Starter (Astro)

HCI/CS 연구자 스타일의 개인 홈페이지 뼈대입니다.

## 왜 이 구조인가
- 학계에서 널리 쓰는 구성(Home/Publications/Projects/CV/Blog/Contact)
- 블로그를 Markdown으로 관리해서 업데이트가 쉬움
- 정적 사이트라 GitHub Pages/Vercel/Cloudflare Pages 배포가 간단
- 코드/디자인 커스터마이징 여지가 큼

## 추천 기술 스택
- Frontend: Astro + TypeScript + CSS (필요 시 React 컴포넌트 점진적 추가)
- Content: `src/data/site.ts` + `src/content/blog/*.md`
- Hosting: GitHub Pages(기본), 대안으로 Vercel/Cloudflare Pages

## 시작하기
```bash
npm install
npm run dev
```

## 수정 포인트
- 기본 프로필: `src/data/site.ts`
- 메인 디자인: `src/styles/global.css`
- 프로필 사진: `public/profile-placeholder.svg`를 `public/profile.jpg` 등으로 교체 후 `src/pages/index.astro`의 `src` 수정
- 블로그 글: `src/content/blog/*.md`
- 주요 페이지:
  - `src/pages/index.astro`
  - `src/pages/publications.astro`
  - `src/pages/projects.astro`
  - `src/pages/cv.astro`
  - `src/pages/contact.astro`

## GitHub Pages 배포
1. GitHub에 push
2. Repository Settings -> Pages -> Build and deployment: GitHub Actions
3. `astro.config.mjs`의 `site`를 본인 URL로 수정
4. custom repo path를 쓰면 `base`를 `/<repo-name>/`으로 변경

## 글로벌 연구자 네트워킹용 운영 팁
- 모든 페이지 기본 언어는 영어로 유지하고, 필요 시 한국어 요약을 추가
- Publications에는 BibTeX, PDF, slides, code 링크를 함께 제공
- Blog는 긴 글보다 conference note/idea memo 형식으로 짧게 자주 업데이트

## 대안 배포
- Vercel: 자동 프리뷰/도메인 설정이 쉬움
- Cloudflare Pages: 정적 사이트 성능/글로벌 캐시가 강점
