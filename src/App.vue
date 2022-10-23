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
          <add-product/>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import AddCategory from "@/views/AddCategory.vue";
import {onMounted, ref} from "vue";
import {addToLocalStorage, getFromLocalStorage} from "@/localStorge";
import {Category} from "@/types";
import AddProduct from "@/views/AddProduct.vue";
import {useStore} from "vuex";

const store = useStore()

/// this method return array of objects !
const getCategories = getFromLocalStorage('category') ?? []

const categoriesList = ref<Category[]>([])


const newCategory = ref({
  title: '',
  description: ''
})

onMounted(() => {
  getCategories.forEach((item: any) => {
    store.commit('addToCategoriesList', item)
  })
})

function addToCategoryList() {
  const _newCategory:Category = {
    title: newCategory.value.title,
    description: newCategory.value.description,
    createDate: Date.now()
  }
  categoriesList.value.push(_newCategory)

  store.commit('addToCategoriesList', _newCategory)
   addToLocalStorage('category', categoriesList.value)

  newCategory.value.title = newCategory.value.description = ''
}

/// 1- just latest object save in localstorage
// 2- save to S-M. save to localStorage !


</script>
