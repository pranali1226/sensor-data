const ctxChlorine = document.getElementById('chlorineChart').getContext('2d');
const ctxSilverIon = document.getElementById('silverIonChart').getContext('2d');
const ctxEcoli = document.getElementById('ecoliChart').getContext('2d');

// Sample data
const data = {
  labels: ['01 Sep', '02 Sep', '03 Sep', '04 Sep', '05 Sep', '06 Sep', '07 Sep'],
  chlorineValues: [0.5, 1.2, 2.3, 3.1, 2.8, 1.7, 0.9],
  silverIonValues: [15, 30, 45, 60, 50, 40, 20],
  ecoliValues: [150, 300, 450, 600, 750, 900, 1050]
};

// Chlorine Chart
const chlorineChart = new Chart(ctxChlorine, {
  type: 'line',
  data: {
    labels: data.labels,
    datasets: [{
      label: 'Chlorine Level (ppm)',
      data: data.chlorineValues,
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 2,
      fill: true
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Chlorine Level (ppm)',
        },
        beginAtZero: true
      }
    }
  }
});

// Silver Ion Chart
const silverIonChart = new Chart(ctxSilverIon, {
  type: 'line',
  data: {
    labels: data.labels,
    datasets: [{
      label: 'Silver Ion Level (µg/L)',
      data: data.silverIonValues,
      borderColor: 'rgba(153, 102, 255, 1)',
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderWidth: 2,
      fill: true
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Silver Ion Level (µg/L)',
        },
        beginAtZero: true
      }
    }
  }
});

// E. coli Chart
const ecoliChart = new Chart(ctxEcoli, {
  type: 'line',
  data: {
    labels: data.labels,
    datasets: [{
      label: 'E. coli Level (CFU/mL)',
      data: data.ecoliValues,
      borderColor: 'rgba(255, 159, 64, 1)',
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderWidth: 2,
      fill: true
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'E. coli Level (CFU/mL)',
        },
        beginAtZero: true
      }
    }
  }
});