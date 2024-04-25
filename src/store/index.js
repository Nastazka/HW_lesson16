import Vue from 'vue';
import Vuex from 'vuex';
import projectModule from './modules/projectModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    project: projectModule
  }
});