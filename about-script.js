/* =========================================================
   MISSION / VISION / HISTORY
   ========================================================= */

const mission = document.getElementById('our-mission');
const vision = document.getElementById('our-vision');
const history = document.getElementById('our-history');

const mission_btn = document.getElementById('mission-btn');
const vision_btn = document.getElementById('vision-btn');
const history_btn = document.getElementById('history-btn');

const tabIndicator = document.getElementById('tab-indicator');


function mission_clicked() {

    mission.style.display = 'flex';
    vision.style.display = 'none';
    history.style.display = 'none';

    mission_btn.classList.add('active');
    vision_btn.classList.remove('active');
    history_btn.classList.remove('active');

    tabIndicator.style.transform = 'translateX(0%)';
}


function vision_clicked() {

    mission.style.display = 'none';
    vision.style.display = 'flex';
    history.style.display = 'none';

    mission_btn.classList.remove('active');
    vision_btn.classList.add('active');
    history_btn.classList.remove('active');

    tabIndicator.style.transform = 'translateX(100%)';
}


function history_clicked() {

    mission.style.display = 'none';
    vision.style.display = 'none';
    history.style.display = 'flex';

    mission_btn.classList.remove('active');
    vision_btn.classList.remove('active');
    history_btn.classList.add('active');

    tabIndicator.style.transform = 'translateX(200%)';
}


/* =========================================================
   INITIAL STATE
   ========================================================= */

mission.style.display = 'flex';
vision.style.display = 'none';
history.style.display = 'none';


mission_btn.addEventListener('click', mission_clicked);
vision_btn.addEventListener('click', vision_clicked);
history_btn.addEventListener('click', history_clicked);


/* =========================================================
   HAMBURGER MENU
   ========================================================= */

const hamburger = document.getElementById('hamburger');
const centerNav = document.querySelector('.center-nav');

hamburger.addEventListener('click', () => {

    centerNav.classList.toggle('mobile-menu');

    const isOpen = centerNav.classList.contains('mobile-menu');

    hamburger.innerHTML = isOpen
        ? '<i class="ri-close-line"></i>'
        : '<i class="ri-menu-line"></i>';

    hamburger.setAttribute(
        'aria-label',
        isOpen ? 'Close menu' : 'Open menu'
    );

});


/* Close menu when a navigation link is clicked */

const navLinks = document.querySelectorAll('.center-nav a');

navLinks.forEach(link => {

    link.addEventListener('click', () => {

        centerNav.classList.remove('mobile-menu');

        hamburger.innerHTML =
            '<i class="ri-menu-line"></i>';

        hamburger.setAttribute(
            'aria-label',
            'Open menu'
        );

    });

});


/* If screen becomes desktop, close mobile menu */

window.addEventListener('resize', () => {

    if (window.innerWidth > 1100) {

        centerNav.classList.remove('mobile-menu');

        hamburger.innerHTML =
            '<i class="ri-menu-line"></i>';

        hamburger.setAttribute(
            'aria-label',
            'Open menu'
        );
    }

});


/* =========================================================
   STATS ANIMATION
   ========================================================= */

const statCards =
    document.querySelectorAll('.subsection-stats');


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add('show');

            }

        });

    },
    {
        threshold: 0.2
    }
);


statCards.forEach((card) => {

    observer.observe(card);

});


/* =========================================================
   GOOGLE PIE CHART
   ========================================================= */

google.charts.load(
    'current',
    {
        packages: ['corechart']
    }
);

google.charts.setOnLoadCallback(drawChart);


function drawChart() {

    const chartElement =
        document.getElementById('piechart_3d');

    if (!chartElement) return;


    const data =
        google.visualization.arrayToDataTable([

            ['Category', 'Percentage'],

            ['Food Distribution', 45],

            ['Sanitary Pad Distribution', 12],

            ['Stationery Distribution', 12],

            ['Blanket Distribution', 10],

            ['Saree Distribution', 10],

            ['Hydration Relief (Energy Drinks)', 8],

            ['Other Welfare Activities', 3]

        ]);


    const isMobile =
        window.innerWidth <= 600;

    const isTablet =
        window.innerWidth <= 1100 &&
        window.innerWidth > 600;


    const options = {

        title: '',

        pieSliceText: 'percentage',

        legend: {

            position: isMobile
                ? 'bottom'
                : 'right',

            textStyle: {

                fontSize: isMobile
                    ? 10
                    : isTablet
                        ? 11
                        : 14
            }

        },

        chartArea: {

            left: isMobile
                ? 5
                : 20,

            top: 10,

            width: isMobile
                ? '95%'
                : '90%',

            height: isMobile
                ? '65%'
                : '80%'

        },

        width: '100%',

        height: isMobile
            ? 330
            : isTablet
                ? 450
                : 500

    };


    const chart =
        new google.visualization.PieChart(
            chartElement
        );


    chart.draw(data, options);
}


/* Redraw chart when device orientation/size changes */

let resizeTimer;

window.addEventListener('resize', () => {

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {

        if (
            typeof google !== 'undefined' &&
            google.visualization
        ) {

            drawChart();

        }

    }, 250);

});