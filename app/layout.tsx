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
    'Muhammed Üveys Arık is a Computer Engineering student at Bilecik Şeyh Edebali University, exploring Data, Artificial Intelligence, DevOps, Cloud Computing, Cybersecurity, and Software Engineering.',

  keywords: [
    'Muhammed Üveys Arık',
    'Computer Engineering',
    'Data',
    'Artificial Intelligence',
    'DevOps',
    'Cloud Computing',
    'Cybersecurity',
    'Software Engineering',
    'Bilecik Şeyh Edebali University',
  ],

  authors: [
    {
      name: 'Muhammed Üveys Arık',
    },
  ],

  creator: 'Muhammed Üveys Arık',

  verification: {
    google: 'HQ6AgLCPQoIjbmFNx3ozI2OO9B8U-tGlhbqggasECcI',
  },

  openGraph: {
    title: 'Muhammed Üveys Arık | Computer Engineering Student',

    description:
      'Personal portfolio of Muhammed Üveys Arık — Computer Engineering student exploring Data, AI, DevOps, Cloud, Cybersecurity, and Software Engineering.',

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
      'Personal portfolio of Muhammed Üveys Arık — Computer Engineering student.',
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

  return (
    <html
      lang="en"
      className="dark"
      style={{ colorScheme: 'dark' }}
      suppressHydrationWarning
    >
      <head>
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
