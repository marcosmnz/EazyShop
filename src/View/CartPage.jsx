import { useGlobalContext } from '../Context/ContextGlobal'
import ProductCard from '../components/ProductCard/ProductCard'
function CartPage() {
  const { state } = useGlobalContext()
  return (
    <>
    <div  className="is-flex-wrap-wrap m-3 gap-3 columns">
      {
        state.products.length > 0 && state.products.map(product => {
          return (
              <ProductCard key={product.id} productData={product}/>
          )
        })
      }
      </div>
      <div className="is-size-4">TOTAL AMOUNTED</div>
    </>
  )
}

export default CartPage