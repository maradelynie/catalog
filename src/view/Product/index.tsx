import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './style.css';

import Loading from '../../components/Loading';
import Rating from '../../components/Rating';
import Review from '../../components/Review';
import { ProductI, ReviewI } from '../../models/interfaces';
import { getProducts, getProductsReview } from '../../sevices';

export default function Product() {
  const { productId } = useParams();

  const productData = useQuery<ProductI>(['product', productId], () =>
    getProducts(productId || '')
  );
  const reviewData = useQuery<ReviewI[]>(['review', productId], () =>
    getProductsReview(productId || '')
  );

  return (
    <div className="productdetail_container">
      <Link to={'/'}>Catalog </Link> &gt; {productData.data?.title}
      {productData.data ? (
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
              {productData.data.images.map((image, index) => {
                return (
                  <SwiperSlide key={image}>
                    <img src={image} alt={productData.data.title + index} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <section className="productdetail_info">
            <header className="productdetail_header">
              <section>
                <h2>{productData.data.title}</h2>
                <Rating score={4} />
                <h3>$ {productData.data.price.toFixed(2)}</h3>
              </section>
              <button>+ add to cart</button>
            </header>
            <section className="productdetail_details">
              <p>{productData.data.description}</p>
              <h2>Reviews</h2>
              {reviewData.data ? (
                reviewData.data.map(review => {
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
                })
              ) : (
                <Loading
                  error={reviewData.isError}
                  loading={reviewData.isLoading}
                />
              )}
            </section>
          </section>
        </main>
      ) : (
        <Loading error={productData.isError} loading={productData.isLoading} />
      )}
    </div>
  );
}
