const CONFIG = {
  // profile setting (required)
  profile: {
    name: "seongjae",
    image: "/biber.png",
    role: "frontend developer",
    bio: "프론트엔드 전반에 관심있습니다.",
    email: "newsungjae0407@gmail.com",
    github: "xeongjae",
    instagram: "",
  },
  // blog setting (required)
  blog: {
    title: "🪵 beavlog",
    description: "개발자 김성재의 기술 블로그",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://seongjae-log.vercel.app",
  since: 2024,
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app",

  // notion configuration (required)
  notionConfig: {
    pageId: "1c623905fa94804bbbaaf695540cb77c", // 새로운 ID로 업데이트
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "xeongjae/xeongjae-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "",
    },
  },
  isProd: process.env.VERCEL_ENV === "production",
  revalidateTime: 21600 * 7,
}

module.exports = { CONFIG }
