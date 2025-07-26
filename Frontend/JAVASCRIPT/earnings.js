document.addEventListener('DOMContentLoaded', () => {
  // Bar Chart for Monthly Earnings
  const ctxBar = document.getElementById('monthlyEarningsChart').getContext('2d');
  new Chart(ctxBar, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Earnings (₹)',
        data: [30000, 45000, 50000, 40000, 55000, 70000],
        backgroundColor: '#03247e',
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Pie Chart for Cost Breakdown
  const ctxPie = document.getElementById('costBreakdownChart').getContext('2d');
  new Chart(ctxPie, {
    type: 'pie',
    data: {
      labels: ['Profit', 'Delivery Costs', 'Returns'],
      datasets: [{
        data: [85, 10, 5],
        backgroundColor: ['#4caf50', '#f85402', '#ff9800']
      }]
    },
    options: {
      responsive: true
    }
  });
});
