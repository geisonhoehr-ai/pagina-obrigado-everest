import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const CONFETTI_COLORS = [
  '#ef4444',
  '#f97316',
  '#eab308',
  '#84cc16',
  '#22c55e',
  '#14b8a6',
  '#06b6d4',
  '#3b82f6',
  '#8b5cf6',
  '#d946ef',
  '#ec4899',
]
const CONFETTI_COUNT = 150

interface ConfettiPiece {
  id: number
  style: React.CSSProperties
  className: string
}

const createConfetti = (): ConfettiPiece[] => {
  return Array.from({ length: CONFETTI_COUNT }).map((_, i) => {
    const size = Math.random() * 10 + 5
    const x = Math.random() * 100
    const delay = Math.random() * 3
    const duration = Math.random() * 3 + 3
    const rotation = Math.random() * 360
    const color =
      CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)]

    return {
      id: i,
      style: {
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}vw`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        transform: `rotate(${rotation}deg)`,
        backgroundColor: color,
      },
      className: 'absolute top-[-20px] rounded-full animate-fall',
    }
  })
}

export const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    setPieces(createConfetti())
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-50">
      {pieces.map(({ id, style, className }) => (
        <div key={id} style={style} className={cn(className)} />
      ))}
      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(-20px) rotate(0);
              opacity: 1;
            }
            100% {
              transform: translateY(105vh) rotate(720deg);
              opacity: 0;
            }
          }
          .animate-fall {
            animation-name: fall;
            animation-timing-function: linear;
            animation-fill-mode: forwards;
          }
        `}
      </style>
    </div>
  )
}
