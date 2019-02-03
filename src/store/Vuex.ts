import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { result } from './Result/index';
import { RootState } from './types';

// DOCS https://codeburst.io/vuex-and-typescript-3427ba78cfa8

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
