<template>

    <v-dialog
        v-model="isOpenDialogValue"
        scrim="true"
        class=" w-33 h-75 d-flex align-start"
    >
      <v-card>
        <v-card-title class="d-flex justify-space-between">
          <h3>category setting</h3>
          <h6 @click="emits('closeDialog')">close</h6>
        </v-card-title>
        <div v-for="(categoryItem , index ) in categoriesList" :key="index">
          {{categoryItem.title}}
        </div>
      </v-card>
    </v-dialog>
</template>

<script setup lang="ts">

import {ref, defineProps, computed, defineEmits, inject} from "vue";


const props = defineProps({
  isOpenDialog: {required: true, default: false, type: Boolean}
})

const emits = defineEmits([
  "update:isOpenDialog" , 'closeDialog'
])

const isOpenDialogValue = computed({
  get: () => props.isOpenDialog,
  set: (newValue: any) => {
    return emits('update:isOpenDialog', newValue)
  }
})

const categoriesList = inject('categoriesList')


</script>

<style scoped>

</style>