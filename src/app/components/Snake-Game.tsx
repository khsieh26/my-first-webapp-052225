'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

// Game constants
const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SPEED = 150; // milliseconds between moves

export default function SnakeGame() {
  // Game state
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]); // Snake starts with one segment
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  
  // Ref to store the game loop interval with proper typing
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);
  
  // Function to generate random food position
  const generateFood = useCallback(() => {
    const x = Math.floor(Math.random() * GRID_SIZE);
    const y = Math.floor(Math.random() * GRID_SIZE);
    
    // Make sure food doesn't appear on snake
    const isOnSnake = snake.some(segment => segment.x === x && segment.y === y);
    if (isOnSnake) {
      return generateFood();
    }
    
    return { x, y };
  }, [snake]);
  
  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent arrow keys from scrolling the page
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
      }

      // If game hasn't started yet, arrow keys start the game
      if (!isStarted && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        setIsStarted(true);
        switch (e.key) {
          case 'ArrowUp':
            if (direction !== 'DOWN') setDirection('UP');
            break;
          case 'ArrowDown':
            if (direction !== 'UP') setDirection('DOWN');
            break;
          case 'ArrowLeft':
            if (direction !== 'RIGHT') setDirection('LEFT');
            break;
          case 'ArrowRight':
            if (direction !== 'LEFT') setDirection('RIGHT');
            break;
        }
        return;
      }

      // Space bar toggles pause (only if game is started)
      if (e.key === ' ' && isStarted) {
        setIsPaused(prev => !prev);
        return;
      }
      
      // Don't change direction if game is paused, over, or not started
      if (isPaused || gameOver || !isStarted) return;
      
      // Prevent 180-degree turns (can't go in the opposite direction)
      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction, isPaused, gameOver, isStarted]);
  
  // Game loop
  useEffect(() => {
    // Don't run the game loop if game is over, paused, or not started
    if (gameOver || isPaused || !isStarted) return;
    
    const moveSnake = () => {
      setSnake(prevSnake => {
        // Create new head based on current direction
        const head = { ...prevSnake[0] };
        
        switch (direction) {
          case 'UP':
            head.y -= 1;
            break;
          case 'DOWN':
            head.y += 1;
            break;
          case 'LEFT':
            head.x -= 1;
            break;
          case 'RIGHT':
            head.x += 1;
            break;
        }
        
        // Check for collision with walls
        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
          setGameOver(true);
          return prevSnake;
        }
        
        // Check for collision with self
        if (prevSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
          setGameOver(true);
          return prevSnake;
        }
        
        // Check if snake ate food
        const newSnake = [head, ...prevSnake];
        if (head.x === food.x && head.y === food.y) {
          setScore(prev => prev + 1);
          setFood(generateFood());
        } else {
          // Remove tail if no food was eaten
          newSnake.pop();
        }
        
        return newSnake;
      });
    };
    
    // Set up game loop
    gameLoopRef.current = setInterval(moveSnake, INITIAL_SPEED);
    
    // Clean up interval on unmount or when dependencies change
    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [direction, food, gameOver, isPaused, isStarted, generateFood]);
  
  // Start game function
  const startGame = () => {
    resetGame();
    setIsStarted(true);
  };
  
  // Reset game
  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(generateFood());
    setDirection('RIGHT');
    setGameOver(false);
    setScore(0);
    setIsPaused(false);
  };
  
  // Determine the rotation angle for the snake head based on direction
  const getHeadRotation = () => {
    switch (direction) {
      case 'UP': return '0deg';
      case 'RIGHT': return '90deg';
      case 'DOWN': return '180deg';
      case 'LEFT': return '270deg';
      default: return '90deg';
    }
  };
  
  // Generate rainbow colors for explosion
  const generateRainbowColors = () => {
    const rainbowColors = [];
    for (let i = 0; i < 30; i++) {
      rainbowColors.push(`hsl(${i * 12}, 100%, 50%)`);
    }
    return rainbowColors;
  };
  
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Snake Game</h2>
      
      <div className="mb-4 flex justify-between w-full">
        <div>Score: {score}</div>
        <div>
          {gameOver ? (
            <span className="text-red-600 font-bold">Game Over!</span>
          ) : !isStarted ? (
            <span className="text-blue-600 font-bold"></span>
          ) : isPaused ? (
            <span className="text-yellow-600 font-bold">Paused</span>
          ) : (
            <span>Playing</span>
          )}
        </div>
      </div>
      
      <div 
        className="border-2 border-gray-400 relative overflow-hidden" 
        style={{ 
          width: GRID_SIZE * CELL_SIZE, 
          height: GRID_SIZE * CELL_SIZE,
          backgroundColor: '#f0f0f0'
        }}
      >
        {/* Start game overlay */}
        {!isStarted && !gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <button
              onClick={startGame}
                 className="px-4 py-2 rounded-md bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-medium transition-colors"
            >
              Start the Snake!
            </button>
          </div>
        )}
        
        {/* Rainbow explosion overlay */}
        {gameOver && (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            {/* Rainbow circles */}
            {generateRainbowColors().map((color, index) => (
              <div 
                key={index}
                className="absolute rounded-full animate-ping opacity-70"
                style={{
                  backgroundColor: color,
                  width: `${(index + 1) * 10}px`,
                  height: `${(index + 1) * 10}px`,
                  animationDuration: `${0.5 + index * 0.1}s`,
                  animationDelay: `${index * 0.03}s`,
                }}
              />
            ))}
            
            {/* Sad face */}
            <div 
              className="absolute bg-yellow-400 rounded-full z-20 flex items-center justify-center"
              style={{ width: '80px', height: '80px' }}
            >
              {/* Left eye */}
              <div className="absolute bg-black rounded-full" 
                   style={{ width: '12px', height: '12px', left: '20px', top: '25px' }}></div>
              
              {/* Right eye */}
              <div className="absolute bg-black rounded-full" 
                   style={{ width: '12px', height: '12px', right: '20px', top: '25px' }}></div>
              
              {/* Sad mouth - using an actual frown shape */}
              <div className="absolute" 
                   style={{ 
                     width: '40px', 
                     height: '20px', 
                     bottom: '15px',
                     left: '20px',
                     border: 'none',
                     borderBottom: '5px solid black',
                     borderRadius: '0 0 20px 20px'
                   }}>
              </div>
            </div>
          </div>
        )}
        
        {/* Render food */}
        <div
          className="absolute bg-red-500 rounded-full"
          style={{
            width: CELL_SIZE - 2,
            height: CELL_SIZE - 2,
            left: food.x * CELL_SIZE,
            top: food.y * CELL_SIZE,
            margin: 1
          }}
        />
        
        {/* Render snake */}
        {snake.map((segment, index) => (
          <div
            key={index}
            className={`absolute ${index === 0 ? 'bg-green-700' : 'bg-green-500'}`}
            style={{
              width: CELL_SIZE - 2,
              height: CELL_SIZE - 2,
              left: segment.x * CELL_SIZE,
              top: segment.y * CELL_SIZE,
              margin: 1,
              borderRadius: index === 0 ? '50% 50% 0 0' : '0'
            }}
          >
            {/* Smiley face on the head */}
            {index === 0 && !gameOver && (
              <div 
                className="w-full h-full relative"
                style={{
                  transform: `rotate(${getHeadRotation()})`,
                  transformOrigin: 'center'
                }}
              >
                {/* Eyes */}
                <div className="absolute bg-white rounded-full" 
                     style={{ width: '5px', height: '5px', left: '4px', top: '4px' }}></div>
                <div className="absolute bg-white rounded-full" 
                     style={{ width: '5px', height: '5px', right: '4px', top: '4px' }}></div>
                
                {/* Pupils */}
                <div className="absolute bg-black rounded-full" 
                     style={{ width: '2px', height: '2px', left: '5px', top: '5px' }}></div>
                <div className="absolute bg-black rounded-full" 
                     style={{ width: '2px', height: '2px', right: '5px', top: '5px' }}></div>
                
                {/* Smile */}
                <div className="absolute bg-white" 
                     style={{ width: '8px', height: '4px', left: '5px', bottom: '3px', borderRadius: '0 0 4px 4px' }}></div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-4 space-x-2">
        {gameOver ? (
          <button
            onClick={startGame}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Play Again
          </button>
        ) : (
          <>
            <button
              onClick={resetGame}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Restart
            </button>
            <button
              onClick={() => setIsPaused(prev => !prev)}
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              {isPaused ? 'Resume' : 'Pause'}
            </button>
          </>
        )}
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p>Use arrow keys to move. Space to pause/resume.</p>
      </div>
    </div>
  );
}