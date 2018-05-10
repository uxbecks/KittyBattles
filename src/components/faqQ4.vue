<template>
    <div>
        <h2 class="faqQ title is-2" id="topMargin4" v-on:click="toggle">{{ title }}</h2>
        <div class="faqContent"  v-bind:class="{ hidden: isActive }" v-html="rawHtml"></div>
    </div>
</template>
<script>
    export default {
        name: 'faqQ4',
        data() {
            return {
            isActive : true,
            rawHtml : 'Kitty Origins are determined by the Fur catribute of your CryptoKitty and cannot be changed. Every CyptoKitty fits within a Kitty Origin, and each Kitty Origin has unique enhancements to their Battle Skills. There are 8 Kitty Origins: Arctic, Desert, Jungle, City, Mountain, Plains, Seaside, & Space.',
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
