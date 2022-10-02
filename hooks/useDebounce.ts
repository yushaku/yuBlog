import { useEffect, useRef, useState } from 'react'

function useDebounce<Type>(value: Type, delay?: number): Type {
  const [debouncedValue, setDebouncedValue] = useState<Type>(value)
  const ref = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    ref.current = setTimeout(() => {
      setDebouncedValue(value)
    }, delay || 500)

    return () => {
      if (ref.current) clearTimeout(ref.current)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
