import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import React from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './style.css';
import Rating from '../../components/Rating';
import Review from '../../components/Review';

export default function Product() {
  const mock = {
    id: 21,
    title: 'Sleek Granite Shirt',
    price: 402,
    description:
      'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
    images: [
      'https://api.lorem.space/image?w=640&h=480&r=4952',
      'https://api.lorem.space/image?w=640&h=480&r=6368',
      'https://api.lorem.space/image?w=640&h=480&r=2215'
    ],
    creationAt: '2023-01-14T01:54:02.000Z',
    updatedAt: '2023-01-14T01:54:02.000Z',
    category: {
      id: 5,
      name: 'Others',
      image: 'https://api.lorem.space/image?w=640&h=480&r=379',
      creationAt: '2023-01-14T01:54:02.000Z',
      updatedAt: '2023-01-14T01:54:02.000Z'
    }
  };
  const mockReviews = [
    {
      id: 1,
      score: 5,
      title: 'Comment Title 2',
      comment: 'Comment Lorem ipsum dolor sit amet. ',
      img: 'https://thispersondoesnotexist.com/image',
      date: new Date('2023/01/14')
    },
    {
      id: 1,
      score: 3,
      title: 'Comment Title',
      comment:
        'Comment Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'https://thispersondoesnotexist.com/image',
      date: new Date('2023/01/05')
    }
  ];

  return (
    <div className="productdetail_container">
      <Link to={'/'}>Catalog </Link> &gt; {mock.title}
      <main>
        <div className="productswiper_container">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            centeredSlides={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {mock.images.map((image, index) => {
              return (
                <SwiperSlide key={image}>
                  <img src={image} alt={mock.title + index} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <section className="productdetail_info">
          <header className="productdetail_header">
            <section>
              <h2>{mock.title}</h2>
              <Rating score={4} />
              <h3>$ {mock.price.toFixed(2)}</h3>
            </section>
            <button>+ add to cart</button>
          </header>
          <section className="productdetail_details">
            <p>{mock.description}</p>
            <h2>Reviews</h2>
            {mockReviews.map(review => {
              return (
                <React.Fragment key={review.id}>
                  <Review
                    score={review.score}
                    title={review.title}
                    comment={review.comment}
                    img={review.img}
                    date={review.date}
                  />
                </React.Fragment>
              );
            })}
          </section>
        </section>
      </main>
    </div>
  );
}
