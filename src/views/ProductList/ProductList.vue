<template>
  <v-row>
    <v-col cols="12">
      <filter-products
          v-model:selected-category="selectedCategory"
          v-model:keyword-search="keyWordSearch"
          v-model:selected-sorting-keyword="sortingKeyWord"
      />
      <section class="mt-3">
        <h3>Product list </h3>
        <v-divider class="bg-white"/>
        <div v-if="copiedProductsList.length > 0">
          <div
              v-for="(product , index) in copiedProductsList"
              :key="index"
              class="d-flex justify-space-between  align-center pa-4"
          >
            <h3>{{ product.title }}</h3>
            <div class="d-flex align-center">
              <span>{{ convertingDate(product.createDate) }}</span>
              <span class="pa-2 border rounded-xl mx-2">{{ product.categoryTitle }}</span>
              <span class="rounded-circle bg-primary pa-2 mx-2">{{ product.quantity }}</span>
              <a-button placeholder="delete" @click="emits('deleteProduct' , index)" class="ml-2"/>
            </div>
          </div>
        </div>
        <h3 v-else class="text-info text-center mt-4">There are no product.</h3>
      </section>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">

import FilterProducts from "@/views/ProductList/components/FilterProducts.vue";
import AButton from "@/components/AButton.vue";
import {defineProps, PropType, ref, watch , defineEmits} from 'vue'
import {Product} from "@/types";
import {convertingDate} from "@/utilities/convertDate";


const keyWordSearch = ref('')
const selectedCategory = ref('All')
const sortingKeyWord = ref('select...')


const props = defineProps({
  productList: {required: true, type: Object as PropType<Product[]>}
})
const copiedProductsList = ref(props.productList)

const emits = defineEmits([
    'deleteProduct'
])

// when keyWordSearch changed this method call
watch(keyWordSearch, () => {
  const copyArray = [...props.productList]
  if (keyWordSearch.value !== '') {
    copiedProductsList.value = copyArray.filter((product) => {
      return product.title.includes(keyWordSearch.value)
    })
  } else {
    copiedProductsList.value = props.productList
  }
})

// selectedCategory watcher
watch(selectedCategory, () => {
  const copyArray = [...props.productList]
  if (selectedCategory.value !== 'All') {
    copiedProductsList.value = copyArray.filter((product) => product.categoryTitle == selectedCategory.value)
  } else {
    copiedProductsList.value = props.productList

  }
})


// sorting watcher
watch(sortingKeyWord, () => {
  if (sortingKeyWord.value === 'latest') {
    return copiedProductsList.value.sort((a, b) => a.createDate - b.createDate
    )
  } else if (sortingKeyWord.value === 'earliest') {
    return copiedProductsList.value.sort((a, b) => b.createDate - a.createDate)
  }
})

</script>

<style scoped>


</style>