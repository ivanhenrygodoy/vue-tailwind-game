<template>
   <section class="flex flex-col">
     <button v-for="{name, id} in options" :key="id" 
     :class="[
       'capitalize disabled:shadow-none disabled:bg-gray-100', 
       {
         correct: id === correctAnswer && blockSelect,
         incorrect: id !== correctAnswer && blockSelect
       }
      ]"
     @click="$emit('selectedOption', id)" :disabled="blockSelect">
      {{ name }}

     </button>
   </section>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces';

interface Props {
   options: Pokemon[];
   blockSelect: boolean;
   correctAnswer: number;
}

defineProps<Props>();

defineEmits<{
   selectedOption: [id: number];
}>();

</script>

<style scoped>
 button {
    @apply bg-white shadow-md rounded-lg p-2 m-2 cursor-pointer w-40 text-center transition-all hover:bg-gray-100;
  }

  .correct {
   @apply bg-blue-500 text-white;
  }

  .incorrect {
   @apply bg-red-100 opacity-75;
  }

</style>