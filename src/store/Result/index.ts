import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ResultState } from './types';
import { RootState } from '../types';

export const state: ResultState = {
    results: [],
};

const namespaced: boolean = true;

console.log({
    namespaced,
    state,
    getters,
    actions,
    mutations
});

export const result: Module<ResultState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};
