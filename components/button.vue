<script setup>
 const props = defineProps({
    btn_text:String,
    btn_action:Function
 })
</script>
<template>
    <div>
         <button class="btn" @click="props.btn_action"> {{ props.btn_text }}</button>
    </div>
</template>