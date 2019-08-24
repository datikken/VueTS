<template>
    <h1>HelloTs</h1>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({})
    export default class HelloTS extends Vue {
        created() {
            console.log('Hello ts')
        }
    }
</script>