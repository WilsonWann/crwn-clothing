
import ProductCard from "../product-card/product-card.component"
import {
  CategoryPreviewContainer,
  Title,
  Preview
} from "./category-preview.styles"
import { useTranslation } from "react-i18next"

const CategoryPreview = ({ title, products }) => {

  const { t } = useTranslation()

  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>
          {t(title)}
        </Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>

    </CategoryPreviewContainer>
  )
}

export default CategoryPreview