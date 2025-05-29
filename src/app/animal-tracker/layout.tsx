import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Kaity's Zoo",
  description: 'Track all the wonderful animals in Kaity\'s Zoo',
}

export default function AnimalTrackerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 