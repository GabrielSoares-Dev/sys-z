export function Spinner({ size, color }) {
  return (
    <div
      class={`inline-block w-${size || 8} h-${size || 8} animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] ${color || 'text-blue-700'} motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status`}
    ></div>
  )
}
