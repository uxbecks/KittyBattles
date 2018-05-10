<template>
    <div>
        <h2 class="faqQ title is-2" id="topMargin4" v-on:click="toggle">{{ title }}</h2>
        <div class="faqContent" v-bind:class="{ hidden: isActive }">{{content}}</div>
    </div>
</template>
<script>
    export default {
        name: 'faqPlain',
        data() {
            return {
            isActive : true
            }
        },
        props : [
            'title',
            'content'
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
