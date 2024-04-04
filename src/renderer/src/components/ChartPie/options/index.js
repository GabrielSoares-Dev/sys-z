export function options(name) {
  return {
    maintainAspectRatio: false,
    responsive: true,
    aspectRatio: 1,
    indexAxis: 'x',
    plugins: {
      legend: {
        display: true
      },
      title: {
        display: name !== '' || name !== undefined ? true : false,
        text: (name !== '' || name !== undefined) && name,
        color: '#000',
        font: {
          size: 16
        },
        padding: {
          top: 10,
          bottom: 30
        }
      }
    }
  }
}
