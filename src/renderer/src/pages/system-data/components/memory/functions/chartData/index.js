export function chartData(labels, data, colors) {
  return {
    labels: labels ? labels : ['Memory Used', 'Memory Available'],
    datasets: [
      {
        label: null,
        data: data,
        backgroundColor: colors ? colors : ['#ff80009e', '#b931009e'],
        borderColor: ['#000'],
        borderWidth: 1
      }
    ]
  }
}
