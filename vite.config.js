import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/diamine-allergy-warning/',
  build: { outDir: 'docs' },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'ジアミンアレルギー警告アプリ',
        short_name: 'ジアミン警告',
        description: 'ヘアカラーによるジアミンアレルギーの発症リスクを可視化',
        theme_color: '#e74c3c',
        background_color: '#1a1a2e',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
