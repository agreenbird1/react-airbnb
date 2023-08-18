import { useEffect, useState, useRef } from 'react'

const useClickOutside = () => {
  const [isOpen, setIsOpen] = useState(false)
  const domRef = useRef(null)
  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])
  const handleClickOutside = (e) => {
    if (domRef.current && !domRef.current.contains(e.target)) {
        setIsOpen(false)
    }
  }
  return {
    domRef,
    isOpen,
    setIsOpen,
  }
}
export default useClickOutside
