import amdLogo from './images/amd.svg'
import intelLogo from './images/intel.svg'

export function Logo(name) {
  const type = name.toLowerCase()
  const includes = type.includes('amd') || type.includes('ryzen') || type.includes('radeon')

  return includes ? amdLogo : intelLogo
}
