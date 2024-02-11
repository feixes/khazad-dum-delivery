import { useEffect, useState } from "react"

export const useOpenModal = (modal) => {

  const [isOpen, setIsOpen] = useState(false)


  const handleOpen = () => {
    setIsOpen(prevState => !prevState)
  }


  useEffect(() => {

    const closeMenu = (event) => {
      if (!modal.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.body.addEventListener('click', closeMenu)

    return () => document.body.removeEventListener('click', closeMenu)
  }, [])


  return {
    isOpen,
    handleOpen
  }
}
