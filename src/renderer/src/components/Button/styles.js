import tw from 'tailwind-styled-components'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export const Button = tw.button`
flex
w-full
h-[43px]
justify-center
items-center
gap-2.5
p-2.5;
rounded
hover:opacity-90
bg-blue-700
text-white
font-semibold
duration-300
 `

export const Loading = tw(AiOutlineLoading3Quarters)`
animate-spin
fill-white
text-base
`
