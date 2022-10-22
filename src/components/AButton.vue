<template>
  <v-btn
      @click="emits('click')"
      :variant="props.variant"
  >
    <div class="d-flex justify-center align-center">
      <h4>
        {{ props.placeholder }}
      </h4>
    </div>

  </v-btn>
</template>

<script lang="ts" setup>
import {defineProps, defineEmits} from "vue"

const props = defineProps({
  placeholder: {required: false, default: '', type: String},
  width: {default: '', type: String},
  height: {default: '50', type: String},
  variant:{required:false , type:String}
})

const emits = defineEmits([
  'click'
])

</script>

<style scoped>

</style>