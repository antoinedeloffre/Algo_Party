<script lang="ts" setup>
import {Grid} from "~/server/domain/grid";

defineProps({
  grid: {type: Grid, required: true}
})

</script>

<template>
  <div class="flex m-5">

    <div v-for="(row, rowIndex) in grid.getCells()" :key="rowIndex" class="text-center">
      {{ rowIndex }}
      <div
          v-for="(cell, cellIndex) in row"
          :key="cellIndex"
          class="flex"
      >
        <div v-if="rowIndex === 0" class="mr-2">
          {{ cellIndex }}
        </div>
        <Cell :cell="cell"/>
      </div>
    </div>
  </div>
</template>