

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Monday", "Tuesday", "Wedndesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [{ 
                  data: [1, 2, 3, 3, 5, 3, 3],
                  label: "Mood",
                  borderColor: "#e8c3b9",
                  fill: true
                }, { 
                  data: [5, 4, 3, 4, 2, 1, 4],
                  label: "Risk",
                  borderColor: "#c45850",
                  fill: true
                }
              ]
            },
    options: {
        scales: {
            yAxis: [{
                ticks: { 
                  beginAtZero: true,
                }
            }]
        }
    }
});