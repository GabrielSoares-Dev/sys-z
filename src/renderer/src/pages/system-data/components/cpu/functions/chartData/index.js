export function chartData(usage) {
  return {
    labels: usage,
    datasets: [
      {
        label: null,
        data: usage,
        backgroundColor: ['#0b5bf09e'],
        borderColor: ['#000'],
        borderWidth: 2,
        borderRadius: 10,
        tension: 0,
        fill: true
      }
    ]
  }
}
