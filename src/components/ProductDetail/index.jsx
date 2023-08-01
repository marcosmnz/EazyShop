import { useParams } from "react-router-dom"
import { useGlobalContext } from "../../Context/ContextGlobal"
import SWR from "../../hooks/useSWR"
import ProductDetailView from "./ProductDetailView"
const API_URL = import.meta.env.VITE_API_URL


function ProductDetail() {
  const {addProduct, removeProduct} = useGlobalContext()
  const params = useParams()
  const { data: productData } = SWR({
        url: `${API_URL}/products/${params.id}`
      })
  return (
    <ProductDetailView 
    addProduct={addProduct}
    removeProduct={removeProduct}
    data={productData}/>
  )
}

export default ProductDetail