import { Title } from "#build/components"


export const useHome = () => {
    const hero ={
        title:'THE LEADING CONSTRUCTION COMPANY IN INDONESIA',
        description:'Supporting Indonesia’s continuous development',
        image:'/images/image-cover.png'
    } 
    
    const sectionTwo = {
        title:'Services',
        description:'From our humble beginnings in 1994, We now employ more than 1200 employees, across several specialist divisions and operate across the whole Archipelago of Indonesia for the following services:',
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
        title:'Video Profile.',
        description:'We have contributed in construction of many big strategic projects across Indonesia',
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