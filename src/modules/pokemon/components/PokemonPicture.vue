<template>
 <section class="flex flex-col justify-center items-start bg-[url('/src/assets/img/imagen_1.webp')] bg-no-repeat bg-top bg-contain w-full max-w-[500px] h-[315px]">
    <div class="flex justify-start items-start">
      <img 
      :class="`
         ${animacionPokemon} 
         style-little 
         sm:w-[189px] ml-[10%]
         md:ml-[10%]
         lg:w-[189px]
      `" 
      :src="pokemonImage" 
      />  
   </div>
 </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
   pokemonId: number;
   showPokemon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
   showPokemon: false,
});

const pokemonImage = computed(() => 
   `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`
);

const emit = defineEmits(['mostrarPokemon'])

const animacionPokemon = computed(() => {
   emit('mostrarPokemon', props.showPokemon);
   return props.showPokemon ? 'fade-in transition delay-500 duration-500 brightness-0 h-[200px] w-[200px] items-start flex transform scale-110 brightness-110 ' 
   : 'brightness-0 scale-50 h-[200px] w-[200px] items-start flex';
});

</script>

<style scoped>
   img {
      user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
      display: block;
   }

   .fade-in {
      animation: fadeIn 0.5s ease-in-out;
   }

   @keyframes fadeIn {
      from {
         opacity: 0;
         transform: scale(0.5);
      }
      to {
         opacity: 1;
         transform: scale(1);
      }
   }

   @media (min-width:459px) and (max-width:639px) {
      .style-little  {
         @apply w-[65%] ml-[45px]
      }
   }

   @media (min-width:344px) and (max-width:458px){
      .style-little  {
         @apply w-[50%] ml-[25%] mb-[25%]
      }
   }

   @media (min-width:319px) and (max-width:343px) {
      .style-little  {
         @apply w-[40%] ml-[30px] mb-[35%]
      }
   }



   
</style>