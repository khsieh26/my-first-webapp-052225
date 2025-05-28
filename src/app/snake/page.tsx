import SnakeGame from '../components/Snake-Game';

export default function Snake() {
  return (
    <div className="container mx-auto p-8 flex flex-col items-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
          Snake Game
        </h1>
        <p className="text-[var(--foreground)] opacity-80 max-w-2xl mx-auto">
          Use your arrow keys to control the snake. Collect the food to grow longer, but don't hit the walls or yourself!
        </p>
      </div>
      
      <div className="card p-8 w-full max-w-3xl">
        <SnakeGame />
      </div>

      <div className="mt-8 text-center">
        <p className="text-[var(--foreground)] opacity-60 text-sm">
          Tip: Press spacebar to pause/resume the game
        </p>
      </div>
    </div>
  );
}