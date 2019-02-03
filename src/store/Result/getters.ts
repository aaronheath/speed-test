import { GetterTree } from 'vuex';
import {IndividualResult, ResultState} from './types';
import { RootState } from '../types';

export const getters: GetterTree<ResultState, RootState> = {
    all(state): IndividualResult[] {
        return state.results;
    }
};
