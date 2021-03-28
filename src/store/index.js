import { createStore } from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const store = createStore({
    state: {
        algorithm: '',
        speed: '',
        
    },
    mutations,
    getters,
    actions,
});

export default store;