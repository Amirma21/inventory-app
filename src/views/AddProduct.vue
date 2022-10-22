<template>
  <v-form class="border rounded-lg pa-8 bg-primary my-4">
    <v-row justify="center">
      <v-col cols="12">
        <label class="font-weight-bold">title</label>
        <a-input
            v-model="newProduct.categoryTitle"
        />
        <label>quantity</label>
        <a-input
            v-model="newProduct.quantity"
            type="number"
        />
        <label class="font-weight-bold">category</label>
        <v-select :items="categoryTitleList"/>
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup lang="ts">

import AInput from "@/components/AInput.vue";
import {onMounted, ref} from "vue";
import {Product} from "@/types";

const newProduct = ref<Product>({categoryTitle: '', quantity: 0, title: ""})
let categoryTitleList = []

const categoryList = JSON.parse(localStorage.getItem('category')!)


onMounted(() => categoryList.map((item: any) => categoryTitleList.push(item.title)))


</script>

<style scoped>

</style>