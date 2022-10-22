<template>
<div>
  <input
  v-model="value"
  :type="props.type"
  class=" py-2 px-4 rounded-lg my-2"
  />
</div>
</template>

<script setup lang="ts">

import {computed , defineProps ,defineEmits} from "vue";

const props = defineProps({
  modelValue:{required:true , type:[Object , String , Number]} ,
  type:{required:true , type:String} ,
  height:{required:false , type:String}

})

const eimts = defineEmits([
    'update:modelValue'
])

const value = computed({
get:()=>{
  return props.modelValue
} ,
  set:(newValue)=>{
  eimts('update:modelValue' , newValue)
  }
})

</script>

<style scoped>
input{
  border: 1px solid #fff;
  color: #ffffff;
}
input:focus{
  border-color: blue;
}
</style>