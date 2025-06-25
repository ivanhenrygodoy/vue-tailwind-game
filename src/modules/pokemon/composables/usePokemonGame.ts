import { computed, onMounted, ref } from 'vue'
import { GameStatus, type Pokemon, type PokemonListResponse } from '../interfaces'
import { pokemonApi } from '../api/pokemonApi'
import confetti from 'canvas-confetti'

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing)
  const pokemons = ref<Pokemon[]>([])
  const pokemonOption = ref<Pokemon[]>([])
  const isLoading = computed(() => pokemons.value.length === 0)
  const randomPokemon = computed(() => {
    const randomIndex = Math.floor(Math.random() * pokemonOption.value.length)
    return pokemonOption.value[randomIndex]
  })

  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=151')

    const pokemonArray = response.data.results.map((pokemon) => {
      const urlParts = pokemon.url.split('/')
      const id = +(urlParts[urlParts.length - 2] ?? 0)

      return {
        name: pokemon.name,
        id: id,
      }
    })

    return pokemonArray.sort(() => Math.random() - 0.5)
  }

  const playSound = () => {
    // Intentamos varias rutas posibles para el archivo de audio
    const audio = new Audio();
    audio.src = '/src/assets/sounds/restart.mp3.mp3'; // Ruta actual
    
    // También intentamos con la ruta relativa
    if (!audio.src) {
      audio.src = new URL('../assets/sounds/restart.mp3.mp3', import.meta.url).href;
    }
    
    // Añadimos un volumen alto para asegurarnos de que se escuche
    audio.volume = 1.0;
    audio.play().catch(error => {
      console.error('Error al reproducir el audio:', error);
    });
    return audio;
  };

  const getNextRound = (howMany: number = 4) => {
    const audio = playSound();
    gameStatus.value = GameStatus.Playing
    pokemonOption.value = pokemons.value.slice(0, howMany)
    pokemons.value = pokemons.value.slice(howMany)
    return audio;
  };

  const checkAnswer = (id: number) => {
    const hasWon = randomPokemon.value.id === id

    if (hasWon) {
      gameStatus.value = GameStatus.Won
      confetti({
        particleCount: 300,
        spread: 150,
        origin: { y: 0.6 },
      })
      return
    }

    gameStatus.value = GameStatus.Lost
  }

  onMounted(async () => {
    await new Promise((r) => setTimeout(r, 1000))
    pokemons.value = await getPokemons()
    getNextRound()
    console.log('isLoading:', isLoading.value)
    console.log('randomPokemon:', randomPokemon.value)
    console.log(randomPokemon.value)
  })

  return {
    gameStatus,
    isLoading,

    // Metodos
    getNextRound,
    pokemonOption,
    randomPokemon,
    checkAnswer,
  }
}
