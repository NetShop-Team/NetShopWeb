import axios from 'axios';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from '../../redux/actions/productsActions';
import bck from './background.png'
import s from './productsPage.module.css'
const ProductListing = () => {

    const products = useSelector((state) => state)
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("err", err)
        });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, [])
    console.log("Products: ", products)

    return(
    <div >
        <img className={s.bck} src={bck} alt="background" />
        <ProductComponent className={s.products} />
    </div>)

}

export default ProductListing