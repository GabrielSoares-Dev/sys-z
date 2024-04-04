import amdLogo from './images/amd.svg'
import intelLogo from './images/intel.svg'
import nvidiaLogo from './images/nvidia.svg'

export function Logo(name) {
  const type = name.toLowerCase()
  let logo = ''

  if (type.includes('nvidia') || type.includes('geforce')) {
    logo = nvidiaLogo
  } else if (type.includes('amd') || type.includes('ryzen') || type.includes('radeon')) {
    logo = amdLogo
  } else {
    logo = intelLogo
  }

  return logo
}
