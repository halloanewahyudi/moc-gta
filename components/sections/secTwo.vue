<script setup>
const home = useHome()
const sectwo = home.sectionTwo
</script>
<template>
    <div class="max-w-screen-2xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-5 lg:gap-10 items-center">
            <div class="col-span-2">
                <img :src="sectwo.image" alt="" class="w-full h-[480px] lg:h-screen object-cover">
            </div>
            <div class="col-span-3 flex flex-col justify-center items-center p-6 ">
                <div class="max-w-[480px]  flex flex-col gap-5 text-xl">
                    <h2 class="section-title">{{ sectwo.title }} </h2>
                    <p class="">{{ sectwo.description }} </p>
                    <ul class="flex flex-col gap-3">
                        <li v-for="item in sectwo.services" :key="item">
                            <NuxtLink to="/"  class="flex gap-2 items-center p-2 hover:bg-red-500 hover:text-brand-50 duration-300 max-w-max group">  <IconsChevronRight class="group-hover:translate-x-2 duration-300"/>  {{ item }} </NuxtLink>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</template>