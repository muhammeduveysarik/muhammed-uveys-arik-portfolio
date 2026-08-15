# Muhammed Üveys Arık – Portfolio

Kişisel portföy web sitesinin tam kaynak kodu. Next.js (App Router) + TypeScript + Tailwind CSS ile geliştirilmiştir.

## Gereksinimler

- Node.js 18+ (Node 20 önerilir)
- Yarn (veya npm)

## Kurulum

```bash
yarn install
```

> `node_modules` klasörü pakete dahil edilmemiştir. İlk kurulumda bu komut bağımlılıkları indirir. (npm kullanacaksanız `npm install`.)

## Geliştirme sunucusu

```bash
yarn dev
```

Uygulama `http://localhost:3000` adresinde çalışır.

## Üretim derlemesi

```bash
yarn build
yarn start
```

## Notlar

- `sitemap.xml` ve `robots.txt` dinamik olarak `app/sitemap.ts` ve `app/robots.ts` üzerinden üretilir; statik dosya değildir.
- Google Search Console doğrulama meta etiketi `app/layout.tsx` içinde tanımlıdır.
- Görseller, CV (`public/Muhammed_Uveys_Arik_CV.pdf`) ve profil fotoğrafı (`public/profile.jpg`) `public/` klasöründedir.
- Herhangi bir ortam değişkeni (`.env`) gerektirmez; olduğu gibi çalışır.

## Bağımsız dağıtım

Bu proje Vercel, Netlify, kendi sunucunuz veya herhangi bir Node.js barındırma ortamında dağıtılabilir. GitHub deponuza yükleyip tercih ettiğiniz platforma bağlayabilirsiniz.
