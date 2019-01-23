// src/index.ts

import Vue from 'vue';
// import VueFusionCharts from 'vue-fusioncharts';
const VueFusionCharts = require('vue-fusioncharts');
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Charts);

const myDataSource = {
  chart: {
    caption: 'Recommended Portfolio Split',
    subCaption: 'For a net-worth of $1M',
    showValues: '1',
    showPercentInTooltip: '0',
    numberPrefix: '$',
    enableMultiSlicing: '1',
    theme: 'fusion'
  },
  data: [
    {
      label: 'Equity',
      value: '300000'
    },
    {
      label: 'Debt',
      value: '230000'
    },
    {
      label: 'Bullion',
      value: '180000'
    },
    {
      label: 'Real-estate',
      value: '270000'
    },
    {
      label: 'Insurance',
      value: '20000'
    }
  ]
};

let v = new Vue({
  el: '#app',
  template: `
    <div>
      <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataFormat="dataFormat"
      :dataSource="dataSource"
    >
    </fusioncharts>
    </div>`,
  data: {
    name: 'World',
    type: 'column2d',
    width: '500',
    height: '300',
    dataFormat: 'json',
    dataSource: myDataSource
  }
});
