<template>
    <div>
        <h2 class="faqQ title is-2" id="topMargin4" v-on:click="toggle">{{ title }}</h2>
        <div class="faqContent" v-bind:class="{ hidden: isActive }" v-html="rawHtml"></div>
    </div>
</template>
<script>
    export default {
        name: 'faqQ3',
        data() {
            return {
                isActive: true,
                rawHtml: 'Logging into KittyBattles is handled the same way you log into <a href="https://www.cryptokitties.co/" target="_blank">CryptoKitties</a>, via <a href="https://metamask.io/" target="_blank">Metamask</a>. Once you sign the authentication request from <a href="https://metamask.io/" target="_blank">Metamask</a>, you will be able to assemble your battle teams.',
            }
        },
        props: [
            'title',
        ],
        methods: {
            toggle() {
                this.isActive = !this.isActive;
            }
        }

    }
</script>

<style>
</style>