"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";

import Link from "next/link";
import HomePage from "./HomePage";

interface Ball {
  x: number;
  y: number;
  moveX: number;
  moveY: number;
  radius: number;
}

const BackgroundAni: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!ctx || !canvas) return;

    const balls: Ball[] = [];
    const ballCount = 90;
    const maxDistance = 200;
    let mx = canvas.width / 2;
    let my = canvas.height / 2;

    for (let i = 0; i < ballCount; i++) {
      balls.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        moveX: (Math.random() * 2 - 0.5) * .5,
        moveY: (Math.random() * 2 - 0.5) * .5,
        radius: 1.5,
      });
    }

    const drawMe = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < balls.length; i++) {
        const ball = balls[i];

        for (let j = 0; j < balls.length; j++) {
          const otherBall = balls[j];
          const distance = Math.sqrt(
            (ball.x - otherBall.x) ** 2 + (ball.y - otherBall.y) ** 2
          );

          if (distance < 100) {
            ctx.beginPath();
            ctx.lineWidth = 0.25;
            ctx.moveTo(ball.x, ball.y);
            ctx.lineTo(otherBall.x, otherBall.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${
              1 - distance / maxDistance
            })`;
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
          }
        }
      }

      balls.forEach((ball) => {
        if (ball.x > canvas.width - ball.radius || ball.x < ball.radius)
          ball.moveX = -ball.moveX;
        if (ball.y > canvas.height - ball.radius || ball.y < ball.radius)
          ball.moveY = -ball.moveY;

        ball.x += ball.moveX;
        ball.y += ball.moveY;

        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
      });
    };




  

    const interval = setInterval(drawMe, 1000 / 60);

    return () => clearInterval(interval);
  }, []);

  /// z indez -1, width 100%, particle class or array with random vector direction
  // draw circles using arc, contxt.arc, contxt.cleaerRectangle
  //move 2 and line2 draw a line to another particles position
  //compare distacne with mouse, lower distance, higher stroke width and vice versa
  //
  const [count, setCount] = useState(0);
  return (
    <>
      <canvas
        ref={canvasRef}
        className="animate__animated canvas"
        width={"1500px"}
        height={"1000px"}
      />
    </>
  );
};

export default BackgroundAni;






