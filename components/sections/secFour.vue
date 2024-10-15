<script setup>
// https://ori.clean.web.id/wp-json/wp/v2/project?_embed
const { data, status, error, refresh, clear } = await useFetch('https://ori.clean.web.id/wp-json/wp/v2/project?_embed', {
})

const select = ref(null)
const buka = ref([]);
const bukapost = (index) => {
    buka.value[index] = !buka.value[index]
}
</script>
<template>
    <div>
        <div class="grid grid-cols-1 lg:grid-cols-3">
            <div class="col-span-2">
                <Swiper :modules="[SwiperAutoplay]" :space-between="20" :slides-per-view="3" :speed="1500" :loop="true"
                    :autoplay="{
                        delay: 3000,
                        disableOnInteraction: true,
                    }"
                    :navigation="{
                          nextEl: '.next',
                          prevEl: '.prev',
                    }"
                    >
                    <SwiperSlide v-for="(slide, index) in data" :key="index" class="w-full ">
                        <div class="flex flex-col gap-0">
                            <div class="flex flex-col gap-0 bg-brand-700">
                                <img :src="slide._embedded['wp:featuredmedia'][0].source_url" alt=""
                                class="w-full h-[240px] object-cover">
                                <div class="flex items-center gap-3 justify-between pl-2">
                                    <span class="font-semibold " v-html="slide.title.rendered "></span>
                                    <button @click="bukapost(index)" class="p-2 bg-red-500 text-blue-50"> buka</button>
                                </div>
                            </div>
                            <div v-if="buka[index]" class="p-4 bg-brand-100 text-brand-950">
                                <div class="grid grid-cols-5">
                                    <span class="col-span-2"> Client</span>
                                    <div class="col-span-3" v-html="slide.acf.client.value_formatted"></div>
                                </div>
                                <div class="grid grid-cols-5">
                                    <span class="col-span-2"> Location</span>
                                    <div class="col-span-3" v-html="slide.acf.location.value_formatted"></div>
                                </div>
                                <div class="grid grid-cols-5">
                                    <span class="col-span-2"> Product</span>
                                    <div class="col-span-3" v-html="slide.acf.product.value_formatted"></div>
                                </div>
                                <div class="grid grid-cols-5">
                                    <span class="col-span-2"> Application</span>
                                    <div class="col-span-3" v-html="slide.acf.application.value_formatted"></div>
                                </div>
                                <div class="grid grid-cols-5">
                                    <span class="col-span-2"> Year</span>
                                    <div class="col-span-3" v-html="slide.acf.year.value_formatted"></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div class="col-span-1">
            <div class="p-6 lg:p-10 flex flex-col gap-4">
               
                <h2 class="section-title">
                    Portfolio
                </h2>
                <p class="text-xl">We have contributed in construction of many big strategic projects across Indonesia</p>
             <div class="flex items-center">
                <button class="p-4 bg-red-500 text-brand-50 text-2xl prev">
                    <IconsArrowLeft/>
                </button>
                <button class="p-4 bg-red-500 text-brand-50 text-2xl next">
                    <IconsArrowRight/>
                </button>
             </div>
                </div>
            </div>
           
        </div>
    </div>
</template>