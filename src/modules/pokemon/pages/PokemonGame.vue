<template>
   <section :class="isLoading || randomPokemon?.id === null ? 'flex flex-col justify-center items-center font-bold w-screen h-screen' : 'hidden'">

    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokémons</h3>
   </section>

   <section :class="!isLoading || randomPokemon?.id !== null ? 'flex flex-col justify-center items-center w-screen h-screen font-bold' : 'hidden'">
     <h1 class="m-3">¿Quién es este Pokémon?</h1>
     <div class="flex flex-col items-center">
        <button
         @click="handleButtonClick"
         :class="gameStatus!== GameStatus.Playing ? `bg-green-600 text-white p-2 rounded-md transition-colors duration-1000 delay-700 fade-in mb-10`: `hidden`"
         >
           ¿Jugar de nuevo?
        </button>
     </div>
     <!-- Pokémon Picture -->
      <PokemonPicture  
        :pokemon-id="randomPokemon?.id" 
        :show-pokemon="gameStatus 
        !== GameStatus.Playing" 
         @mostrarPokemon="mostrarPokemon"
      />

     <!-- Pokémon Options -->
      <PokemonOptions 
       :options="options" 
       @selected-option="checkAnswer"
       :block-select="gameStatus !== GameStatus.Playing"
        :correct-answer="randomPokemon?.id"
      />
   </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces';

const { gameStatus, isLoading, randomPokemon, pokemonOption: options, checkAnswer, getNextRound  } = usePokemonGame();

const prueba = ref('');
const mostrarPokemon = (show: boolean, audio?: HTMLAudioElement) => {
  if (show) {
    // Si hay audio, esperamos a que termine de reproducirse
    if (audio) {
      audio.onended = () => {
        prueba.value = 'fade-in transition delay-500 duration-500';
      };
    } else {
      prueba.value = 'fade-in transition delay-500 duration-500';
    }
  } else {
    prueba.value = 'brightness-0';
  }
};

// Manejar el evento click del botón
const handleButtonClick = () => {
  const audio = getNextRound(5);
  
  // Manejar errores de audio
  if (!audio) {
    console.error('No se pudo obtener el audio');
    mostrarPokemon(true);
    return;
  }
  
  // Asegurarnos de que el audio se pueda reproducir
  audio.onplay = () => {
    mostrarPokemon(true, audio);
  };
  
  audio.onerror = (error) => {
    console.error('Error al reproducir el audio:', error);
    mostrarPokemon(true);
  };
};

</script>