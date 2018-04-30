<template>

    <section class="section">
        <div class="columns">
            <div class="column is-3"></div>
            <div class="column is-6">

                    <p class="title">Welcome to Kitty Battles</p>

                    <article class="message is-dark" v-if="!global.profile">
                        <div class="message-header"><p>Login</p></div>
                        <div class="message-body"><!---->
                            <div>
                                <div class="field has-addons">
                                    <div class="control">
                                        <a class="button is-info" v-on:click="login">
                                            Sign In With Meta-Mask
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
            </div>
            <div class="column is-3"></div>
        </div>
    </section>

</template>

<script>
    import store from './../store';
    import axios from 'axios';

    export default {
        name: 'Login',
        data() {
            return {
                profile : '',
                global : store.state
            }
        },
        created : () => {

            if (typeof web3 !== 'undefined') {
                this.profile = web3.eth.accounts[0];

                if (store.state.profile !== this.profile) {
                    store.state.profile = '';
                }
            }
        },
        methods : {
            login : () => {
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
                            address : this.profile
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
