import React, { useContext } from 'react';
import { ShopContext } from '../Components/ShopContext';
import { useParams } from 'react-router-dom'
import all_product from '../assets/all_product';
import Breadcrums from '../Components/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts';


export default function Product(){
    const { all_product } = useContext(ShopContext);
    const { ProductId } =useParams();
    const product = all_product.find((e) => e.id=== Number(ProductId))
    return(
        <div>
            <Breadcrums product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts />
        </div>
    )
}