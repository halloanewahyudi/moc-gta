import { Title } from "#build/components"


export const useHome = () => {
    const hero ={
        title:' SOLUTIONS For ANY HEAVY LIFTING OR TRANSPORT CHALLENGE',
        description:'We help the world to grow safely and efficiently, moving towards a sustainable future.',
        image:'/images/image-cover.png'
    } 
    const sectionTwo = {
        title:'From our humble beginnings',
        description:'we now employ more than 1200 employees, across several specialist divisions and operate across the whole Archipelago of Indonesia for the following services',
        services:[
            'Heavy Lifting & Haulage',
            'Mechanical Work',
            'Steel Structure Work',
            'Maintenance',
            'Piping Work'
        ],
        image:'/images/crane.jpg',
    }

    const sectionThree = {
        title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description:'Etiam convallis libero sed semper finibus. Fusce vestibulum et tortor ut tristique. Fusce ex dolor, ultricies sit amet odio vel, hendrerit dapibus quam.',
        image:'/images/crane2.jpg',
        video:'/images/video.mp4',
        image_video:'/images/img-video.jpg'
    }
    return {
         hero,
         sectionTwo,
         sectionThree
    }
}