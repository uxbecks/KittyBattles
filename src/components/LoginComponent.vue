<template>
    <div class="container isDark has-text-centered is-fluid">
        <section class="section">
            <div class="columns howToMain">
                <div class="column is-3">
                    <img src="assets/OpeningBK1.svg" class="is-200x200" alt="">
                </div>
                <div class="column is-6">
                    <h1 class="title is-1" id="margin2"><strong>KITTYBATTLES</strong></h1>
                    <h2 class="title is-2">WHERE THE KITTENS COME TO PLAY</h2>
                    <div class="columns">
                    <div class="column is-6">
                    <router-link v-if="global.profile" to="/how-to-play" class="startButton title is-3 has-text-centered">Learn How to Play</router-link>
                     </div>
                     <div class="column is-6">
                    <router-link v-if="global.profile" to="/roster" class="startButton title is-3 has-text-centered">Build Your Teams</router-link>
                    </div>
                    </div>

                    <article class="message" v-if="!global.profile">

                        <div class="field has-addons">
                            <div class="control">
                                <div class="startButton title is-3 has-text-centered" v-on:click="login">
                                    SIGN IN WITH METAMASK TO ACCESS KITTYBATTLES
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="column is-3">
                    <img src="assets/OpeningBK2.svg" class="is-200x200" alt="">
                </div>
            </div>

        </section>
    </div>
</template>

<script>
    import store from './../store';
    import axios from 'axios';
    export default {
        name: 'Login',
        data() {
            return {
                profile: '',
                global: store.state
            }
        },
        created: () => {
            if (typeof web3 !== 'undefined') {
                this.profile = web3.eth.accounts[0];
                if (store.state.profile !== this.profile) {
                    store.state.profile = '';
                }
            }
        },
        methods: {
            login: () => {
                let signer = this.profile;
                let original_message = "KittyBattles Authentication";
                let message = web3.toHex(original_message);
                let message_hash = web3.sha3(
                    '\u0019Ethereum Signed Message:\n' +
                    message.length.toString() +
                    message
                );
                web3.personal.sign(message, signer, (err, res) => {
                    if (err) {
                        console.error(err);
                    } else {
                        store.state.profile = this.profile;
                        store.save();
                        axios.post('https://api.kittybattles.io/auth', {
                            address: this.profile
                        }).then(response => {
                            store.state.player = response.data;
                        }).then(() => {
                            store.save();
                        });
                    }
                });
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>