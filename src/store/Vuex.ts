import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { result } from './Result/index';
import { RootState } from './types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        version: '1.0.0',
    },
    modules: {
        result,
    }
};

export default new Vuex.Store<RootState>(store);
