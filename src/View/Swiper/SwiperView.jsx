import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './swipe.styles.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default function SwiperView () {
  return (
    <>
    <div id="main-container" className='box is-fullheight'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://www.kordata.mx/wp-content/uploads/2021/03/Kordata-software-administrativo-promociones-ventas-0.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.intertek.com.mx/uploadedImages/wwwintertekcom/Industries/Products_and_Retail/_Images/textiles-apparel%20homepage%20banner.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://static01.nyt.com/images/2016/03/26/business/26athleisure1/26athleisure1-articleLarge.jpg?quality=75&auto=webp&disable=upscale" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.hogarmania.com/archivos/202106/por-que-deberias-lavar-desinfectar-ropa-segunda-mano-productos-caseros-1280x720x80xX.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}
