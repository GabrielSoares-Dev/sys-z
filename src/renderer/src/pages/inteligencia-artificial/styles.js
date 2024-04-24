import tw from "tailwind-styled-components";

export const Title = tw.h1`
font-bold
text-3xl
text-center
m-4

[&>strong]:text-blue-500
[&>strong]:text-4xl
[&>strong]:italic
`

export const Main = tw.form`
my-0
mx-auto
w-[80%]
h-[80%]
rounded-xl
flex
flex-col
gap-4
`

export const Container = tw.section`
w-full
h-full
flex
gap-4
`

export const Message = tw.div`
relative
text-base
max-w-[50%]
break-words
p-2
rounded-tl-md
rounded-tr-md
rounded-bl-none
rounded-br-md
bg-blue-500
text-white
self-start
`

export const DateMsg = tw.span`
absolute
-bottom-4
text-xs
w-[400%]
text-left
left-0
font-bold
text-black
italic
`

export const Input = tw.input`
bg-slate-200
rounded-2xl
outline-0
w-full
py-1
px-4
text-lg
cursor-pointer 
focus:cursor-text 
focus:outline-2
focus:outline-slate-400
`

export const Button = tw.button`
text-lg
font-bold
px-6
py-2
rounded-xl
text-white
bg-green-600
hover:bg-green-700
border: none;
outline: none;
margin-left: 0.3rem;
height: 100%;
cursor: pointer;
`