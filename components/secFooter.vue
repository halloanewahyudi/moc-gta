<script setup>
const menus = useMenu()
</script>
<template>
    <div class="border-t border-brand-900">
        <div class="container pt-20 pb-10 px-6 text-brand-200">
            <img class="mb-5 w-36"
            src="https://gtaconstruction.co.id/assets/themes/webarq/images/material/logo.png" alt="">
            <div class="grid grid-cols-1 lg:grid-cols-3">
                <div>
                        <div>
                            <h2 class="font-bold  text-xl ">PT Guna Teguh Abadi</h2>
Wisma MRA <br>
12th Floor / Unit C
JL. TB Simatupang  <br>
Kav. 19 RT 07. RW 09 <br>
Cilandak Barat <br>
Jakarta Selatan 12430 <br>
Phone:(+62) (21) 2940 0201 <br>
Fax:(+62) (21) 2940 0203 <br>

Email: info@gtaconstruction.co.id
                        </div>
                </div>
                <div class="flex flex-col ga-4">
                    <h2 class="font-bold  text-xl "> Link </h2>
                    <ul class="flex flex-col gap-3 ">
                        <li v-for="item in menus.menus" :key="item" class="font-semibold">
                            <NuxtLink to="/"> {{ item.name }} </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col gap-5 justify-end items-end">
<div class="flex gap-4 items-center text-2xl">
<IconsYoutube/>
<IconsIinstagram />
<IconsLinkedin />
</div>
<p class="text-sm">Copyright © 2024 PT. Guna Teguh Abadi.</p>
                </div>
            </div>
        </div>

    </div>
</template>