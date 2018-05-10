<template>
    <footer class="footer navbar is-bottom is-fluid" role="navigation" aria-label="footer navigation">
          

     

            <div class="navbar-end">
                <a href="https://discord.gg/7XTZcTx" target="blank" class="navbar-item title is-5">JOIN OUR DISCORD</a>
                <!--
                <router-link to="/white-paper" class="navbar-item title is-5">READ OUR WHITE PAPER  </router-link>
                -->
                <router-link to="/road-map" class="navbar-item title is-5">VIEW OUR ROADMAP</router-link>
         
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'kb-footer',

        data() {
            return {
                mobile_menu: false
            };
        }
    }
</script>

<style>

  
</style>