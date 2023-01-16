import * as apiConfig from './apiConfig';

export const getProducts = async (productId: string) => {
  const { data } = await apiConfig.sendWithAxios(
    `products/${productId}`,
    'GET'
  );
  return data;
};
export const getProductsPagination = async (page: number) => {
  const { data } = await apiConfig.sendWithAxios(
    `products?offset=${page * 20 - 20}&limit=20`,
    'GET'
  );
  return data;
};
export const getProductsCategories = async () => {
  const { data } = await apiConfig.sendWithAxios(`categories`, 'GET');
  return data;
};
export const getProductsFilters = async (filters: string[]) => {
  const route = filters.reduce((add, filter, index) => {
    if (index) return add + '&categoryId=' + filter;
    else return add + 'categoryId=' + filter;
  }, 'products?');
  const { data } = await apiConfig.sendWithAxios(route, 'GET');
  return data;
};
export const getProductsReview = async (productId: string) => {
  const dataReview = [
    {
      id: productId,
      score: 5,
      title: 'Comment Title 2',
      comment: 'Comment Lorem ipsum dolor sit amet. ',
      img: 'https://thispersondoesnotexist.com/image',
      date: new Date('2023/01/14')
    },
    {
      id: productId + 1,
      score: 3,
      title: 'Comment Title',
      comment:
        'Comment Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img: 'https://thispersondoesnotexist.com/image',
      date: new Date('2023/01/05')
    }
  ];
  const { data } = await new Promise<{ data: any }>(res => {
    setTimeout(() => {
      res({ data: dataReview });
    }, 500);
  });
  return data;
};
