<template>
  <v-form class="border rounded-lg pa-8 bg-primary my-4">
    <v-row justify="center">
      <v-col cols="12">
        <label class="font-weight-bold">title</label>
        <a-input
            v-model="value.title"
            type="text"
        />
        <label>quantity</label>
        <a-input
            v-model="value.quantity"
            type="number"
        />
        <label class="font-weight-bold">category</label>
        <v-select v-model="value.categoryTitle" :items="selectionItems"/>
        <a-rating-system  v-model="value.rate"/>
      </v-col>
    </v-row>
    <v-row justify="end">
      <v-col cols="6">
        <a-button
            v-if="isEditingMood"
            @click="emits('cancelEditing')"
            placeholder="Cancel"
            variant="outlined"
            class="w-100"
        />
      </v-col>
      <v-col cols="6">
        <a-button
            @click="emits('addProduct')"
            :placeholder="placeHolder"
            variant="outlined" class="w-100"
        />
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup lang="ts">

import AInput from "@/components/AInput.vue";
import {defineProps, PropType, computed, defineEmits, ref} from "vue";
import {Category, Product} from "@/types";
import AButton from "@/components/AButton.vue";
import ARatingSystem from "@/components/ARatingSystem.vue";


const props = defineProps({
  modelValue: {required: true, type: Object as PropType<Product>},
  categoriesList: {required: true, type: Object as PropType<Category[]>},
  isEditingMood: {required: true, default: false, type: Boolean}
})

const emits = defineEmits([
  "update:modelValue", "addProduct", 'cancelEditing'
])


const value = computed({
  get: () => {
    return props.modelValue
  }, set: (newValue) => {
    emits('update:modelValue', newValue)
  }
})

const selectionItems = computed(() => {
  return props.categoriesList.map((item: any) => item.title)
})

const placeHolder = computed(() => props.isEditingMood ? 'Edit product' : 'Add product')

</script>

<style scoped>

</style>