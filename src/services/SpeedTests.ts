// import Vue from 'vue';
import http from 'axios';
// import { Mutation } from 'vuex-class';
import store from '../store/Vuex';

export default class SpeedTests {
    // @Mutation('addResult', { namespace: 'result' }) addResult: any;

    public static async index() {
        const response = await http.get('https://api.aaronheath.com/json/speed-test');

        console.log(response.data.data);

        response.data.data.forEach(result =>  store.commit('result/addResult', result));
    }
}
