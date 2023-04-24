<template>
<!--<input :value="modelValue"  @input="$emit('update:modelValue' , $event.target.value)"/>-->
  <input v-model="value" />

</template>

<script setup lang="ts">


// eslint-disable-next-line no-undef
import * as events from "events";
import {computed} from "vue";

// eslint-disable-next-line no-undef
const props = defineProps({
modelValue :{required:true , type:String}
})

// eslint-disable-next-line no-undef
const emits = defineEmits([
    'update:modelValue'
])

const value = computed({
  get:()=>{
    return props.modelValue
  } ,
  set:(newValue)=>{
    emits('update:modelValue' , newValue)
  }
})



</script>

<style scoped>

</style>