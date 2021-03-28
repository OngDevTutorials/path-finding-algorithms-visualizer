import { createStore } from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const store = createStore({
    state: {
        algorithm: '',
        boardState: 'design',
        currentDesignNodeType: 'wall',
        speed: '',
        nodes: new Map(),
        numberOfRows: 30,
        numberOfColumns: 50,
        isMultiSelecting: false
    },
    mutations,
    getters,
    actions,
});

export default store;