<script setup>
const home = useHome()
const secThree = home.sectionThree
import { useMediaControls } from '@vueuse/core'
const video = ref()
const { playing, currentTime, duration, volume } = useMediaControls(video, {
    src: secThree.video,
})

const vid = ref(false)
const openvid = () => {
    vid.value = true; // Menandakan video dibuka
    setTimeout(() => {
        playing.value = true
    }, 500);
    console.log(playing.value);
}
const closevid = () => {
    vid.value = false; // Menandakan video dibuka
    setTimeout(() => {
        playing.value = false
    }, 500);
}

const progress = computed(() => {
    const proses = (currentTime.value / duration.value) * 100
    return proses > 100 ? 100 : proses  // agar tidak melebihi 100%
})
</script>

<template>
    <div class="flex flex-col gap-16">
        <div class="max-w-screen-md mx-auto flex flex-col gap-5 text-xl pl-10 border-l-8 border-red-500">
            <h2 class="section-title">
                {{ secThree.title }}
            </h2>
            <p> {{ secThree.description }}</p>
        </div>
        <div class="grid grid-cols-1  lg:grid-cols-2 items-center justify-center min-h-screen">
            <div v-if="vid"
                class="popup-video fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center z-30 bg-brand-950">
                <div v-motion :initial="{
                    opacity: 0,
                    scale: 0.4
                }" :enter="{
                        opacity: 1,
                        scale: 1
                    }" :delay="200" :duration="700" class="max-w-[980px] w-full mx-auto relative">
                    <button @click="closevid"
                        class="absolute z-40 top-0 right-0 p-2 bg-red-500 text-brand-50 cursor-pointer"> Close </button>
                    <video ref="video" />
                    <div class="flex justify-between items-center gap-5 py-2 px-4 bg-red-500 text-brand-50">
                        <button class="shrink-0" @click="playing = !playing">
                            Play / Pause
                        </button>
                        <div class="h-1  bg-brand-50 block " :style="{ width: `${progress}%`, }"></div>
                    </div>

                </div>
            </div>
            <div v-else class="relative">
                <div class="relative lg:left-1/2 z-10">
                    <button @click="openvid"
                        class="absolute top-1/2  left-1/2 right-1/2 -translate-x-1/2  z-20 text-4xl w-16 h-16 flex justify-center items-center bg-red-500 rounded-full">
                        <IconsPlay />
                    </button>
                    <img :src="secThree.image_video" alt="" class=" object-cover  w-full h-auto">
                </div>

            </div>
            <div class="h-full ">
                <img :src="secThree.image" alt="" class="w-full lg:h-screen object-cover opacity-35">
            </div>
        </div>


    </div>
</template>