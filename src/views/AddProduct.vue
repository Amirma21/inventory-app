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
        <v-select :items="selectionItems"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <a-button placeholder="cancel"/>
      </v-col>
      <v-col cols="6">
        <a-button placeholder="Add product"/>
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup lang="ts">

import AInput from "@/components/AInput.vue";
import {ref, defineProps, PropType, computed} from "vue";
import {Category, Product} from "@/types";
import AButton from "@/components/AButton.vue";

const newProduct = ref<Product>({categoryTitle: '', quantity: 0, title: ""})

const props = defineProps({
  categoriesList: {required: true, type: Object as PropType<Category[]>}
})

const selectionItems = computed(() => {
  return props.categoriesList.map((item: any) => item.title)
})

</script>

<style scoped>

</style>