import { useNavigate } from "react-router-dom";
import {CategoryItemContainer, CategoryItemBody, BackgroundImage} from './category-item.styles'

const CategoryItem = ({category}) => {
    const {title, imageUrl, route} = category;
    const navigate = useNavigate()

    const onNavigateHandler = () => navigate(route)
    return (
        <CategoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl} />
            <CategoryItemBody>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </CategoryItemBody>
        </CategoryItemContainer>
    )
}

export default CategoryItem