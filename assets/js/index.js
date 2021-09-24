const ctx = document.querySelector('.graf-01');
const ctx2 = document.querySelector('.graf-02');
const ctx3 = document.querySelector('.graf-03');
const ctx4 = document.querySelector('.graf-04');
const ctx5 = document.querySelector('.graf-05');
const ctx6 = document.querySelector('.graf-06');

let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set'],
        datasets: [{
            label: 'Faturamento Líquido',
            data: [12380120.50, 14250235.65, 13250505.85, 15250650.65, 17250908.65, 22250609.60, 25250235.65, 20350665.98, 19250540.35],
            backgroundColor: [
                '#DA291C',

            ],
            borderColor: [
                'rgba(0, 0, 0)',

            ],
            borderWidth: 1,
            maxBarThickness: 30,


        }]
    },
    options: {
        Response:true,
        maintainAspectRatio: false,
       display: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
});

/*Grafico dois --------------------------------------------------------------------------------------*/
let myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set'],
        datasets: [{
            label: 'Faturamento Dupla-face',
            data: [70000.000, 80000.230, 110350.120, 99230.520, 65850.350, 126650.800, 40380.650, 60540.650, 120650.450],
            backgroundColor: [
                '#DA291C'
            ],
            borderColor: [
                'rgba(0, 0, 0)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        Response:true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
});

/*Terceiro grafico --------------------------------------------------------------------------------- */
let myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set'],
        datasets: [{
            label: 'Ticket - Médio',
            data: [10.30, 15.50, 13.20, 25.60, 18.40, 15.90, 22.50, 32.50, 23.80],
            backgroundColor: [
                '#DA291C'
            ],
            borderColor: [
                'rgba(0, 0, 0)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        Response:true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
});

/*Grafico 4 --------------------------------------------------------------------------------------- */

let myChart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['VAREJO', 'INDUSTRIA', 'PORTAL', 'EXPORTAÇÃO'],
        datasets: [{
            label: 'Faturamento MERCADO',
            data: [70000.000, 80000.230, 110350.120, 99230.520],
            backgroundColor: [
                '#DA291C'
            ],
            borderColor: [
                'rgba(0, 0, 0)',
            ],
            borderWidth: 1,
           

        }]
    },
    options: {
        Response:true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
});

/* 5 grafico -----------------------------------------*/
let myChart5 = new Chart(ctx5, {
    type: 'pie',
    data: {
        labels: ['Meta', 'Faturado'],
        datasets: [{
            label: 'Faturamento Dupla-face',
            data: [17120350.56, 19250540.35],
            backgroundColor: [
                '#DA291C',
                '#008000'
            ],
            borderColor: [
                'rgba(0, 0, 0)',
            ],
            borderWidth: 1,
        }]
    },
    options: {
        Response:true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: false
            }
        }
    },
});

/* 6 grafico -----------------------------------------*/
let myChart6 = new Chart(ctx6, {
    type: 'bar',
    data: {
        labels: ['2020', '2021'],
        datasets: [{
            label: 'Faturamento YTD',
            data: [18120350.56, 19250540.35],
            backgroundColor: [
                '#DA291C',
                '#008000'
            ],
            borderColor: [
                'rgba(0, 0, 0)',
            ],
            borderWidth: 1,
        }]
    },
    options: {
        Response:true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: false
            }
        }
    },
});

