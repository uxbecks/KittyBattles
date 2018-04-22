<template>
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item">
                <img src="">
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" v-on:click="mobile_menu = !mobile_menu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu" v-bind:class="{ 'is-active' : mobile_menu }">
            <div class="navbar-start">
                <router-link to="/" class="navbar-item">Home</router-link>
                <router-link to="/roster" class="navbar-item">Roster</router-link>
                <router-link to="/dojo" class="navbar-item">Dojo</router-link>

                <router-link to="/road-map" class="navbar-item">Road Map</router-link>
                <router-link to="/white-paper" class="navbar-item">About Us</router-link>
                <router-link to="/faq" class="navbar-item">FAQ</router-link>

                <router-link to="/about-us" class="navbar-item">About Us</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'navigation',

        data() {
            return {
                mobile_menu : false
            };
        }
    }
</script>

<style>

</style>