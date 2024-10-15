<script setup>
// https://ori.clean.web.id/wp-json/wp/v2/project?_embed
const { data, status, error, refresh, clear } = await useFetch('https://ori.clean.web.id/wp-json/wp/v2/project?_embed', {
})
</script>
<template>
    <div>
        <div class="grid grid-cols-1 lg:grid-cols-3">
            <div>

            </div>
            <div class="col-span-2">
                <Swiper
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slides-per-view="4"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide v-for="slide in data" :key="slide">
      <strong>{{ slide.title.rendered }}</strong>
    </SwiperSlide>
  </Swiper>
            </div>
        </div>
    </div>
</template>