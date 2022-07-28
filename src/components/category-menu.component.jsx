import './category-item.styles.scss'
import CategoryItem from './category-item.component'


const CategoryMenu = ({categories}) => {
    return(
        <div className="catagories-container">
        {categories.map((category)=>
        <CategoryItem key={category.id} category={category}/>
           )}
       
        
      </div>
    )
}

export default CategoryMenu