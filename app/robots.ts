import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export const dynamic = 'force-dynamic'

export default function robots(): MetadataRoute.Robots {
  let baseUrl = 'https://muhammeduveysa.dev'
  try {
    const headersList = headers()
    const host = headersList?.get?.('x-forwarded-host') ?? headersList?.get?.('host')
    if (host) {
      baseUrl = `https://${host}`
    }
  } catch {
    // fallback to default
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
