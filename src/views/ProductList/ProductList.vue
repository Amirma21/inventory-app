<template>
  <v-row justify="center">
    <v-col cols="12">
      <h3 class="mb-2 font-weight-bold">Filter</h3>
      <v-divider class="bg-white"/>
      <section class="">
        <div class="d-flex justify-space-between align-center pa-2">
        <h3 class="text-info font-weight-bold">
          Search
        </h3>
          <a-input  type="text"/>
        </div>
        <div class="d-flex justify-space-between align-center pa-2">
          <h3 class="text-info font-weight-bold">
            Sort
          </h3>
        </div>
        <div class="d-flex justify-space-between align-center pa-2">
          <h3 class="text-info font-weight-bold">
            category
          </h3>
        </div>
      </section>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">

import AInput from "@/components/AInput.vue";
</script>

<style scoped>


</style>