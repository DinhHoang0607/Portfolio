import React from "react";
import "./testimonials.css";
import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import AVT3 from "../../assets/avatar3.jpg";
import AVT4 from "../../assets/avatar4.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { A11y, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  return (
    <section id="testimmonials">
      <h5>Review from clients</h5>
      <h2>Testmonials</h2>
      <Swiper className="container testmonials__container"
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        sli
      >
        <SwiperSlide className="testmonial">
          <div className="client__avatar">
            <img
              src={
                "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/276322647_1940526332798756_4597193119045905148_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=zkiq3P4vEgYAX8Bk2-I&_nc_ht=scontent.fhan2-3.fna&oh=00_AT-IspgPAc2-R5c-qluIr0JcG93giM5GmccdyR3ulejswg&oe=62444357"
              }
              alt="avt1"
            />
          </div>
          <h5 className="client__name">Hoang Dinh</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            harum et incidunt hic culpa consequuntur, magni facilis officiis,
            fugiat laboriosam obcaecati corporis dolores ut necessitatibus
            aliquid rerum illum ab cupiditate!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testmonial">
          <div className="client__avatar">
            <img
              src={
                "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/277175119_1940526322798757_1748997659252611583_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=1_Jbqk_U9PUAX9WfZs2&_nc_ht=scontent.fhan2-2.fna&oh=00_AT9lUfqp2mlZbd0Jp4PJUTp98QZyPatynJouudoWvv7d2Q&oe=62433913"
              }
              alt="avt2"
            />
          </div>
          <h5 className="client__name">Huyn Huyn</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            harum et incidunt hic culpa consequuntur, magni facilis officiis,
            fugiat laboriosam obcaecati corporis dolores ut necessitatibus
            aliquid rerum illum ab cupiditate!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testmonial">
          <div className="client__avatar">
            <img
              src={
                "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/275270886_1929153927269330_837384523474093125_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=z-u7CjDsBtUAX9Ba0ee&_nc_ht=scontent.fhan2-2.fna&oh=00_AT9Ii8sDP3HFr80n8Fzucx1GatpYa7r8bRqRLBUTosJZQg&oe=6242CF4D"
              }
              alt="avt3"
            />
          </div>
          <h5 className="client__name">Hoang Dinh</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            harum et incidunt hic culpa consequuntur, magni facilis officiis,
            fugiat laboriosam obcaecati corporis dolores ut necessitatibus
            aliquid rerum illum ab cupiditate!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testmonial">
          <div className="client__avatar">
            <img
              src={
                "https://scontent.fhan2-2.fna.fbcdn.net/v/t1.15752-9/273985204_540215110773454_8690293759802643594_n.png?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=K-yH_0J85HwAX-DzpDE&_nc_ht=scontent.fhan2-2.fna&oh=03_AVLjTmCjNpzSlqpWpFz_M2iOn3E5Q24fR5RykLA4ykneIw&oe=6264B1AA"
              }
              alt="avt4"
            />
          </div>
          <h5 className="client__name">Huyn Huyn</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            harum et incidunt hic culpa consequuntur, magni facilis officiis,
            fugiat laboriosam obcaecati corporis dolores ut necessitatibus
            aliquid rerum illum ab cupiditate!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
