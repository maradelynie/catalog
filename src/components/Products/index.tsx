import React from 'react';
import {
  faMagnifyingGlass,
  faList,
  faArrowDownWideShort,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputText from '../InputText';

import './style.css';
import InputSelect from '../InputSelect';
import IconButton from '../IconButton';
import ChipButton from '../ChipButton';
import ProductCard from '../ProductCard';

export default function Products() {
  const mock = [
    {
      id: 3,
      title: 'Ergonomic Rubber Pants',
      price: 102,
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      images: ['https://api.escuelajs.co/api/v1/files/80cc.png'],
      creationAt: '2023-01-14T01:54:02.000Z',
      updatedAt: '2023-01-14T20:55:18.000Z',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=8455',
        creationAt: '2023-01-14T01:54:02.000Z',
        updatedAt: '2023-01-14T21:07:56.000Z'
      }
    },
    {
      id: 4,
      title: 'Rustic Steel Salad',
      price: 20,
      description: 'The Nagasaki Lander is th',
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=616',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=5126',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=2986'
      ],
      creationAt: '2023-01-14T01:54:02.000Z',
      updatedAt: '2023-01-14T18:51:25.000Z',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=6181',
        creationAt: '2023-01-14T01:54:02.000Z',
        updatedAt: '2023-01-14T01:54:02.000Z'
      }
    },
    {
      id: 5,
      title: 'Testiing',
      price: 200,
      description: 'Practical Steel Sausages',
      images: [
        'https://api.lorem.space/image?w=640&h=480&r=3887',
        'https://api.lorem.space/image?w=640&h=480&r=9216',
        'https://api.lorem.space/image?w=640&h=480&r=2176'
      ],
      creationAt: '2023-01-14T01:54:02.000Z',
      updatedAt: '2023-01-14T18:52:30.000Z',
      category: {
        id: 5,
        name: 'Others',
        image: 'https://api.lorem.space/image?w=640&h=480&r=379',
        creationAt: '2023-01-14T01:54:02.000Z',
        updatedAt: '2023-01-14T01:54:02.000Z'
      }
    },
    {
      id: 6,
      title: 'Small Fresh Hat',
      price: 700,
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      images: [
        'https://api.lorem.space/image/watch?w=640&h=480&r=1743',
        'https://api.lorem.space/image/watch?w=640&h=480&r=9530',
        'https://api.lorem.space/image/watch?w=640&h=480&r=6276'
      ],
      creationAt: '2023-01-14T01:54:02.000Z',
      updatedAt: '2023-01-14T21:09:11.000Z',
      category: {
        id: 2,
        name: 'Electronics',
        image: 'https://api.lorem.space/image/watch?w=640&h=480&r=8038',
        creationAt: '2023-01-14T01:54:02.000Z',
        updatedAt: '2023-01-14T01:54:02.000Z'
      }
    },
    {
      id: 7,
      title: 'Licensed Fresh Salad',
      price: 30,
      description:
        'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=644',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=6950',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=102'
      ],
      creationAt: '2023-01-14T01:54:02.000Z',
      updatedAt: '2023-01-14T07:43:32.000Z',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=6181',
        creationAt: '2023-01-14T01:54:02.000Z',
        updatedAt: '2023-01-14T01:54:02.000Z'
      }
    },
    {
      id: 8,
      title: 'Handmade Plastic shoes',
      price: 504,
      description:
        'ok  goalkeeper gloves are ergonomically designed to give easy fit',
      images: ['https://api.escuelajs.co/api/v1/files/a832.png'],
      creationAt: '2023-01-14T01:54:02.000Z',
      updatedAt: '2023-01-14T20:03:10.000Z',
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1417',
        creationAt: '2023-01-14T01:54:02.000Z',
        updatedAt: '2023-01-14T01:54:02.000Z'
      }
    },
    {
      id: 9,
      title: 'Refined Wooden Shirt',
      price: 717,
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=6987',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=4458',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=9464'
      ],
      creationAt: '2023-01-14T01:54:02.000Z',
      updatedAt: '2023-01-14T01:54:02.000Z',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=8455',
        creationAt: '2023-01-14T01:54:02.000Z',
        updatedAt: '2023-01-14T21:07:56.000Z'
      }
    },
    {
      id: 10,
      title: 'Fantastic Rubber Ball',
      price: 624,
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      images: [
        'https://api.lorem.space/image/watch?w=640&h=480&r=9744',
        'https://api.lorem.space/image/watch?w=640&h=480&r=4702',
        'https://api.lorem.space/image/watch?w=640&h=480&r=1931'
      ],
      creationAt: '2023-01-14T01:54:02.000Z',
      updatedAt: '2023-01-14T01:54:02.000Z',
      category: {
        id: 2,
        name: 'Electronics',
        image: 'https://api.lorem.space/image/watch?w=640&h=480&r=8038',
        creationAt: '2023-01-14T01:54:02.000Z',
        updatedAt: '2023-01-14T01:54:02.000Z'
      }
    },
    {
      id: 11,
      title: 'Practical Concrete Sausages',
      price: 330,
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      images: [
        'https://api.lorem.space/image?w=640&h=480&r=6533',
        'https://api.lorem.space/image?w=640&h=480&r=3358',
        'https://api.lorem.space/image?w=640&h=480&r=6180'
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
    },
    {
      id: 12,
      title: 'Modern Concrete Fish',
      price: 601,
      description:
        'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=8934',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=8697',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=3433'
      ],
      creationAt: '2023-01-14T01:54:02.000Z',
      updatedAt: '2023-01-14T01:54:02.000Z',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=6181',
        creationAt: '2023-01-14T01:54:02.000Z',
        updatedAt: '2023-01-14T01:54:02.000Z'
      }
    },
    {
      id: 13,
      title: 'Tasty Cotton Fish',
      price: 355,
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=5471',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=8642',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=3929'
      ],
      creationAt: '2023-01-14T01:54:02.000Z',
      updatedAt: '2023-01-14T01:54:02.000Z',
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1417',
        creationAt: '2023-01-14T01:54:02.000Z',
        updatedAt: '2023-01-14T01:54:02.000Z'
      }
    },
    {
      id: 14,
      title: 'Handcrafted Rubber Pizza',
      price: 689,
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=3217',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=5858',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=7745'
      ],
      creationAt: '2023-01-14T01:54:02.000Z',
      updatedAt: '2023-01-14T01:54:02.000Z',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=8455',
        creationAt: '2023-01-14T01:54:02.000Z',
        updatedAt: '2023-01-14T21:07:56.000Z'
      }
    },
    {
      id: 15,
      title: 'Awesome Cotton Mouse',
      price: 515,
      description:
        'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
      images: [
        'https://api.lorem.space/image/watch?w=640&h=480&r=6250',
        'https://api.lorem.space/image/watch?w=640&h=480&r=7869',
        'https://api.lorem.space/image/watch?w=640&h=480&r=5907'
      ],
      creationAt: '2023-01-14T01:54:02.000Z',
      updatedAt: '2023-01-14T01:54:02.000Z',
      category: {
        id: 2,
        name: 'Electronics',
        image: 'https://api.lorem.space/image/watch?w=640&h=480&r=8038',
        creationAt: '2023-01-14T01:54:02.000Z',
        updatedAt: '2023-01-14T01:54:02.000Z'
      }
    },
    {
      id: 16,
      title: 'Handcrafted Wooden Pizza',
      price: 654,
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=8047',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=916',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=4064'
      ],
      creationAt: '2023-01-14T01:54:02.000Z',
      updatedAt: '2023-01-14T01:54:02.000Z',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=6181',
        creationAt: '2023-01-14T01:54:02.000Z',
        updatedAt: '2023-01-14T01:54:02.000Z'
      }
    },
    {
      id: 17,
      title: 'Gorgeous Concrete Chair',
      price: 789,
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      images: [
        'https://api.lorem.space/image?w=640&h=480&r=2575',
        'https://api.lorem.space/image?w=640&h=480&r=7562',
        'https://api.lorem.space/image?w=640&h=480&r=2861'
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
    },
    {
      id: 18,
      title: 'Awesome Soft Mouse',
      price: 519,
      description:
        'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      images: [
        'https://api.lorem.space/image/fashion?w=640&h=480&r=9802',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=8321',
        'https://api.lorem.space/image/fashion?w=640&h=480&r=7294'
      ],
      creationAt: '2023-01-14T01:54:02.000Z',
      updatedAt: '2023-01-14T01:54:02.000Z',
      category: {
        id: 1,
        name: 'Clothes',
        image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=6181',
        creationAt: '2023-01-14T01:54:02.000Z',
        updatedAt: '2023-01-14T01:54:02.000Z'
      }
    },
    {
      id: 19,
      title: 'Unbranded Metal Car',
      price: 909,
      description:
        'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
      images: [
        'https://api.lorem.space/image/shoes?w=640&h=480&r=7834',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=9324',
        'https://api.lorem.space/image/shoes?w=640&h=480&r=6809'
      ],
      creationAt: '2023-01-14T01:54:02.000Z',
      updatedAt: '2023-01-14T01:54:02.000Z',
      category: {
        id: 4,
        name: 'Shoes',
        image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1417',
        creationAt: '2023-01-14T01:54:02.000Z',
        updatedAt: '2023-01-14T01:54:02.000Z'
      }
    },
    {
      id: 20,
      title: 'Tasty Soft Keyboard',
      price: 644,
      description:
        'The Football Is Good For Training And Recreational Purposes',
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=7116',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=6194',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=6293'
      ],
      creationAt: '2023-01-14T01:54:02.000Z',
      updatedAt: '2023-01-14T01:54:02.000Z',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=8455',
        creationAt: '2023-01-14T01:54:02.000Z',
        updatedAt: '2023-01-14T21:07:56.000Z'
      }
    },
    {
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
    },
    {
      id: 22,
      title: 'Incredible Rubber Mouse',
      price: 951,
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      images: [
        'https://api.lorem.space/image/furniture?w=640&h=480&r=855',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=2928',
        'https://api.lorem.space/image/furniture?w=640&h=480&r=2568'
      ],
      creationAt: '2023-01-14T01:54:02.000Z',
      updatedAt: '2023-01-14T01:54:02.000Z',
      category: {
        id: 3,
        name: 'Furniture',
        image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=8455',
        creationAt: '2023-01-14T01:54:02.000Z',
        updatedAt: '2023-01-14T21:07:56.000Z'
      }
    }
  ];
  const orderOptions = [
    {
      id: 1,
      label: 'Price lowest to highest',
      value: 'priceLowest'
    },
    {
      id: 2,
      label: 'Price highest to lowest',
      value: 'priceHighest'
    }
  ];
  const filterApplied = [
    {
      id: 1,
      title: 'Selected filter'
    }
  ];
  return (
    <div className="productspage_container">
      <section className="productspage_searchsection">
        <InputText
          label="Search"
          id="products_input"
          size="lg"
          style="dark"
          icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
        />
        <div className="productspage_searchsection_select">
          <InputSelect
            label="Search"
            id="products_input"
            size="lg"
            style="dark"
            icon={<FontAwesomeIcon icon={faArrowDownWideShort} />}
            options={orderOptions}
          />
          <IconButton icon={<FontAwesomeIcon icon={faList} />} />
        </div>
      </section>
      <hr />
      {filterApplied.length ? (
        <>
          <section className="productspage_filtersection">
            <div className="chipfilter_container">
              {filterApplied.map(filters => {
                return (
                  <React.Fragment key={filters.id}>
                    <ChipButton id={filters.id} title={filters.title} />
                  </React.Fragment>
                );
              })}
            </div>

            <IconButton
              type={'danger'}
              icon={<FontAwesomeIcon icon={faTrash} />}
            />
          </section>
          <hr />
        </>
      ) : (
        <></>
      )}
      <main className="productspage_productlist">
        {mock.map(productCard => {
          return (
            <React.Fragment key={productCard.id}>
              <ProductCard
                description={productCard.description}
                title={productCard.title}
                images={productCard.images}
                id={productCard.id}
                price={productCard.price}
              />
            </React.Fragment>
          );
        })}
      </main>
    </div>
  );
}
