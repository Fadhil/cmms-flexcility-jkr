import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  
  // constructor( ) { }


  public brandPrimary = '#20a8d8';
  public brandSuccess = '#4dbd74';
  public brandInfo = '#63c2de';
  public brandWarning = '#f8cb00';
  public brandDanger = '#f86c6b';

  // dropdown buttons
  public status: { isopen } = { isopen: false };
  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  // convert Hex to RGBA
  public convertHex(hex: string, opacity: number) {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity / 100 + ')';
    return rgba;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  // Doughnut
  public doughnutChartLabels: string[] = ['Not completed', 'Completed'];
  public doughnutChartData: number[] = [45, 688];
  public doughnutChartType = 'doughnut';

  public ppmDoughnutChartLabels: string[] = ['Not completed', 'Completed'];
  public ppmDoughnutChartData: number[] = [45, 688];
  public ppmDoughnutChartType = 'doughnut';

  public scmDoughnutChartLabels: string[] = ['Not completed', 'Completed'];
  public scmDoughnutChartData: number[] = [8, 18];
  public scmDoughnutChartType = 'doughnut';

  public cmDoughnutChartLabels: string[] = ['Not completed', 'Completed'];
  public cmDoughnutChartData: number[] = [25, 300];
  public cmDoughnutChartType = 'doughnut';
  // lineChart1
  public lineChart1Data: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Series A'
    }
  ];

  // ppmbarChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Mechanical', 'Electrical', 'Civil', 'HSK', 'G & Landscape', 'Pest Control', 'Security'];
  public barChartType = 'horizontalBar';
  public barChartTotals = [733,93]
  public barChartPercentage = 93
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [12, 12, 5, 9, 7, 0, 0], label: 'Not Completed'},
    {data: [89, 121, 93, 29, 236, 0, 120], label: 'Completed'}
  ];

    public updatePpmDataDay(){
    this.barChartData =   [
      {data: [1, 0, 4, 1, 6, 1, 0], label: 'Not Completed'},
      {data: [2, 5, 10, 3, 12, 3, 1], label: 'Completed'}
    ];

    this.barChartTotals = [13, 9];
    this.barChartPercentage = 68;

  };

  public updatePpmDataMonth(){
    this.barChartData =   [
      {data: [7, 0, 8, 2, 12, 2, 0], label: 'Not Completed'},
      {data: [13, 9, 15, 5, 24, 8, 8], label: 'Completed'}
    ];

    this.barChartTotals = [26,18];
    this.barChartPercentage = 59;

  };

  public updatePpmDataYear(){
    this.barChartData =   [
      {data: [19, 8, 14, 21, 9, 12, 9], label: 'Not Completed'},
      {data: [40, 25, 50, 53, 32, 39, 11], label: 'Completed'}
    ];

    this.barChartTotals = [121,30];
    this.barChartPercentage = 80;

  };



  // scmBarChart
  public scmBarChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public scmBarChartLabels: string[] = ['Mechanical', 'Electrical', 'Civil', 'HSK', 'G & Landscape', 'Pest Control', 'Security'];
  public scmBarChartType = 'horizontalBar';
  public scmBarChartLegend = true;
  public scmBarChartTotals = [26, 18];
  public scmBarChartPercentage = 59;
  public scmBarChartData: any[] = [
    {data: [0, 1, 4, 2, 1, 0, 0], label: 'Not Completed'},
    {data: [2, 14, 2, 0, 0, 0, 0], label: 'Completed'}
  ];

  public updateScmDataDay(){
    this.scmBarChartData =   [
      {data: [1, 0, 4, 1, 6, 1, 0], label: 'Not Completed'},
      {data: [2, 5, 10, 3, 12, 3, 1], label: 'Completed'}
    ];

    this.scmBarChartTotals = [13, 9];
    this.scmBarChartPercentage = 68;

  };

  public updateScmDataMonth(){
    this.scmBarChartData =   [
      {data: [7, 0, 8, 2, 12, 2, 0], label: 'Not Completed'},
      {data: [13, 9, 15, 5, 24, 8, 8], label: 'Completed'}
    ];

    this.scmBarChartTotals = [26,18];
    this.scmBarChartPercentage = 59;

  };

  public updateScmDataYear(){
    this.scmBarChartData =   [
      {data: [19, 8, 14, 21, 9, 12, 9], label: 'Not Completed'},
      {data: [40, 25, 50, 53, 32, 39, 11], label: 'Completed'}
    ];

    this.scmBarChartTotals = [121,30];
    this.scmBarChartPercentage = 80;

  };

  // cmBarChart
  public cmBarChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public cmBarChartLabels: string[] = ['Mechanical', 'Electrical', 'Civil', 'HSK', 'G & Landscape', 'Pest Control', 'Security'];
  public cmBarChartType = 'horizontalBar';
  public cmBarChartTotals = [113,72];
  public cmBarChartPercentage = 72;
  public cmBarChartLegend = true;

  public cmBarChartData: any[] = [
    {data: [7, 0, 8, 2, 12, 2, 0], label: 'Not Completed'},
    {data: [13, 9, 15, 5, 24, 8, 8], label: 'Completed'}
  ];

    public updateCmDataDay(){
    this.cmBarChartData =   [
      {data: [1, 0, 4, 1, 6, 1, 0], label: 'Not Completed'},
      {data: [2, 5, 10, 3, 12, 3, 1], label: 'Completed'}
    ];

    this.cmBarChartTotals = [13, 9];
    this.cmBarChartPercentage = 68;

  };

  public updateCmDataMonth(){
    this.cmBarChartData =   [
      {data: [7, 0, 8, 2, 12, 2, 0], label: 'Not Completed'},
      {data: [13, 9, 15, 5, 24, 8, 8], label: 'Completed'}
    ];

    this.cmBarChartTotals = [26,18];
    this.cmBarChartPercentage = 59;

  };

  public updateCmDataYear(){
    this.cmBarChartData =   [
      {data: [19, 8, 14, 21, 9, 12, 9], label: 'Not Completed'},
      {data: [40, 25, 50, 53, 32, 39, 11], label: 'Completed'}
    ];

    this.cmBarChartTotals = [121,30];
    this.cmBarChartPercentage = 80;

  };



  // barChart1
  public barChart1Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
      label: 'Series A'
    }
  ];
  public barChart1Labels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
  public barChart1Options: any = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 0.6,
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart1Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.3)',
      borderWidth: 0
    }
  ];
  public barChart1Legend = false;
  public barChart1Type = 'bar';

  // mainChart

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public mainChartElements = 27;
  public mainChartData1: Array<number> = [];
  public mainChartData2: Array<number> = [];
  public mainChartData3: Array<number> = [];

  public mainChartData: Array<any> = [
    {
      data: this.mainChartData1,
      label: 'Current'
    },
    {
      data: this.mainChartData2,
      label: 'Previous'
    },
    {
      data: this.mainChartData3,
      label: 'BEP'
    }
  ];
  /* tslint:disable:max-line-length */
  public mainChartLabels: Array<any> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  /* tslint:enable:max-line-length */
  public mainChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function(value: any) {
            return value.charAt(0);
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public mainChartColours: Array<any> = [
    { // brandInfo
      backgroundColor: this.convertHex(this.brandInfo, 10),
      borderColor: this.brandInfo,
      pointHoverBackgroundColor: '#fff'
    },
    { // brandSuccess
      backgroundColor: 'transparent',
      borderColor: this.brandSuccess,
      pointHoverBackgroundColor: '#fff'
    },
    { // brandDanger
      backgroundColor: 'transparent',
      borderColor: this.brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    }
  ];
  public mainChartLegend = false;
  public mainChartType = 'line';

  // social box charts

  public socialChartData1: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Facebook'
    }
  ];
  public socialChartData2: Array<any> = [
    {
      data: [1, 13, 9, 17, 34, 41, 38],
      label: 'Twitter'
    }
  ];
  public socialChartData3: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'LinkedIn'
    }
  ];
  public socialChartData4: Array<any> = [
    {
      data: [35, 23, 56, 22, 97, 23, 64],
      label: 'Google+'
    }
  ];

  public socialChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public socialChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false,
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public socialChartColours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff'
    }
  ];
  public socialChartLegend = false;
  public socialChartType = 'line';

  // sparkline charts

  public sparklineChartData1: Array<any> = [
    {
      data: [35, 23, 56, 22, 97, 23, 64],
      label: 'Clients'
    }
  ];
  public sparklineChartData2: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Clients'
    }
  ];

  public sparklineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public sparklineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false,
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public sparklineChartDefault: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: '#d1d4d7',
    }
  ];
  public sparklineChartPrimary: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: this.brandPrimary,
    }
  ];
  public sparklineChartInfo: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: this.brandInfo,
    }
  ];
  public sparklineChartDanger: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: this.brandDanger,
    }
  ];
  public sparklineChartWarning: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: this.brandWarning,
    }
  ];
  public sparklineChartSuccess: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: this.brandSuccess,
    }
  ];


  public sparklineChartLegend = false;
  public sparklineChartType = 'line';


  ngOnInit(): void {
    // generate random values for mainChart
    for (let i = 0; i <= this.mainChartElements; i++) {
      this.mainChartData1.push(this.random(50, 200));
      this.mainChartData2.push(this.random(80, 100));
      this.mainChartData3.push(65);
    }
  }
}
