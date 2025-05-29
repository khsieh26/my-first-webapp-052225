import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Kaitys Zoo",
  description: 'Track all the wonderful animals in Kaitys Zoo',
}

export default function AnimalTrackerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 