<template>
<v-rating  v-model="rateValue" color="blue"/>
</template>

<script setup lang="ts">
import { defineProps, computed , defineEmits} from "vue";





const props  = defineProps({
  modelValue : {require:true , default : 2 , type:Number}
})

const emits  = defineEmits(['update:modelValue'])

const rateValue = computed({
  get:()=>{
    return props.modelValue
  } , set:(newValue)=>{
    emits("update:modelValue" , newValue)
  }
})

</script>

<style scoped>

</style>