import {Fragment, useContext} from "react";
import './shop.styles.scss'
import {CategoriesContext} from "../../contexts/categories.context";
import ProductCard from '../../components/product-card/product-card.component'

const Shop = () => {
    const {categoriesMap} = useContext(CategoriesContext)

    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => {
                    return (
                        <Fragment key={title}>
                            <h2>{title}</h2>
                            <div className='products-container'>
                                {categoriesMap[title].map((product) => {
                                    return (
                                        <ProductCard product={product} key={product.id}/>
                                    )
                                })
                                }
                            </div>
                        </Fragment>
                    )
                })
            }
        </Fragment>
    )
}

export default Shop;