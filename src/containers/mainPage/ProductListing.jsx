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
        <div className={s.mainHeader}>
            <h2>В поиске чего?</h2>
            <form action="" class={s.searchBar}>
	           <input type="search" name="search" pattern=".*\S.*" required />
	              <button class={s.searchBtn} type="submit">
		               <span>Search</span>
                       
	              </button>
            </form>
            <p className={s.hint}>Товары в NETShop делятся на категории, это упрощает поиск обычным покупателям </p>
            <div className={s.imgRow}>
                <div className={s.column}><img src="https://s.optlist.ru/i/14/26/167345248e13c928-1426-1.jpg"/></div>
                <div className={s.column}><img src="https://i1.wp.com/antennadaily.ru/wp-content/uploads/2021/02/mini-set_1_-scaled.jpg?resize=1120%2C1002&ssl=1"/></div>
                <div className={s.column}> <img src="https://kolyaski.kz/image/catalog/Chicco/0000000(3).jpg"/></div>
                <div className={s.column}> <img src="https://mobile-review.com/articles/2020/image/echo-102/anons3.jpg"/></div>
            </div>
            

            
           
        </div>
        <div className={s.categoriesBlock}>
        <h2>Категории</h2>
        <div class={s.categories}>
  <div>
    <span className={s.tech}><input type="radio" id="tech" name="category" value="tech" checked /></span>
    <p><label for="tech"> Техника </label></p>
  </div>
  
  <div>
  <span className={s.homeStaff}><input type="radio" id="homeStaff" name="category" value="homeStaff" /></span>
  <p><label for="homeStaff"> Дом. товары </label></p>
  </div>
  
  <div>
  <span className={s.clothes}><input type="radio" id="clothes" name="category" value="clothes" /></span>
  <p><label for="clothes"> Одежда </label></p>
  </div>

  <div>
  <span className={s.forKids}><input type="radio" id="forKids" name="category" value="forKids" /></span>
    <p><label for="forKids"> Детские товары </label></p>
  </div>
  <div>
  <span className={s.other}><input type="radio" id="other" name="category" value="other" /></span>
  <p> <label for="other"> Другое </label></p>
  </div>
</div>
        </div>
        
        <img className={s.bck} src={bck} alt="background" />
        <ProductComponent className={s.products} />
    </div>)

}

export default ProductListing