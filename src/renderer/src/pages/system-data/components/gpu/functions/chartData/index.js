export function chartData(usage, color) {
  return {
    labels: usage,
    datasets: [
      {
        label: null,
        data: usage,
        backgroundColor: color ? [color] : ['#38ff919e'],
        borderColor: ['#000'],
        borderWidth: 2,
        borderRadius: 10,
        tension: 0,
        fill: true
      }
    ]
  }
}
