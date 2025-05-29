import Link from "next/link"
import SnakeGame from "./components/Snake-Game"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                Kaity&apos;s First Web App
              </h1>
              <p className="mx-auto max-w-[700px] text-[var(--foreground)] opacity-80 md:text-xl">
                This is my experiment to figure out how to do basic coding shit. Okay, it&apos;s mostly Claude doing the work.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/snake-game">
                <button className="px-4 py-2 rounded-md bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white font-medium">
                  Play Snake Game
                </button>
              </Link>
              <Link href="/animal-tracker">
                <button className="px-4 py-2 rounded-md border border-pink-200 dark:border-pink-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
                  Visit Zoo 🦁
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section with Snake Game */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="inline-block rounded-lg bg-pink-100 dark:bg-pink-900/20 px-3 py-1 text-sm">
              Featured Game
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-pink-600 dark:text-pink-400">
              Snake Game
            </h2>
            <p className="mx-auto max-w-[700px] text-[var(--foreground)] opacity-80 md:text-xl">
              Try out this classic game right in your browser! Use arrow keys to control the snake.
            </p>
          </div>

          <div className="mx-auto max-w-3xl rounded-xl border border-pink-200 dark:border-pink-800 bg-white dark:bg-gray-900 p-4 shadow-lg">
            <SnakeGame />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-purple-950/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-600 dark:text-purple-400">
              Explore More Features
            </h2>
            <p className="mx-auto max-w-[700px] text-[var(--foreground)] opacity-80 md:text-lg">
              Check out all the fun features available in this web application
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-pink-200 dark:border-pink-800 p-6 shadow-sm transition-all hover:shadow-md">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900/20 p-3">
                {/* Rocket icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Counter App</h3>
              <p className="text-center text-[var(--foreground)] opacity-80">
                A simple counter application to demonstrate state management
              </p>
              <Link href="/counter">
                <button className="px-3 py-1.5 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-md">
                  Try it out
                </button>
              </Link>
            </div>

            <div className="flex flex-col items-center space-y-2 rounded-lg border border-pink-200 dark:border-pink-800 p-6 shadow-sm transition-all hover:shadow-md">
              <div className="rounded-full bg-orange-100 dark:bg-orange-900/20 p-3">
                {/* Paw icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-orange-600 dark:text-orange-400"
                >
                  <circle cx="11" cy="4" r="2" />
                  <circle cx="18" cy="8" r="2" />
                  <circle cx="20" cy="16" r="2" />
                  <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Kaity&apos;s Zoo 🦁</h3>
              <p className="text-center text-[var(--foreground)] opacity-80">
                Track and manage all the wonderful animals in our magical zoo
              </p>
              <Link href="/animal-tracker">
                <button className="px-3 py-1.5 text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-md">
                  Visit Zoo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
