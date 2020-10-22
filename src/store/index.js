import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/coaches/index.js';

const store =  createStore({
    modules: {
        coaches: coachesModule,
        requests: requestsModule
    }
});

export default store;