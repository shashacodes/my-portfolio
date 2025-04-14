'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { FC } from 'react'

interface GalleryProps {
  images: string[]
}

const ProjectGallery: FC<GalleryProps> = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={30}
      className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden"
    >
      {images.map((src, idx) => (
        <SwiperSlide key={idx}>
          <Image
            src={src}
            alt={`Slide ${idx + 1}`}
            width={800}
            height={400}
            className="object-cover w-full h-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ProjectGallery
