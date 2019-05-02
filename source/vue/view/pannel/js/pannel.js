export default {
    name: "pannel" ,
    data () {
        const yearStart = 1990;
        const d = new Date();
        const yearEnd = d.getFullYear();
        const monthStart = 1;
        const monthEnd = 12;
        let year = [];
        let month = [];
        for (let i = yearStart; i <= yearEnd; ++i)
        {
            year.push(i);
        }
        for (let i = monthStart; i <= monthEnd; ++i)
        {
            month.push(i);
        }
        return {
            dom: {} ,
            ajax: {} ,
            pending: {} ,
            ins: {
                loading: null ,
            } ,
            value: {} ,
            mode: {
                month: 'single' ,
            } ,
            year: year ,
            month: month ,
            yearForMonth: d.getFullYear() ,
            monthForMonth: d.getMonth() + 1 ,
            monthForMonthWithMultiple: '' ,
        };
    } ,
    mixins: [
        mixins.state ,
        mixins.loading ,
    ] ,

    mounted () {
        this.monthChart();
        this.quarterChart();
        this.yearChart();
    } ,

    methods: {

        pain (option) {
            const _default = {
                dom: null ,
                chartType: 'spline' ,
                title: '测试标题' ,
                subtitle: '测试副标题' ,
                plotLine: 10 ,
                categories: ['One' , 'Two' , 'Three'] ,
                xTitle: 'x-测试标题' ,
                yTitle: 'y-测试标题' ,
                series: [
                    {
                        name: '图例-1' ,
                        data: [1,2,3] ,
                    } ,
                    {
                        name: '图例-2' ,
                        data: [3,4,5] ,
                    } ,
                ] ,
                legend: {
                    enabled: true ,
                    layout: 'horizontal' ,
                    align: 'right' ,
                    verticalAlign: 'middle'
                } ,

            };
            option.legend = option.legend ? option.legend : _default.legend;
            console.log(option);
            return Highcharts.chart({
                chart: {
                    renderTo: option.dom ,
                    type: option.chartType ,
                } ,
                title: {
                    text: option.title
                } ,
                xAxis: {
                    title: {
                        text: option.xTitle ,
                    } ,
                    categories: option.categories
                } ,
                yAxis: {
                    title: {
                        text: option.yTitle
                    } ,
                    plotLines: [
                        {
                            value: option.plotLine ,
                            dashStyle: 'solid' ,
                            color: 'red' ,
                            width: 1 ,
                            zIndex: 10 ,
                        }
                    ]
                } ,
                series: option.series ,
                legend: {
                    enabled: true ,
                    layout: option.legend.layout ,
                    align: option.legend.align ,
                    verticalAlign: option.legend.verticalAlign
                } ,
                credits: {
                    enabled: false ,
                } ,
            });
        } ,

        // 月份统计资料
        monthChart () {
            this.pain({
                dom: this.$refs.month ,
                chartType: 'spline' ,
                title: this.yearForMonth + '-' + this.monthForMonth + '统计资料' ,
                categories: this.month.map((v) => {
                    return v + '月份';
                }) ,
                xTitle: '日期' ,
                yTitle: '数量' ,
                plotLine: 100 ,
                series: [
                    {
                        name: '用户数' ,
                        data: [1,2,3,4,5,6,7,8,9,10,11,12]
                    } ,

                ]
            });
        } ,

        // 月份统计资料
        quarterChart () {
            this.pain({
                dom: this.$refs.quarter ,
                chartType: 'spline' ,
                title: this.yearForMonth + '-' + this.monthForMonth + '统计资料' ,
                categories: this.month.map((v) => {
                    return v + '月份';
                }) ,
                xTitle: '日期' ,
                yTitle: '数量' ,
                plotLine: 100 ,
                series: [
                    {
                        name: '用户数' ,
                        data: [1,2,3,4,5,6,7,8,9,10,11,12]
                    } ,

                ]
            });
        } ,

        // 年统计资料
        yearChart () {
            this.pain({
                dom: this.$refs.year ,
                chartType: 'spline' ,
                title: this.yearForMonth + '-' + this.monthForMonth + '统计资料' ,
                categories: this.month.map((v) => {
                    return v + '月份';
                }) ,
                xTitle: '日期' ,
                yTitle: '数量' ,
                plotLine: 100 ,
                series: [
                    {
                        name: '用户数' ,
                        data: [1,2,3,4,5,6,7,8,9,10,11,12]
                    } ,

                ]
            });
        } ,
    }
};