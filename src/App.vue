<template>
  <!-- <div>
     <PokemonGame />
  </div> -->
  <div>
     <PokemonPresentacion />
  </div>
  <div>
     <PokemonPrueba />
  </div>

</template>

<script lang="ts" setup>
 import PokemonGame from '@pokemon/pages/PokemonGame.vue';
 import PokemonPrueba from './modules/pokemon/pages/PokemonPrueba.vue';
import PokemonPresentacion from './modules/pokemon/pages/PokemonPresentacion.vue';
</script>
