<template>
<footer class="footer">
    <div class="content">
      <p>
          Testing the footer
     
      <router-link to="/road-map">Road Map</router-link>
        <router-link to="/white-paper">White Paper</router-link>

  </p>
    </div>
</footer>
</template>

<script>
    export default {
        name: 'footer',

        data() {
            return {
                mobile_menu: false
            };
        }
    }
</script>

<style>
</style>