<template>
<section class="flex w-full items-center justify-center">
    <div class="hidden lg:grid grid-cols-4 w-[60%] grid-rows-4 p-10 h-full m-15 items-start">
        <div class="relative flex flex-col bg-white col-start-1 row-start-1 col-span-4 overflow-hidden">
            <img class="object-cover object-center w-full h-[290px] scale-110 transition-transform duration-500 ease-in-out hover:scale-100 border-solid border-4 border-gray-500 " src="/src/assets/img/imagen_4.jpg">
              <div class="absolute top-0 right-0 p-4 text-white italic">
                <h2>
                    New York, EEUU
                </h2>
              </div>
        </div>

        <div class="flex flex-col bg-white col-start-2 row-start-2 row-span-2 col-end-4 overflow-hidden">
            <video class="object-cover object-center w-full h-[295px] scale-110 transition-transform duration-500 ease-in-out hover:scale-100 border-solid border-4 border-gray-500" controls autoplay muted loop>
                <source src="/src/assets/videos/video_1.mp4" type="video/mp4">
                Tu navegador no soporta el video.
            </video>
        </div>

        <div class="flex flex-col bg-white col-start-1 row-start-2 col-end-1 row-span-3 overflow-hidden">
            <img class="object-cover object-center w-full h-[290px] scale-110 transition-transform duration-500 ease-in-out hover:scale-100 border-solid border-4 border-gray-500" src="/src/assets/img/imagen_5.jpg">
        </div>

        <div class="flex flex-col bg-white col-start-4 row-start-2 col-end-4 overflow-hidden">
            <img class="object-cover object-center w-full h-[290px] scale-110 transition-transform duration-500 ease-in-out hover:scale-100 border-solid border-4 border-gray-500" src="/src/assets/img/imagen_8.jpg">
        </div>

        <div class="relative flex flex-col bg-white col-start-1 row-start-3 col-span-4 overflow-hidden">
           <img class="object-cover object-center w-full h-[290px] scale-110 transition-transform duration-500 ease-in-out hover:scale-100 border-solid border-4 border-gray-500" src="/src/assets/img/imagen_10.jpg">
                <div class="absolute top-0 right-0 p-4 text-black italic">
                    Honolulu, EEUU
                </div>
        </div>

        <div class="flex flex-col bg-white col-start-3 row-start-4 col-span-3 overflow-hidden">
           <video class="object-cover object-center w-full h-[195px] scale-110 transition-transform duration-500 ease-in-out hover:scale-100 border-solid border-4 border-gray-500" controls autoplay muted loop>
               <source src="/src/assets/videos/video_2.mp4" type="video/mp4">
               Tu navegador no soporta el video.
           </video>
        </div>
        
        <div class="flex flex-col bg-white col-start-1 row-start-4 col-span-2 overflow-hidden">
           <img class="object-cover object-center w-full h-[195px] scale-110 transition-transform duration-500 ease-in-out hover:scale-100 border-solid border-4 border-gray-500" src="/src/assets/img/imagen_12.jpg">
        </div>
    </div>


    <div class="lg:hidden flex flex-wrap gap-5 justify-center items-start w-[80%] max-w-[1200px] h-full m-10 ">
        <div class="relative flex flex-col w-full sm:w-[40%] lg:w-[20%] overflow-hidden">
            <img class="object-cover object-center w-full h-[289px] scale-110 transition-transform duration-500 ease-in-out hover:scale-100 border-solid border-4 border-gray-500" src="/src/assets/img/imagen_4.jpg">
            <div class="absolute bottom-0 right-0 p-4 text-white italic">
                <h2>
                    New York, EEUU
                </h2>
            </div>
        </div>

        <div class="flex flex-col w-full sm:w-[40%] lg:w-[20%] overflow-hidden">
            <video class="object-cover object-center w-full h-[295px] scale-110 transition-transform duration-500 ease-in-out hover:scale-100 border-solid border-4 border-gray-500" controls autoplay muted loop>
                <source src="/src/assets/videos/video_1.mp4" type="video/mp4">
                Tu navegador no soporta el video.
            </video>
        </div>

        <div class="flex flex-col w-full sm:w-[40%] lg:w-[20%] overflow-hidden">
            <img class="object-cover object-center w-full h-[290px] scale-110 transition-transform duration-500 ease-in-out hover:scale-100 border-solid border-4 border-gray-500" src="/src/assets/img/imagen_5.jpg">
        </div>

        <div class="flex flex-col w-full sm:w-[40%] lg:w-[20%] overflow-hidden">
            <img class="object-cover object-center w-full h-[290px] scale-110 transition-transform duration-500 ease-in-out hover:scale-100 border-solid border-4 border-gray-500" src="/src/assets/img/imagen_8.jpg">
        </div>

        <div class="relative flex flex-col w-full sm:w-[40%] lg:w-[20%] overflow-hidden">
           <img class="object-cover object-center w-full h-[290px] scale-110 transition-transform duration-500 ease-in-out hover:scale-100 border-solid border-4 border-gray-500" src="/src/assets/img/imagen_10.jpg">
            <div class="absolute top-0 right-0 p-4 text-black italic">
                <h2>
                      Honolulu,EEUU
                </h2>
            </div>
        </div>

        <div class="flex flex-col w-full sm:w-[40%] lg:w-[20%] overflow-hidden">
           <img class="object-cover object-center w-full h-[290px] scale-110 transition-transform duration-500 ease-in-out hover:scale-100 border-solid border-4 border-gray-500" src="/src/assets/img/imagen_11.jpg">
        </div>

        <div class="flex flex-col w-full sm:w-[40%] lg:w-[20%] overflow-hidden">
           <video class="object-cover object-center w-full h-[290px] scale-110 transition-transform duration-500 ease-in-out hover:scale-100 border-solid border-4 border-gray-500 " controls autoplay muted loop>
               <source src="/src/assets/videos/video_2.mp4" type="video/mp4">
               Tu navegador no soporta el video.
           </video>
        </div>
    </div>

</section>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

</style>