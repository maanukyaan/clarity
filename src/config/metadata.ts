import { Metadata, Viewport } from "next";

export const metaData: Metadata = {
  authors: [{ name: "Vahe Manukyan", url: "https://whoiskenshi.t.me" }],
  title: "Clarity — платформа для видеовстреч и совместной работы",
  icons: "/logo.svg",
  description:
    "Clarity — удобная и надежная платформа для видеовстреч, которая помогает вам эффективно общаться и работать вместе.",
  openGraph: {
    siteName: "Clarity",
    title: "Clarity — платформа для видеовстреч и совместной работы",
    description:
      "Clarity — ваш инструмент для видеовстреч с кристально четким качеством, лёгкостью использования и максимальной производительностью.",
    // url: "https://clarity.manukyan.tech",
    // images: "/logo.svg",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewPort: Viewport = {
  themeColor: "#161925",
};
