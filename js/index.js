let ctx = document.getElementById('chart').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Roboto'

let chart = new Chart(ctx, {
 
    type: 'line',
   
    data: {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto" ,"Setembro" , "Outubro","Novembro", "Dezembro" ],
        datasets: [{
            label: "2020",
            backgroundColor: [
                'rgba(0, 0, 0, 0)',
            ],
            borderColor: [
                'rgba(41, 128, 185,1.0)',
            ],
            data: [21.540,33.221,45.745,31.543,52.494,55.567,62.449,19.198,55.187,21.235,81.214,90.383],
        
        },
        {label:"2021",
        backgroundColor: [
            'rgba( 0, 0, 0, 0)',
        ],
        borderColor: [
            'rgba( 165, 42, 42, 1)',
        ],
        data:[31.540,23.021,37.745,23.543,42.594,50.457,60.049,23.098,45.987,28.765,71.854,81.983],

        }
    ]

    },
    
    options: {
        animation : {
            duration : 2000,
            easing : 'easeOutBounce'
        },
        layout : {
            padding : {
                left : 20,
                right : 20,
                top : 20,
                bottom : 20
            }
        },
        legend : {
            display : true,
            position : 'bottom',
        },
        title : {
            display : true,
            text : 'Vendas Mensais',
            fontSize : 20
        },
        tooltips : {
            enabled : true,
            intersect : true,
            backgroundColor : 'rgba(238, 130, 238, 1)'
        },
        scales : {
            xAxes : [{
                gridLines : {
                    display : false,
                    drawBorder : false
                },
                position : 'bottom'
            }],
            yAxes : [{

                gridLines : {
                    display : false,
                    drawBorder : false
                }
            }]
        }
    }
});
let ctx2 = document.getElementById('chart2').getContext('2d');

    let chart2 = new Chart(ctx2, {
    
        type: 'bar',
    
        data: {
            labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto" ,"Setembro" , "Outubro","Novembro", "Dezembro" ],
            datasets: [{
                label: "2020",
                backgroundColor:[
                    'rgba(41, 128, 185,1.0)',
                    'rgba(41, 128, 185,1.0)',
                    'rgba(41, 128, 185,1.0)',
                    'rgba(41, 128, 185,1.0)',
                    'rgba(41, 128, 185,1.0)',
                    'rgba(41, 128, 185,1.0)',
                    'rgba(41, 128, 185,1.0)',
                    'rgba(41, 128, 185,1.0)',
                    'rgba(41, 128, 185,1.0)',
                    'rgba(41, 128, 185,1.0)',
                    'rgba(41, 128, 185,1.0)',
                    'rgba(41, 128, 185,1.0)'
                ],
                borderColor: [
                    'rgba(41, 128, 185,1.0)',
                ],
                data: [21.540,33.221,45.745,31.543,52.494,55.567,62.449,19.198,55.187,21.235,81.214,90.383],
            
            },
            {label:"2021",
            backgroundColor:[
                'rgba( 165, 42, 42, 1)',
                'rgba( 165, 42, 42, 1)',
                'rgba( 165, 42, 42, 1)',
                'rgba( 165, 42, 42, 1)',
                'rgba( 165, 42, 42, 1)',
                'rgba( 165, 42, 42, 1)',
                'rgba( 165, 42, 42, 1)',
                'rgba( 165, 42, 42, 1)',   
                'rgba( 165, 42, 42, 1)', 
                'rgba( 165, 42, 42, 1)',   
                'rgba( 165, 42, 42, 1)',   
                'rgba( 165, 42, 42, 1)',        
            ],
            borderColor: [
                'rgba( 165, 42, 42, 1)',
            ],
            data:[31.540,23.021,37.745,23.543,42.594,50.457,60.049,23.098,45.987,28.765,71.854,81.983],

            }
        ]

        },
        options: {
            animation : {
                duration : 2000,
                easing : 'easeOutBounce'
            },
            layout : {
                padding : {
                    left : 20,
                    right : 20,
                    top : 20,
                    bottom : 20
                }
            },
            legend : {
                display : true,
                position : 'bottom',
            },
            title : {
                display : true,
                text : 'Vendas Mensais',
                fontSize : 20
            },
            tooltips : {
                enabled : true,
                intersect : true,
                backgroundColor : 'rgba(238, 130, 238, 1)'
            },
            scales : {
                xAxes : [{
                    gridLines : {
                        display : false,
                        drawBorder : false
                    },
                    position : 'bottom'
                }],
                yAxes : [{
    
                    gridLines : {
                        display : false,
                        drawBorder : false
                    }
                }]
            }
        }
    });
    let ctx3 = document.getElementById('chart3').getContext('2d');

    let chart3 = new Chart(ctx3, {
    
        type: 'pie',
    
 data: {
        labels: ["Camisa", "Boné", "Shorts", "Calça", "Meias", "Vestidos", "Luvas"],
        datasets: [{
           
            backgroundColor: [
                'rgba(106, 90, 205, 1)',
                'rgba(255, 0, 0, 1 )',
                'rgba(175, 238, 238, 1)',
                'rgba(0, 0, 128, 1)',
                'rgba(0, 206, 209, 1 )',
                'rgba(255, 20, 147, 1 )',
            ],
            borderColor: [
                'rgba(106, 90, 205, 1)',
                'rgba(255, 0, 0, 1 )',
                'rgba(175, 238, 238, 1)',
                'rgba(0, 0, 128, 1)',
                'rgba(0, 206, 209, 1 )',
                'rgba(255, 20, 147, 1 )',
        ],
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },
    // Configuration options go here
    options: {
        animation : {
            duration : 2000,
            easing : 'easeOutBounce'
        },
        layout : {
            padding : {
                left : 20,
                right : 20,
                top : 20,
                bottom : 20
            }
        },
        legend : {
            display : true,
            position : 'bottom'
        },
        title : {
            display : true,
            text : 'Produtos mais vendidos',
            fontSize : 20
        },
        tooltips : {
            enabled : true,
            intersect : true,
            backgroundColor : 'rgba(41, 128, 185,0.8)'
        },
    }
});
let ctx4 = document.getElementById('chart4').getContext('2d');

    let chart4 = new Chart(ctx4, {
    
        type: 'bar',
    
        data: {
            labels: ["Segunda","Terça","Quarta","Quinta","Sexta","Sábado","Domingo" ],
            datasets: [{
                
                backgroundColor:[
                    'rgba(106, 90, 205, 1)',
                    'rgba(255, 0, 0, 1 )',
                    'rgba(175, 238, 238, 1)',
                    'rgba(0, 0, 128, 1)',
                    'rgba(0, 206, 209, 1 )',
                    'rgba(255, 20, 147, 1 )',
                    
                ],
                borderColor: [
                    'rgba(41, 128, 185,1.0)',
                ],
                data: [70,75,60,80,100,95,30],
            
            },
            
        ]

        },
        options: {
            animation : {
                duration : 2000,
                easing : 'easeOutBounce'
            },
            layout : {
                padding : {
                    left : 20,
                    right : 20,
                    top : 20,
                    bottom : 20
                }
            },
            legend : {
                display : false,
                position : 'bottom',
            },
            title : {
                display : true,
                text : '% da Meta diária',
                fontSize : 20
            },
            tooltips : {
                enabled : true,
                intersect : true,
                backgroundColor : 'rgba(238, 130, 238, 1)'
            },
            scales : {
                xAxes : [{
                    gridLines : {
                        display : false,
                        drawBorder : false
                    },
                    position : 'bottom'
                }],
                yAxes : [{
    
                    gridLines : {
                        display : false,
                        drawBorder : false
                    }
                }]
            }
        }
    });