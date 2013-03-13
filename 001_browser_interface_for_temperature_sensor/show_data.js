$(function () {
    $(document).ready(function() {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        function getChart(variable, container, color, ylabel, initial_value, ymin, ymax){
            return new Highcharts.Chart({
            credits: {
                enabled: false
            },
            chart: {
                renderTo: container,
                type: 'spline',
                marginRight: 10,
                events: {
                    load: function() {
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function() {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            $.getJSON('data.json', function(data){
                                series.addPoint([x, data[variable]], true, true);
                            })
                        }, 1000);
                    }
                }
            },
            title: {
                text: variable
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: ylabel
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }],
                min: ymin,
                max: ymax 
            },
            tooltip: {
                formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                color: color,
                name: variable,
                data: (function() {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i,
                        y;
                    for (i = -60; i <= 0; i++) {
                        data.push({
                            x: time + i * 1000,
                            y: initial_value,
                        });
                    }
                    return data;
                })()
            }]
        });
        }
        var chart1, chart2;
        $.getJSON('data.json', function(data){
            initial_data = data;
            chart1 = getChart('humidity', 'container1', '#0066FF', '%', data.humidity, 0, 100);
            chart2 = getChart('temperature', 'container2', '#FF0066', '°C', data.temperature, 20, 30);
        })
    });
});
