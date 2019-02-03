<template>
    <div class="reading-chart">
        <line-chart
                :width="chartWidth"
                :height="chartHeight"
                :chart-data="chartData()"
                :options="chartOptions()"
        />
    </div>
</template>

<script lang="ts">
    // import { Bar } from 'vue-chartjs'
    // import VueCharts from 'vue-chartjs';
    // import RecentChart from './RecentChart';
    // import SpeedTests from '@/services/SpeedTests';
    // import { State, Action, Getter, namespace } from 'vuex-class';
    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
    // import { ResultState, IndividualResult } from '../store/Result/types';
    // // const namespace: string = 'result';
    // import store from '../store/Vuex';
    //
    // const Result = namespace('result');
    //
    // // const Result.Getter('all') all;
    import LineChart from './LineChart.js';
    import store from '../store/Vuex';
    import SpeedTests from '@/services/SpeedTests';

    @Component({
        components: {
            LineChart,
        }
    })
    export default class RecentChart extends Vue {
        chartWidth:number = 636;
        chartHeight:number = 500;

        // labels: string[] = [];
        // data: number[] = [];

        async mounted() {
            this.refreshData();
        }

        async refreshData() {
            // this.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            // this.data = [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11];
            console.log('here');

            await SpeedTests.index();



            // this.data = this.results;

            // console.log('this.data', this.data);
        }

        get results() {
            if(!store.getters['result/all'].length) {
                return [];

                // return [
                //     {
                //         label: 'GitHub Commits',
                //         backgroundColor: '#f87979',
                //         data: [],
                //     },
                // ];
            }

            console.log('store.getters[\'result/all\']', store.getters['result/all'])

            const data = store.getters['result/all']
                .map(result => {
                    return {
                        t: Date.parse(result.when),
                        y: result.download_speed,
                    };
                });

            return data;

            // return [
            //     {
            //         label: 'GitHub Commits',
            //         backgroundColor: '#f87979',
            //         data: data,
            //     },
            // ]
        }

        chartData(): object {
            // console.log('chart data returned', this.results);

            const result = {
                datasets: [
                    {
                        label: 'Date Values',
                        // backgroundColor: '#f87979',
                        lineTension: 0,
                        fill: false,
                        data: this.results,
                        borderColor: '#6CB2EB',
                        // data: [
                        //     {t: Date.parse('2018-09-21 18:34:32'), y: 49},
                        //     {t: Date.parse('2018-09-24 19:36:31'), y: 55},
                        //     {t: Date.parse('2018-09-27 19:36:31'), y: 19},
                        // ],
                    },
                ],
            }

            console.log('result', result)

            return result;

            // return {
            //     labels: this.labels,
            //     datasets: [
            //         {
            //             label: 'GitHub Commits',
            //             backgroundColor: '#f87979',
            //             data: this.results,
            //         },
            //     ],
            //     options: {
            //         animation: {duration: 0},
            //         scales: {
            //             xAxes: [{
            //                 type: 'time',
            //                 time: {
            //                     unit: 'hour',
            //                 }
            //             }]
            //         }
            //     },
            // };
        }

        chartOptions(): object {
            // return {};

            return {
                animation: {duration: 0},
                scales: {
                    xAxes: [{
                        display: true,
                        type: 'time',
                        time: {
                            unit: 'hour',
                            displayFormats: {
                                hour: 'D/M hA',
                            },
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'When'
                        }
                    }],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Mbps'
                            }
                        }
                    ]
                }
            };
        }


        //
        // extends: Bar;
        //
        // mounted () {
        //     // Overwriting base render method with actual data.
        //     this.renderChart({
        //         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        //         datasets: [
        //             {
        //                 label: 'GitHub Commits',
        //                 backgroundColor: '#f87979',
        //                 data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        //             }
        //         ]
        //     })
        // }
    }
</script>

<style scoped lang="scss">
    .reading-chart {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: space-around;
    }
</style>
