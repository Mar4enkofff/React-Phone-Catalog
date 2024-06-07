import React from 'react';
import { useState, useEffect } from 'react';
import { getAllProducts } from '../../helpers/FetchProducts';
import { Product, ProductType } from '../../types/Product';
import { ProductPage } from '../ProductPage/ProductPage';

export const AccessorysPage = () => {
  const [productsAccessories, setProductsAccessory] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchProductsAccessory = async () => {
    setIsLoading(true);
    try {
      const getAccessoryFromServer = (await getAllProducts())
        // eslint-disable-next-line prettier/prettier
        .filter(product => product.category === ProductType.Tablet);

      setProductsAccessory(getAccessoryFromServer);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProductsAccessory();
  }, []);

  return (
    <section className="phones">
      <ProductPage
        products={productsAccessories}
        isError={isError}
        isLoading={isLoading}
        category={ProductType.Accessories}
        title="Accessoryies"
      />
    </section>
  );
};
