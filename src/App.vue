<template>
  <v-app>
    <v-main>
      <v-app-bar>
        <div class="w-100 d-flex justify-center">
          <h4>Hello!</h4>
        </div>
      </v-app-bar>
      <v-row class="pa-8">
        <v-col cols="6">
          <add-category v-model="newCategory" @add-category="addToCategoryList"/>
          <add-product  :categories-list="categoryList"/>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import AddCategory from "@/views/AddCategory.vue";
import {ref} from "vue";
import {addToLocalStorage, getFromLocalStorage} from "@/localStorge";
import {Category} from "@/types";
import AddProduct from "@/views/AddProduct.vue";

/// this method return array of objects !
const getCategories = getFromLocalStorage('category') ?? []

const categoryList = ref<Category[]>(getCategories)

const newCategory = ref({
  title: '',
  description: ''
})


function addToCategoryList() {
  categoryList.value?.push({
    title: newCategory.value.title,
    description: newCategory.value.description,
    createDate: Date.now()
  })
  addToLocalStorage('category', categoryList.value)
  newCategory.value.title = newCategory.value.description = ''
}


</script>
