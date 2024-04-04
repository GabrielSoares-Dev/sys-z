import tw from 'tailwind-styled-components'

export const Fieldset = tw.fieldset`
border-4
pt-4
pb-2
flex
flex-col
items-center
gap-8
`

export const Legend = tw.legend`
font-bold
text-center
text-2xl
`

export const Article = tw.article`
flex
flex-row
flex-wrap
w-full
justify-center
items-center
gap-2
`

export const Logo = tw.img`
w-24
h-24
p-2
`

export const Table = tw.table``
export const Tbody = tw.tbody``
export const Tr = tw.tr``

export const Title = tw.th`
capitalize
text-right
font-bold
text-gray-600
p-2
min-w-16
`

export const Description = tw.td`
text-blue-700
font-medium
border-2
flex-1
text-center
p-2
min-w-96
`
