<script setup lang="ts">
import {Cell} from "~/server/domain/cell";
import {useActionStore} from "~/server/store/actionStore";

const props = defineProps({
  cell: {type: Cell, required: true},
})

const actionStore = useActionStore()

</script>

<template>
  <div class="border border-gray-300 p-4 flex items-center justify-center h-5 w-5 text-xs select-none hover:bg-sky-700"
       @click="() => {actionStore.playAPawn(cell.x, cell.y)}">
    {{ cell.getPawn()?.getJoueur().toString() }}
  </div>
</template>

<style scoped>
</style>