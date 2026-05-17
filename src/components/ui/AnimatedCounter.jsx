import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Animated number counter — counts up when it enters the viewport
 * Props: to (number), suffix (string), duration (ms), prefix (string)
 */
export default function AnimatedCounter({ to, suffix = '', prefix = '', duration = 1800 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = parseFloat(to)
    const isDecimal = String(to).includes('.')
    const step = end / (duration / 16)

    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(isDecimal ? parseFloat(start.toFixed(1)) : Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, to, duration])

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
