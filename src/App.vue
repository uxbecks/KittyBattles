<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
    <kb-footer></kb-footer>
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import store from './store';

export default {
  name: 'app',
  components: {
      'navigation': Navigation,
      'kb-footer': Footer    
      },
   
    data() {
      return store;

    }
  }



</script>

<style>

</style>
