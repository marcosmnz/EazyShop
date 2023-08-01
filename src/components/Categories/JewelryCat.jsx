import DashboardView from '../Dashboard/DashboardView'
import useSWR from '../../hooks/useSWR'
import { useParams } from 'react-router-dom'
const API_URL = import.meta.env.VITE_API_URL

function DashboardJewelery() {
  const params = useParams()
  console.log(params)
  const { data: productData, loading, error } = useSWR({ url: `${API_URL}/products/category/${params.category}` })


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