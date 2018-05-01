<template>
    <nav class="navbar is-brown" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item">
                <img src="assets/KBLogo.svg" alt="KittyBattles Logo" id="KB_Logo">
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" v-on:click="mobile_menu = !mobile_menu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu" v-bind:class="{ 'is-active' : mobile_menu }">
            <div class="navbar-start">
                <router-link to="/" class="navbar-item title is-4">HOME</router-link>
                <router-link to="/roster" class="navbar-item title is-4">TEAM ROSTER</router-link>
                <router-link to="/dojo" class="navbar-item title is-4">TRAINING DOJO</router-link>


                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link title is-4">
                        ABOUT
                    </a>
                    <div class="navbar-dropdown">
                        <router-link to="/how-to-play" class="navbar-item title is-4">
                            HOW TO PLAY
                        </router-link>
                    <div class="navbar-dropdown">
                        <router-link to="/origin-page" class="navbar-item title is-4">
                            KITTY ORIGIN LORE
                        </router-link>
                    <div class="navbar-dropdown">
                        <router-link to="/faq" class="navbar-item title is-4">
                            KITTYBATTLES FAQS
                        </router-link>
                    <div class="navbar-dropdown">
                        <router-link to="/about-us" class="navbar-item title is-4">
                            THE KB TEAM
                        </router-link>
                    </div></div></div></div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'navigation',

        data() {
            return {
                mobile_menu: false
            };
        }
    }
</script>

<style>
</style>