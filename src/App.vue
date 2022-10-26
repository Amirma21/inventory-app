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
          <add-product
              v-model="newProduct"
              @add-product="addOrEditProductHandler"
              :is-editing-mood="editingMood"
              :categories-list="categoryList"
          />
        </v-col>
        <v-col cols="6">
          <product-list
              :product-list="productsList"
              @delete-product="deleteProductHandler"
              @edit-product="editProductHandler"
          />
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
const editingMood = ref(false)
const selectedProductForEdit = ref(-1)

function addCategoryHandler() {
  categoryList.value?.push({
    title: newCategory.value.title,
    description: newCategory.value.description,
    createDate: Date.now()
  })
  addToLocalStorage('category', categoryList.value)
  newCategory.value.title = newCategory.value.description = ''
}


function addOrEditProductHandler() {
  if (!editingMood.value) {
    productsList.value?.push({
      title: newProduct.value.title,
      quantity: newProduct.value.quantity,
      categoryTitle: newProduct.value.categoryTitle,
      createDate: Date.now()
    })
    addToLocalStorage('product', productsList.value)
    resetAddProductInputs()
  } else {
    productsList.value[selectedProductForEdit.value].title = newProduct.value.title
    productsList.value[selectedProductForEdit.value].quantity = newProduct.value.quantity
    productsList.value[selectedProductForEdit.value].categoryTitle = newProduct.value.categoryTitle
    resetAddProductInputs()
    addToLocalStorage('product', productsList.value)
    editingMood.value = false
  }

}


function deleteProductHandler(index: number) {
  //delete product form product list !
  productsList.value.splice(index, 1)
  // update local storage !
  addToLocalStorage('product', productsList.value)
}


/// edit product

function editProductHandler(index: number) {
  editingMood.value = true
  newProduct.value = {...productsList.value[index]}
  selectedProductForEdit.value = index
}

function resetAddProductInputs() {
  newProduct.value.title = ''
  newProduct.value.quantity = 0
  newProduct.value.categoryTitle = 'select...'
}

// Prop Drilling
provide('categoriesList', categoryList.value)

</script>
