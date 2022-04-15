import Vue from 'vue';

Vue.mixin({
  methods:{
    required(value){
      return !(value === '');
    },
  }
});
