import { useEffect, useState } from 'react'

function useDebounce<Type>(value: Type, delay?: number): Type {
  const [debouncedValue, setDebouncedValue] = useState<Type>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
