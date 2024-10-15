<script setup>
const home = useHome()
const cover = home.hero

</script>
<template>
    <div>
        <div class="cover">
            <div class="p-6 lg:px-10 max-w-screen-2xl mx-auto">
                <div class="flex flex-wrap flex-wrap-reverse items-center  min-h-[calc(100vh-100px)]">
                    <div class="flex flex-col gap-5 justify-center items-center w-full lg:w-1/2">
                        <div class="max-w-[480px] flex flex-col gap-5 ">
                            <h2 class="section-title"> {{ cover.title }}</h2>
                            <p class="text-xl"> {{ cover.description }}</p>
                            <NuxtLink to="/" class="py-3 px-6 bg-brand-700 text-brand-50 hover:bg-brand-800 font-semibold self-start group flex gap-2 items-center  "> Read more
                                <IconsChevronRight class="group-hover:translate-x-2 duration-300" />
                            </NuxtLink>
                        </div>
                    
                    </div>
                    <div class="p-6  w-full lg:w-1/2">
                        <img :src="cover.image" alt="" class="w-full h-auto">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>