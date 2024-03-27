import tw from 'tailwind-styled-components'

export const Container = tw.section`
flex 
border 
shadow-sm
rounded-xl
cursor-pointer
hover:shadow-2xl
hover:opacity-80
duration-500
p-16

${({ background }) => background}

`

export const Information = tw.h1`
text-3xl 
font-bold 
text-white
`
