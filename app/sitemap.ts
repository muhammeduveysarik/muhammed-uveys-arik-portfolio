import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export const dynamic = 'force-dynamic'

export default function sitemap(): MetadataRoute.Sitemap {
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

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-08-15'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ]
}
