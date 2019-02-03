import { MutationTree } from 'vuex';
import { ResultState, IndividualResult } from './types';

export const mutations: MutationTree<ResultState> = {
    addResult(state, payload: IndividualResult) {
        state.results.push(payload);
    },
};
