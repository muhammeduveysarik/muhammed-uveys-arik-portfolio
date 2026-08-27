import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ChunkLoadErrorHandler } from '@/components/chunk-load-error-handler'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXTAUTH_URL ?? 'https://muhammeduveysa.dev'
  ),

  title: 'Muhammed Üveys Arık | Computer Engineering Student',

  description:
    'Muhammed Üveys Arık is a Computer Engineering student at Bilecik Şeyh Edebali University, interested in DevOps & Cloud, Backend Development, and Deep Learning.',

  keywords: [
    'Muhammed Üveys Arık',
    'Computer Engineering',
    'DevOps',
    'Cloud Computing',
    'Backend Development',
    'Deep Learning',
    'Bilecik Şeyh Edebali University',
  ],

  authors: [
    {
      name: 'Muhammed Üveys Arık',
    },
  ],

  verification: {
    google: 'HQ6AgLCPQoIjbmFNx3ozI2OO9B8U-tGlhbqggasECcI',
  },

  creator: 'Muhammed Üveys Arık',

  openGraph: {
    title: 'Muhammed Üveys Arık | Computer Engineering Student',

    description:
      'Personal portfolio of Muhammed Üveys Arık — Computer Engineering student at Bilecik Şeyh Edebali University, interested in Software Engineering, DevOps, and Cloud Computing.',

    url: 'https://muhammeduveysa.dev',

    siteName: 'Muhammed Üveys Arık',

    locale: 'en_US',

    type: 'profile',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muhammed Üveys Arık — Computer Engineering Student',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Muhammed Üveys Arık | Computer Engineering Student',

    description:
      'Personal portfolio of Muhammed Üveys Arık — Computer Engineering student at Bilecik Şeyh Edebali University.',
  },

  alternates: {
    canonical: 'https://muhammeduveysa.dev',
  },

  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',

    '@type': 'Person',

    name: 'Muhammed Üveys Arık',

    jobTitle: 'Computer Engineering Student',

    affiliation: {
      '@type': 'Organization',
      name: 'Bilecik Şeyh Edebali University',
    },

    url: 'https://muhammeduveysa.dev',

    sameAs: [
      'https://github.com/muhammeduveysarik',
      'https://www.linkedin.com/in/muveys/',
    ],
  }

  const themeScript = `
    (function () {
      try {
        var savedTheme = localStorage.getItem('theme');

        var theme =
          savedTheme === 'light' || savedTheme === 'dark'
            ? savedTheme
            : 'dark';

        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }

        document.documentElement.style.colorScheme = theme;
      } catch (e) {
        document.documentElement.classList.add('dark');
        document.documentElement.style.colorScheme = 'dark';
      }
    })();
  `

  return (
    <html lang="en" suppressHydrationWarning>
      <head>

        {/* Apply theme before page is displayed */}
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />

        <meta
          name="google-site-verification"
          content="qG7rhwqBH_cJnVTj-OBMzhbfJ9_88LxD57-By64STvE"
        />

        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

      </head>

      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}

        <ChunkLoadErrorHandler />
      </body>
    </html>
  )
}
