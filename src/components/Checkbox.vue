<template>
    <div class="hello">
        <input type="checkbox" :checked="value" @change="changed">{{title}}
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Checkbox extends Vue {
    @Prop() title: string
    @Prop() value: boolean
    
    changed(ev) {
        this.$emit('input', ev.target.checked);
    }
}
</script>