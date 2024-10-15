<script setup>
const menus = useMenu()
</script>
<template>
    <div>
        <header>
            <div class="px-6 lg:px-10 py-3">
                <nav class="flex justify-between items-center gap-5">
                    <div class="h-14 lg:mr-32">
                        <img class="h-full w-auto" src="https://gtaconstruction.co.id/assets/themes/webarq/images/material/logo.png" alt="">
                    </div>
                    <div class="flex gap-3 lg:gap-10 items-center ">
                        <div class="menu w-full ">
                        <ul class="flex items-center justify-between gap-3 lg:gap-20 ">
                            <li v-for="item in menus.menus" :key="item" class="font-semibold">
                                <NuxtLink to="/"> {{ item.name }} </NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <button class="text-brand-100 w-8 h-8  flex items-center justify-center rounded-full p-2 text-2xl border border-bramd-100 hover:bg-brand-700 duration-300"> <iconsSearch /> </button>
                    </div>s
                </nav>
            </div>
        </header>

    </div>
</template>
<style scoped>
.menu{
    li{
        a{
            @apply hover:text-red-500  duration-300 uppercase font-semibold;
        }
    }
}
</style>