<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
      'navigation': Navigation,
      'app-footer': Footer
  }
}

</script>

<style>

</style>
