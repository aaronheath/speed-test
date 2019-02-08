<template>
  <div class="container mx-auto">
    <div class="flex bg-grey-lighter">
      <div class="flex-1 bg-grey-light px-4 py-2 m-2">
        <table class="w-full">
          <tr>
            <th class="text-left">When</th>
            <th class="text-right">Duration (Seconds)</th>
            <th class="text-right">Size (MB)</th>
            <th class="text-right">Speed (Mbps)</th>
          </tr>

          <tr v-for="item in results">
            <td class="text-left">{{ item.when }}</td>
            <td class="text-right">{{ item.download_duration }}</td>
            <td class="text-right">{{ item.download_size }}</td>
            <td class="text-right">{{ item.download_speed }}</td>
          </tr>
        </table>
      </div>

      <div class="flex-1 bg-grey-light px-4 py-2 m-2">
        <recent-chart></recent-chart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import VueCharts from 'vue-chartjs';
  import RecentChart from './RecentChart';
  import SpeedTests from '@/services/SpeedTests';
  import { State, Action, Getter, namespace } from 'vuex-class';
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { ResultState, IndividualResult } from '../store/Result/types';
  // const namespace: string = 'result';
  import store from '../store/Vuex';
  import RecentChart from '@/components/RecentChart.vue';

  const Result = namespace('result');

  // const Result.Getter('all') all;
  @Component({
    components: {RecentChart},
  })
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  // @State('result') result: ResultState;
  // @Getter('all', { namespace }) all: IndividualResult[];
  @Result.Getter('all') alllll;

  components: { RecentChart };

  beforeMount() {
    // SpeedTests.index();
  }

  get results() {
    return store.getters['result/all'];
    // return this.alllll;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
