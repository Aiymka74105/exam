// analytics.js

// Ждём полной загрузки DOM
window.addEventListener('DOMContentLoaded', () => {
  // --- Полярная диаграмма ---
  const polarData = {
    labels: [
      'Тоники',
      'Эссенции',
      'Кремы',
      'Маски',
      'Солнцезащитные средства'
    ],
    datasets: [{
      data: [28, 22, 35, 25, 18],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(255, 159, 64, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(255, 205, 86, 0.7)'
      ]
    }]
  };

  const polarOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 12,
          padding: 10
        }
      },
      title: {
        display: true,
        text: 'Категории продукции',
        color: '#264143',
        font: {
          size: 18,
          family: 'Georgia',
          weight: 'bold'
        }
      }
    },
    scales: {
      r: {
        grid: {
          color: '#ddd'
        },
        angleLines: {
          color: '#ccc'
        },
        ticks: {
          stepSize: 5,
          color: '#888'
        }
      }
    }
  };

  const polarCtx = document.getElementById('polarChart');
  if (polarCtx) {
    // Создаем диаграмму
    const polarChart = new Chart(polarCtx, {
      type: 'polarArea',
      data: polarData,
      options: polarOptions
    });
    // Вставляем HTML-легенду в div#polarLegend
    const legendContainer = document.getElementById('polarLegend');
    if (legendContainer) {
      legendContainer.innerHTML = polarChart.generateLegend();
    }
  }

  // --- Столбчатая диаграмма ---
  const barData = {
    labels: ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
    datasets: [{
      label: 'Количество заказов',
      data: [40, 55, 60, 48, 72, 90, 50],
      backgroundColor: 'rgba(54, 162, 235, 0.7)'
    }]
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Объём продаж по дням недели',
        color: '#264143',
        font: {
          size: 18,
          family: 'Georgia',
          weight: 'bold'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        titleColor: '#fff',
        bodyColor: '#ddd',
        padding: 10,
        callbacks: {
          label: context => `${context.dataset.label}: ${context.parsed.y}`
        }
      }
    },
    scales: {
      x: {
        ticks: { color: '#264143' }
      },
      y: {
        beginAtZero: true,
        ticks: { color: '#264143' },
        title: {
          display: true,
          text: 'Заказы',
          color: '#264143',
          font: {
            size: 14,
            family: 'Georgia'
          }
        }
      }
    }
  };

  const barCtx = document.getElementById('barChart');
  if (barCtx) {
    new Chart(barCtx, {
      type: 'bar',
      data: barData,
      options: barOptions
    });
  }
});
