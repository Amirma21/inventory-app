<template>

  <v-dialog
      v-model="isOpenDialogValue"
      scrim="true"
      class=" w-33 h-75 d-flex align-start"
  >
    <v-card>
      <v-card-title class="d-flex justify-space-between">
        <h4>category setting</h4>
        <h6 @click="emits('closeDialog')" class="cursor-pointer">
          <v-icon>
            mdi-close
          </v-icon>
        </h6>
      </v-card-title>
      <v-divider/>
      <div v-for="(categoryItem , index ) in categoriesList" :key="index" class="pa-4">
        <div class="d-flex justify-space-between align-center">
          <h3>{{ categoryItem.title }}</h3>
          <h4>{{ convertingDate(categoryItem.createDate) }}</h4>
          <div class="d-flex">
            <a-button placeholder="delete" @click="emits('deleteCategory' , index)" class="ml-2">
              <template v-slot:icon>
                <v-icon class="text-red">mdi-delete</v-icon>
              </template>
            </a-button>
          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">

import {ref, defineProps, computed, defineEmits, inject} from "vue";
import {convertingDate} from "@/utilities/convertDate";
import AButton from "@/components/AButton.vue";


const props = defineProps({
  isOpenDialog: {required: true, default: false, type: Boolean}
})

const emits = defineEmits([
  "update:isOpenDialog", 'closeDialog' , 'deleteCategory'
])

const isOpenDialogValue = computed({
  get: () => props.isOpenDialog,
  set: (newValue: any) => {
    return emits('update:isOpenDialog', newValue)
  }
})

const categoriesList = inject('categoriesList')



/// delete category !

</script>

<style scoped>

</style>