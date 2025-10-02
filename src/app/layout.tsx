import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ATS - 採用管理システム',
  description: '求人情報の検索・応募',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
