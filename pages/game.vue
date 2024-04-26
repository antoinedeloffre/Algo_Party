<script lang="ts" setup>
import {useGameStore} from "~/server/store/gameStore";

const largeur = ref(0)
const hauteur = ref(0)
const hasGravity = ref(false)
const numberToWin = ref(1)
const gameStore = useGameStore()

const currentPlayerName = computed(() => {
  return gameStore.jeu.currentPlayer?.getName()
})

const genererJeu = () => {
  gameStore.genererJeu(largeur.value, hauteur.value, hasGravity.value, numberToWin.value)
}

</script>

<template>
  <div class="flex" :class="currentPlayerName">
    <div class="flex flex-col items-center ml-52">
      <div class="flex m-5">
        Width
        <UInput v-model="largeur" color="primary" variant="outline" placeholder="largeur" class="w-20 m-2"/>
        Length
        <UInput v-model="hauteur" color="primary" variant="outline" placeholder="hauteur" class="w-20 m-2"/>
        Gravity
        <UToggle v-model="hasGravity"/>
        Number to align
        <UInput v-model="numberToWin" type="number" color="primary" variant="outline" placeholder="hauteur"
                class="w-20 m-2"/>
      </div>
      <UButton @click="genererJeu()">Générer Jeu</UButton>
      player : {{ currentPlayerName }}
      <Grid :grid="gameStore.jeu.grid"/>
    </div>
  </div>
</template>

<style scoped>
.p1 {
  cursor: crosshair;
}

.p2 {
  cursor: not-allowed;
}
</style>