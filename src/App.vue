<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
    <br />
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import store from './store';

export default {
    name: 'app',
    components: {
        Navigation
    },
    data() {
      return store;
    }
}

</script>

<style>

</style>
