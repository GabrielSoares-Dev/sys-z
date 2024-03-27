import { toast, Slide } from 'react-toastify'

export const showToast = (input) => {
  const message = input.message

  const options = {
    position: 'top-center',
    theme: 'colored',
    type: input.type,
    transition: Slide,
    autoClose: 7000
  }
  toast(message, options)
}
