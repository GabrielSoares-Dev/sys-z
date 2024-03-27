import { useNotificationProvider } from './hooks'

export function NotificationProvider({ children }) {
  const { audioRef } = useNotificationProvider()
  return (
    <>
      <audio ref={audioRef} src="https://sys-z.s3.us-east-2.amazonaws.com/sirene.mp3"></audio>
      {children}
    </>
  )
}
