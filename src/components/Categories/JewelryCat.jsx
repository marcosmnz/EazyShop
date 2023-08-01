import DashboardView from '../Dashboard/DashboardView'
import useSWR from '../../hooks/useSWR'
const API_URL = import.meta.env.VITE_API_URL

function DashboardJewelery() {
  const { data: productData, loading, error } = useSWR({ url: `${API_URL}/products/category/jewelery` })


  return (
    <>
        {
          loading ?
          <span>Cargando...</span> 
          : <DashboardView data={productData} />
          
        }
        {
          !loading && error && (
            <h1>Error fatal, consulte mas tarde...</h1>
          )
        }
    </>
  )
}

export default DashboardJewelery