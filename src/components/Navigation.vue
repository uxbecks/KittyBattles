<template>
    <nav class="navbar is-brown" role="navigation" aria-label="main navigation">
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
                <router-link v-if="global.profile" to="/roster" class="navbar-item">Roster</router-link>
                <router-link v-if="global.profile" to="/dojo" class="navbar-item">Dojo</router-link>

                <router-link to="/road-map" class="navbar-item">Road Map</router-link>
                <router-link to="/white-paper" class="navbar-item">White Paper</router-link>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        About
                    </a>
                    <div class="navbar-dropdown">
                        <router-link to="/how-to-play" class="navbar-item">
                            HOW TO PLAY
                        </router-link>
                    <div class="navbar-dropdown">
                        <router-link to="/origin-page" class="navbar-item">
                            KITTY ORIGIN LORE
                        </router-link>
                    <div class="navbar-dropdown">
                        <router-link to="/faq" class="navbar-item">
                            KITTYBATTLES FAQS
                        </router-link>
                    <div class="navbar-dropdown">
                        <router-link to="/about-us" class="navbar-item">
                            THE KB TEAM
                        </router-link>
                    </div></div></div></div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import store from './../store';

    export default {
        name: 'navigation',

        data() {
            return {
                global : store.state,
                mobile_menu: false
            };
        }
    }
</script>

<style>
</style>