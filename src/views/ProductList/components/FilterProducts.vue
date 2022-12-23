<template>
  <v-row justify="center">
    <v-col cols="12">
      <h3 class="mb-2 font-weight-bold">Filter</h3>
      <v-divider class="bg-white"/>
      <section>
        <div class="d-flex justify-space-between align-center pa-2">
          <h3 class="text-info font-weight-bold">
            Search
          </h3>
          <a-input v-model="searchKeyWordValue" type="text"/>
        </div>
        <div class="d-flex justify-space-between align-center pa-2">
          <h3 class="text-info font-weight-bold">
            Sort
          </h3>
          <div class="w-33">
            <v-select v-model="selectedSortingKeywordValue" :items="['earliest' , 'latest']"/>
          </div>
        </div>
        <div class="d-flex justify-space-between align-center pa-2">
          <h3 class="text-info font-weight-bold">
            category
          </h3>
          <div class="w-50">
            <v-select v-model="selectedCategoryValue" :items="categoriesTitleList"/>
          </div>
        </div>
      </section>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">

import AInput from "@/components/AInput.vue";
import {defineEmits, defineProps, computed, inject} from "vue";
import {Category} from "@/types";


const categoriesList: Category[] | undefined = inject('categoriesList')

const props = defineProps({
  keywordSearch: {required: true, default: '', type: String},
  selectedCategory: {required: true, default: 'All', type: String},
  selectedSortingKeyword: {required: true, default: "select...", type: String}
})


const emits = defineEmits([
  'update:keywordSearch', 'update:selectedCategory' , 'update:selectedSortingKeyword'
])

const searchKeyWordValue = computed({
  get: () => {
    return props.keywordSearch
  }, set: (newValue) => {
    emits('update:keywordSearch', newValue)
  }
})

const selectedCategoryValue = computed({
  get: () => {
    return props.selectedCategory
  }, set: (newValue) => {
    emits('update:selectedCategory', newValue)
  }
})

const selectedSortingKeywordValue = computed({
  get: () => {
    return props.selectedSortingKeyword
  }, set: (newValue) => {
    emits('update:selectedSortingKeyword', newValue)
  }
})


//categories name add to v-select + All
const categoriesTitleList = computed(() => {
  const newList = categoriesList?.map((category: any) => category.title)
  newList?.push('All')
  return newList
})

</script>

<style scoped>

</style>