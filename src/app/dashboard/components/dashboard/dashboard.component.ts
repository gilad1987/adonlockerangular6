import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user/user.service';
import Chart from 'chart.js';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {

    public sumTransactions: number = 0;
    public sumTransactionsInNis: number = 0;

    constructor(
        private userService: UserService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {

        setTimeout(() => {
            const canvas1  = <HTMLCanvasElement>document.getElementById('chart1');
            var ctx = canvas1.getContext('2d');
            ctx.canvas.width = 1000;
            ctx.canvas.height = 300;
            var cfg = {
                type: 'bar',
                data: {
                    labels: [
                        {
                            'y': 1,
                            'paid': 16500,
                            'x': '2017-07-27'
                        },
                        {
                            'y': 17,
                            'paid': 288000,
                            'x': '2017-07-28'
                        },
                        {
                            'y': 67,
                            'paid': 1102500,
                            'x': '2017-07-29'
                        },
                        {
                            'y': 19,
                            'paid': 310500,
                            'x': '2017-07-30'
                        },
                        {
                            'y': 26,
                            'paid': 421500,
                            'x': '2017-07-31'
                        },
                        {
                            'y': 256,
                            'paid': 4151000,
                            'x': '2017-08-01'
                        },
                        {
                            'y': 477,
                            'paid': 7494000,
                            'x': '2017-08-02'
                        },
                        {
                            'y': 116,
                            'paid': 1834000,
                            'x': '2017-08-03'
                        },
                        {
                            'y': 425,
                            'paid': 6784500,
                            'x': '2017-08-04'
                        },
                        {
                            'y': 175,
                            'paid': 2876500,
                            'x': '2017-08-05'
                        },
                        {
                            'y': 79,
                            'paid': 1285000,
                            'x': '2017-08-06'
                        },
                        {
                            'y': 49,
                            'paid': 787500,
                            'x': '2017-08-07'
                        },
                        {
                            'y': 21,
                            'paid': 346000,
                            'x': '2017-08-08'
                        },
                        {
                            'y': 15,
                            'paid': 233000,
                            'x': '2017-08-09'
                        },
                        {
                            'y': 6,
                            'paid': 98000,
                            'x': '2017-08-10'
                        },
                        {
                            'y': 12,
                            'paid': 194000,
                            'x': '2017-08-11'
                        },
                        {
                            'y': 22,
                            'paid': 351500,
                            'x': '2017-08-12'
                        },
                        {
                            'y': 18,
                            'paid': 271000,
                            'x': '2017-08-13'
                        },
                        {
                            'y': 34,
                            'paid': 566500,
                            'x': '2017-08-14'
                        },
                        {
                            'y': 7,
                            'paid': 113000,
                            'x': '2017-08-15'
                        },
                        {
                            'y': 1,
                            'paid': 15000,
                            'x': '2017-08-16'
                        },
                        {
                            'y': 1,
                            'paid': 16500,
                            'x': '2017-08-17'
                        },
                        {
                            'y': 5,
                            'paid': 79000,
                            'x': '2017-08-18'
                        },
                        {
                            'y': 7,
                            'paid': 108000,
                            'x': '2017-08-19'
                        },
                        {
                            'y': 4,
                            'paid': 62000,
                            'x': '2017-08-20'
                        },
                        {
                            'y': 1,
                            'paid': 15000,
                            'x': '2017-08-23'
                        },
                        {
                            'y': 2,
                            'paid': 28000,
                            'x': '2017-08-26'
                        },
                        {
                            'y': 1,
                            'paid': 15000,
                            'x': '2017-08-27'
                        },
                        {
                            'y': 3,
                            'paid': 45000,
                            'x': '2017-08-28'
                        },
                        {
                            'y': 5,
                            'paid': 79500,
                            'x': '2017-08-29'
                        },
                        {
                            'y': 1,
                            'paid': 17500,
                            'x': '2017-08-31'
                        },
                        {
                            'y': 1,
                            'paid': 15000,
                            'x': '2017-09-02'
                        },
                        {
                            'y': 3,
                            'paid': 47500,
                            'x': '2017-09-03'
                        },
                        {
                            'y': 1,
                            'paid': 16500,
                            'x': '2017-09-14'
                        },
                        {
                            'y': 1,
                            'paid': 15000,
                            'x': '2017-09-15'
                        },
                        {
                            'y': 1,
                            'paid': 16000,
                            'x': '2017-09-16'
                        },
                        {
                            'y': 1,
                            'paid': 15000,
                            'x': '2017-09-17'
                        },
                        {
                            'y': 3,
                            'paid': 47500,
                            'x': '2017-09-18'
                        },
                        {
                            'y': 1,
                            'paid': 15000,
                            'x': '2017-09-20'
                        },
                        {
                            'y': 1,
                            'paid': 14000,
                            'x': '2017-09-22'
                        },
                        {
                            'y': 3,
                            'paid': 49500,
                            'x': '2017-09-23'
                        },
                        {
                            'y': 3,
                            'paid': 46500,
                            'x': '2017-09-24'
                        },
                        {
                            'y': 3,
                            'paid': 47500,
                            'x': '2017-09-30'
                        },
                        {
                            'y': 1,
                            'paid': 16500,
                            'x': '2017-10-01'
                        },
                        {
                            'y': 2,
                            'paid': 30000,
                            'x': '2017-10-02'
                        },
                        {
                            'y': 1,
                            'paid': 15000,
                            'x': '2017-10-09'
                        },
                        {
                            'y': 20,
                            'paid': 448000,
                            'x': '2017-10-13'
                        },
                        {
                            'y': 3,
                            'paid': 51400,
                            'x': '2017-10-14'
                        },
                        {
                            'y': 2,
                            'paid': 29000,
                            'x': '2017-10-16'
                        },
                        {
                            'y': 1,
                            'paid': 15000,
                            'x': '2017-10-20'
                        },
                        {
                            'y': 1,
                            'paid': 15000,
                            'x': '2017-10-21'
                        },
                        {
                            'y': 1,
                            'paid': 17500,
                            'x': '2017-10-26'
                        },
                        {
                            'y': 1,
                            'paid': 14000,
                            'x': '2017-10-27'
                        },
                        {
                            'y': 2,
                            'paid': 31500,
                            'x': '2017-10-28'
                        },
                        {
                            'y': 4,
                            'paid': 68000,
                            'x': '2017-10-30'
                        },
                        {
                            'y': 3,
                            'paid': 49500,
                            'x': '2017-10-31'
                        },
                        {
                            'y': 2,
                            'paid': 34000,
                            'x': '2017-11-03'
                        },
                        {
                            'y': 1,
                            'paid': 16500,
                            'x': '2017-11-25'
                        },
                        {
                            'y': 1,
                            'paid': 16000,
                            'x': '2017-11-27'
                        },
                        {
                            'y': 1,
                            'paid': 16500,
                            'x': '2017-12-03'
                        },
                        {
                            'y': 12,
                            'paid': 214500,
                            'x': '2017-12-10'
                        },
                        {
                            'y': 6,
                            'paid': 108000,
                            'x': '2017-12-11'
                        },
                        {
                            'y': 2,
                            'paid': 36000,
                            'x': '2017-12-12'
                        },
                        {
                            'y': 2,
                            'paid': 36000,
                            'x': '2017-12-13'
                        },
                        {
                            'y': 1,
                            'paid': 14000,
                            'x': '2017-12-24'
                        },
                        {
                            'y': 2,
                            'paid': 36000,
                            'x': '2018-01-01'
                        },
                        {
                            'y': 1,
                            'paid': 14000,
                            'x': '2018-01-19'
                        },
                        {
                            'y': 1,
                            'paid': 16500,
                            'x': '2018-03-10'
                        },
                        {
                            'y': 3,
                            'paid': 49500,
                            'x': '2018-03-17'
                        },
                        {
                            'y': 1,
                            'paid': 16500,
                            'x': '2018-03-18'
                        }
                    ],
                    datasets: [{
                        label: '',
                        data: [
                            {
                                'y': 1,
                                'paid': 16500,
                                'x': '2017-07-27'
                            },
                            {
                                'y': 17,
                                'paid': 288000,
                                'x': '2017-07-28'
                            },
                            {
                                'y': 67,
                                'paid': 1102500,
                                'x': '2017-07-29'
                            },
                            {
                                'y': 19,
                                'paid': 310500,
                                'x': '2017-07-30'
                            },
                            {
                                'y': 26,
                                'paid': 421500,
                                'x': '2017-07-31'
                            },
                            {
                                'y': 256,
                                'paid': 4151000,
                                'x': '2017-08-01'
                            },
                            {
                                'y': 477,
                                'paid': 7494000,
                                'x': '2017-08-02'
                            },
                            {
                                'y': 116,
                                'paid': 1834000,
                                'x': '2017-08-03'
                            },
                            {
                                'y': 425,
                                'paid': 6784500,
                                'x': '2017-08-04'
                            },
                            {
                                'y': 175,
                                'paid': 2876500,
                                'x': '2017-08-05'
                            },
                            {
                                'y': 79,
                                'paid': 1285000,
                                'x': '2017-08-06'
                            },
                            {
                                'y': 49,
                                'paid': 787500,
                                'x': '2017-08-07'
                            },
                            {
                                'y': 21,
                                'paid': 346000,
                                'x': '2017-08-08'
                            },
                            {
                                'y': 15,
                                'paid': 233000,
                                'x': '2017-08-09'
                            },
                            {
                                'y': 6,
                                'paid': 98000,
                                'x': '2017-08-10'
                            },
                            {
                                'y': 12,
                                'paid': 194000,
                                'x': '2017-08-11'
                            },
                            {
                                'y': 22,
                                'paid': 351500,
                                'x': '2017-08-12'
                            },
                            {
                                'y': 18,
                                'paid': 271000,
                                'x': '2017-08-13'
                            },
                            {
                                'y': 34,
                                'paid': 566500,
                                'x': '2017-08-14'
                            },
                            {
                                'y': 7,
                                'paid': 113000,
                                'x': '2017-08-15'
                            },
                            {
                                'y': 1,
                                'paid': 15000,
                                'x': '2017-08-16'
                            },
                            {
                                'y': 1,
                                'paid': 16500,
                                'x': '2017-08-17'
                            },
                            {
                                'y': 5,
                                'paid': 79000,
                                'x': '2017-08-18'
                            },
                            {
                                'y': 7,
                                'paid': 108000,
                                'x': '2017-08-19'
                            },
                            {
                                'y': 4,
                                'paid': 62000,
                                'x': '2017-08-20'
                            },
                            {
                                'y': 1,
                                'paid': 15000,
                                'x': '2017-08-23'
                            },
                            {
                                'y': 2,
                                'paid': 28000,
                                'x': '2017-08-26'
                            },
                            {
                                'y': 1,
                                'paid': 15000,
                                'x': '2017-08-27'
                            },
                            {
                                'y': 3,
                                'paid': 45000,
                                'x': '2017-08-28'
                            },
                            {
                                'y': 5,
                                'paid': 79500,
                                'x': '2017-08-29'
                            },
                            {
                                'y': 1,
                                'paid': 17500,
                                'x': '2017-08-31'
                            },
                            {
                                'y': 1,
                                'paid': 15000,
                                'x': '2017-09-02'
                            },
                            {
                                'y': 3,
                                'paid': 47500,
                                'x': '2017-09-03'
                            },
                            {
                                'y': 1,
                                'paid': 16500,
                                'x': '2017-09-14'
                            },
                            {
                                'y': 1,
                                'paid': 15000,
                                'x': '2017-09-15'
                            },
                            {
                                'y': 1,
                                'paid': 16000,
                                'x': '2017-09-16'
                            },
                            {
                                'y': 1,
                                'paid': 15000,
                                'x': '2017-09-17'
                            },
                            {
                                'y': 3,
                                'paid': 47500,
                                'x': '2017-09-18'
                            },
                            {
                                'y': 1,
                                'paid': 15000,
                                'x': '2017-09-20'
                            },
                            {
                                'y': 1,
                                'paid': 14000,
                                'x': '2017-09-22'
                            },
                            {
                                'y': 3,
                                'paid': 49500,
                                'x': '2017-09-23'
                            },
                            {
                                'y': 3,
                                'paid': 46500,
                                'x': '2017-09-24'
                            },
                            {
                                'y': 3,
                                'paid': 47500,
                                'x': '2017-09-30'
                            },
                            {
                                'y': 1,
                                'paid': 16500,
                                'x': '2017-10-01'
                            },
                            {
                                'y': 2,
                                'paid': 30000,
                                'x': '2017-10-02'
                            },
                            {
                                'y': 1,
                                'paid': 15000,
                                'x': '2017-10-09'
                            },
                            {
                                'y': 20,
                                'paid': 448000,
                                'x': '2017-10-13'
                            },
                            {
                                'y': 3,
                                'paid': 51400,
                                'x': '2017-10-14'
                            },
                            {
                                'y': 2,
                                'paid': 29000,
                                'x': '2017-10-16'
                            },
                            {
                                'y': 1,
                                'paid': 15000,
                                'x': '2017-10-20'
                            },
                            {
                                'y': 1,
                                'paid': 15000,
                                'x': '2017-10-21'
                            },
                            {
                                'y': 1,
                                'paid': 17500,
                                'x': '2017-10-26'
                            },
                            {
                                'y': 1,
                                'paid': 14000,
                                'x': '2017-10-27'
                            },
                            {
                                'y': 2,
                                'paid': 31500,
                                'x': '2017-10-28'
                            },
                            {
                                'y': 4,
                                'paid': 68000,
                                'x': '2017-10-30'
                            },
                            {
                                'y': 3,
                                'paid': 49500,
                                'x': '2017-10-31'
                            },
                            {
                                'y': 2,
                                'paid': 34000,
                                'x': '2017-11-03'
                            },
                            {
                                'y': 1,
                                'paid': 16500,
                                'x': '2017-11-25'
                            },
                            {
                                'y': 1,
                                'paid': 16000,
                                'x': '2017-11-27'
                            },
                            {
                                'y': 1,
                                'paid': 16500,
                                'x': '2017-12-03'
                            },
                            {
                                'y': 12,
                                'paid': 214500,
                                'x': '2017-12-10'
                            },
                            {
                                'y': 6,
                                'paid': 108000,
                                'x': '2017-12-11'
                            },
                            {
                                'y': 2,
                                'paid': 36000,
                                'x': '2017-12-12'
                            },
                            {
                                'y': 2,
                                'paid': 36000,
                                'x': '2017-12-13'
                            },
                            {
                                'y': 1,
                                'paid': 14000,
                                'x': '2017-12-24'
                            },
                            {
                                'y': 2,
                                'paid': 36000,
                                'x': '2018-01-01'
                            },
                            {
                                'y': 1,
                                'paid': 14000,
                                'x': '2018-01-19'
                            },
                            {
                                'y': 1,
                                'paid': 16500,
                                'x': '2018-03-10'
                            },
                            {
                                'y': 3,
                                'paid': 49500,
                                'x': '2018-03-17'
                            },
                            {
                                'y': 1,
                                'paid': 16500,
                                'x': '2018-03-18'
                            }
                        ],
                        type: 'line',
                        pointRadius: 3,
                        fill: true,
                        lineTension: 0,
                        borderWidth: 2,
                        borderColor: '#4bc0c0'
                    }]
                },
                options: {
                    scales: {
                        xAxes: [{
                            type: 'time',
                            time: {
                                displayFormats: {
                                    quarter: 'YYYY-MM-DD'
                                }
                            },
                            distribution: 'series',
                            ticks: {
                                source: 'labels'
                            },

                        }],
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'כמות'
                            }
                        }]
                    }
                }
            };
            var chart = new Chart(ctx, cfg);
            this.sumTransactions = cfg.data.labels.reduce((sum, item) => sum + item.y, 0);
            this.sumTransactionsInNis = cfg.data.labels
                .reduce((sum, item) => sum + (item.paid / 100), 0);



            const canvas  = <HTMLCanvasElement>document.getElementById('chart2');
            var ctx2 = canvas.getContext('2d');
            const data = {
                datasets: [{
                    // all 6868
                    data: [295, 4520, 2067],
                    'backgroundColor': ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)']
                }],

                // These labels appear in the legend and in the tooltips when hovering different arcs
                labels: [
                    'תקול',
                    'בשימוש',
                    'פנוי',
                ]
            };
            var myDoughnutChart = new Chart(ctx2, {
                type: 'doughnut',
                data: data,
                options: {}
            });
        }, 0);

    }


}
