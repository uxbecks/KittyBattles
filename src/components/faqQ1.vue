<template>
    <div>
        <h2 class="faqQ title is-2" v-on:click="toggle">{{ title }}</h2>
        <div class="faqContent"  v-bind:class="{ hidden: isActive }" v-html="rawHtml"></div>
    </div>
</template>
<script>
    export default {
        name: 'faqQ1',
        data() {
            return {
            isActive : true,
            rawHtml : 'KittyBattles is a turn-based arena battle game where you select a team of 3 of your bravest <a href="https://www.cryptokitties.co/" target="_blank">CryptoKitties</a> to battle against other teams of <a href="https://www.cryptokitties.co/" target="_blank">CryptoKitties</a>. Pawsome!',
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
