<template>
  <v-app>
    <notifications position="top left"/>
    <v-main>
      <v-app-bar>
        <div class="w-100 d-flex justify-center align-center">
          <h3>Inventory App using Vue.js </h3>
          <span class="border rounded-circle pa-2 ml-2">{{ productsList.length }}</span>
        </div>
      </v-app-bar>
      <v-row class="pa-8">
        <v-col cols="6">
          <add-category v-model="newCategory" @add-category="addCategoryHandler"/>
          <add-product v-model="newProduct" :categories-list="categoryList" @add-product="addProductHandler"/>
        </v-col>
        <v-col cols="6">
          <product-list :product-list="productsList"/>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import AddCategory from "@/views/AddCategory.vue";
import {provide, ref} from "vue";
import {addToLocalStorage, getFromLocalStorage} from "@/localStorge";
import {Category, Product} from "@/types";
import AddProduct from "@/views/AddProduct.vue";
import ProductList from "@/views/ProductList/ProductList.vue";

// category section
/// this method return array of objects
const getCategories = getFromLocalStorage('category') ?? []
const categoryList = ref<Category[]>(getCategories)
const newCategory = ref({
  title: '',
  description: ''
})
//product section
const getProducts = getFromLocalStorage('product') ?? []
const productsList = ref<Product[]>(getProducts)
const newProduct = ref({categoryTitle: 'select a category', quantity: 0, title: ""})


function addCategoryHandler() {
  categoryList.value?.push({
    title: newCategory.value.title,
    description: newCategory.value.description,
    createDate: Date.now()
  })
  addToLocalStorage('category', categoryList.value)
  newCategory.value.title = newCategory.value.description = ''
}


function addProductHandler() {
  productsList.value?.push({
    title: newProduct.value.title,
    quantity: newProduct.value.quantity,
    categoryTitle: newProduct.value.categoryTitle,
    createDate: Date.now()
  })
  addToLocalStorage('product', productsList.value)
  // reset inputs
  newProduct.value.title = newProduct.value.categoryTitle = ''
}


// Prop Drilling
provide('categoriesList', categoryList.value)

</script>
