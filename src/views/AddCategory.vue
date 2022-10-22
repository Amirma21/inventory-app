<template>
  <div v-if="isShowAddCategoryForm">
    <h3>Add category</h3>
    <v-form class="border rounded-lg pa-8 bg-primary">
      <v-row>
        <v-col cols="12">
          <label class="font-weight-bold">title</label>
          <a-input
              v-model="value.title"
              type="text"
          />
          <label class="font-weight-bold">description</label>
          <v-textarea
              v-model="value.description"
              type="text"
          />
        </v-col>
        <a-button @click="isShowAddCategoryForm = false" placeholder="cancel" variant="outlined"/>
        <a-button @click="emits('addCategory')" placeholder="Add category"/>
      </v-row>
    </v-form>
  </div>
  <h4 @click="isShowAddCategoryForm = true" v-else>add new category ?</h4>
</template>

<script setup lang="ts">

import AInput from "@/components/AInput.vue";
import {ref, defineEmits, defineProps, PropType, computed} from "vue";
import AButton from "@/components/AButton.vue";
import {Category} from "@/types";


const isShowAddCategoryForm = ref(false)

const props = defineProps({
  modelValue: {required: true, type: Object as PropType<Category>}
})

const emits = defineEmits([
  'addCategory', 'update:modelValue'
])

const value = computed<Category>({
  get: () => {
    return props.modelValue
  },
  set: (newValue) => {
    emits('update:modelValue', newValue)
  }
})


</script>

<style scoped>

</style>