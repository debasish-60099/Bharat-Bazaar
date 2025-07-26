document.addEventListener('DOMContentLoaded', () => {
  // Visitors Trend (Line Chart)
  const visitorsCtx = document.getElementById('visitorsChart').getContext('2d');
  new Chart(visitorsCtx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Visitors',
        data: [5000, 8000, 12000, 9000, 15000, 18000],
        borderColor: '#03247e',
        backgroundColor: 'rgba(3, 36, 126, 0.2)',
        fill: true,
        tension: 0.3
      }]
    },
    options: { responsive: true }
  });

  // Orders Trend (Bar Chart)
  const ordersCtx = document.getElementById('ordersChart').getContext('2d');
  new Chart(ordersCtx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Orders',
        data: [300, 450, 500, 420, 600, 700],
        backgroundColor: '#f85402',
        borderRadius: 6
      }]
    },
    options: { responsive: true, scales: { y: { beginAtZero: true } } }
  });

  // Traffic Sources (Pie Chart)
  const trafficCtx = document.getElementById('trafficChart').getContext('2d');
  new Chart(trafficCtx, {
    type: 'pie',
    data: {
      labels: ['Direct', 'Social Media', 'Ads', 'Referrals'],
      datasets: [{
        data: [40, 25, 20, 15],
        backgroundColor: ['#03247e', '#f85402', '#4caf50', '#ff9800']
      }]
    },
    options: { responsive: true }
  });
});
