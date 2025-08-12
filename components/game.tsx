'use client';

import { useRef, useEffect, useState } from 'react';

interface Obstacle {
  x: number;
  y: number;
  width: number;
  height: number;
}

const DinoGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let dinoY: number = 150; // Dinosaur's y-position
    let velocity: number = 0; // Jump velocity
    const gravity: number = 0.5; // Gravity effect
    let obstacles: Obstacle[] = [{ x: 600, y: 150, width: 20, height: 20 }]; // Initial obstacle
    let frameCount: number = 0;
    let animationFrameId: number;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !gameOver) {
        velocity = -10; // Jump
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    const gameLoop = () => {
      if (gameOver) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update dino
      velocity += gravity;
      dinoY += velocity;
      if (dinoY > 150) dinoY = 150; // Ground level

      // Draw dino (simple rectangle)
      ctx.fillStyle = 'black';
      ctx.fillRect(50, dinoY, 20, 20);

      // Update and draw obstacles
      obstacles.forEach((obstacle) => {
        obstacle.x -= 2; // Move left
        ctx.fillStyle = 'green';
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);

        // Collision detection
        if (
          50 + 20 > obstacle.x &&
          50 < obstacle.x + obstacle.width &&
          dinoY + 20 > obstacle.y &&
          dinoY < obstacle.y + obstacle.height
        ) {
          setGameOver(true);
        }
      });

      // Spawn new obstacles
      if (frameCount % 100 === 0) {
        obstacles.push({ x: 600, y: 150, width: 20, height: 20 });
      }

      // Remove off-screen obstacles
      obstacles = obstacles.filter((obstacle) => obstacle.x > -20);

      // Update score
      setScore((prev) => prev + 1);

      frameCount++;
      animationFrameId = requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      cancelAnimationFrame(animationFrameId);
    };
  }, [gameOver]);

  const restartGame = () => {
    setScore(0);
    setGameOver(false);
  };

  return (
    <div>
      <h2>Score: {score}</h2>
      <canvas
        ref={canvasRef}
        width={600}
        height={200}
        style={{ border: '1px solid black' }}
      />
      {gameOver && (
        <div>
          <h2>Game Over!</h2>
          <button onClick={restartGame}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default DinoGame;