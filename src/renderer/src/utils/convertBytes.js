import { format } from 'bytes'

export const convertBytes = (bytes) => format(bytes, { fixedDecimals: 2, unitSeparator: ' ' })
