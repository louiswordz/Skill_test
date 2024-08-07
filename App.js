
document.addEventListener('DOMContentLoaded', ()=>{    
    const username = 'coalition';
    const password = 'skills-test';
    
    // Combine username and password
    const combined = `${username}:${password}`;
    
    // Encode the combined string using Base64
    const base64Encoded = btoa(combined);
    ;
    


const url = 'https://fedskillstest.coalitiontechnologies.workers.dev';


fetch(url, {
    method: 'GET',
    headers: {
        'Authorization': `Basic ${base64Encoded}`
    }
})
.then(response => response.json())
.then(data =>{
    const ctx = document.getElementById('myChart');
    console.log(data.diagnostic_history)

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["month", "diastolic", "heart_rate", "respiratory_rate",],
        datasets: [{
          label: 'Diagnostic History',
          data: data.diagnostic_history,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
})
.catch(error => console.error('Error:', error));


    })

  