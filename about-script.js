const mission=document.getElementById('our-mission')
const vision = document.getElementById('our-vision')
const history= document.getElementById('our-history')
const mission_btn=document.getElementById('mission-btn')
const vision_btn=document.getElementById('vision-btn')
const history_btn=document.getElementById('history-btn')

function mission_clicked()
{
    vision.style.display='none'
    mission.style.display='flex'
    history.style.display='none'
    mission_btn.classList.add('active');
    vision_btn.classList.remove('active');
    history_btn.classList.remove('active');
    document.getElementById('tab-indicator').style.transform =
    'translateX(0%)';
}

function vision_clicked()
{
    vision.style.display='flex'
    mission.style.display='none'
    history.style.display='none'
    vision_btn.classList.add('active');
    mission_btn.classList.remove('active');
    history_btn.classList.remove('active');
    document.getElementById('tab-indicator').style.transform =
    'translateX(100%)';
    
}

function history_clicked()
{
    vision.style.display='none'
    mission.style.display='none'
    history.style.display='flex'
    history_btn.classList.add('active');
    mission_btn.classList.remove('active');
    vision_btn.classList.remove('active');
    document.getElementById('tab-indicator').style.transform =
    'translateX(200%)';
}
const statCards = document.querySelectorAll(".subsection-stats");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });
}, {
    threshold: 0.3
});

statCards.forEach((card) => {
    observer.observe(card);
});

mission_btn.addEventListener('click',mission_clicked)
vision_btn.addEventListener('click',vision_clicked)
history_btn.addEventListener('click',history_clicked)

//Chart

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

      var data = google.visualization.arrayToDataTable([
        ['Category', 'Percentage'],

        ['Food Distribution',45],
        ['Sanitary Pad Distribution',12],
        ['Stationery Distribution',12],
        ['Blanket Distribution',10],
        ['Saree Distribution',10],
        ['Hydration Relief (Energy Drinks)',8],
        ['Other Welfare Activities',3]
      ]);

      var options = {
        title: '',


        pieSliceText: 'percentage',

        titleTextStyle: {
          color: '#3b0a45',
          fontSize: 24,
          bold: true
        
        },

        legend: {
          position: 'right',
          textStyle: {
            fontSize: 14
          }
        },

        chartArea:{
          width:'90%',
          height:'80%'
        }
      };

      var chart = new google.visualization.PieChart(
        document.getElementById('piechart_3d')
      );

      chart.draw(data, options);
    }