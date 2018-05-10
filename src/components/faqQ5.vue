<template>
    <div>
        <h2 class="faqQ title is-2" id="topMargin4" v-on:click="toggle">{{ title }}</h2>
        <div class="faqContent" v-bind:class="{ hidden: isActive }" v-html="rawHtml"></div>
    </div>
</template>
<script>
    export default {
        name: 'box1',
        data() {
            return {
            isActive : true,
            rawHtml : 'KittyBattles is Free-to-play, but you must own 3 <a href="https://www.cryptokitties.co/">CryptoKitties</a> and have <a href="https://metamask.io/">Metamask</a> installed (free) to create a team.',
            }
        },
        props : [
            'title',
        ],
        methods : {
            toggle() {
                this.isActive = !this.isActive;
            }
        }
        
    }
</script>

<style>
</style>
