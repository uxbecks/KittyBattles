<template>
    <div>
        <h2 class="faqQ title is-2" id="topMargin4" v-on:click="toggle">{{ title }}</h2>
        <div class="faqContent"  v-bind:class="{ hidden: isActive }" v-html="rawHtml"></div>
    </div>
</template>
<script>
    export default {
        name: 'faqQ2',
        data() {
            return {
            isActive : true,
            rawHtml : 'KittyBattles is Free-to-play, but you must own at least 3 <a href="https://www.cryptokitties.co/" target="_blank">CryptoKitties</a> and have <a href="https://metamask.io/" target="_blank">Metamask</a> installed (free) to create a team.',
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
