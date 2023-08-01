import DashboardView from "../Dashboard/DashboardView";
import useSWR from "../../hooks/useSWR";
const API_URL = import.meta.env.VITE_API_URL;

function DashboardElectronics() {
  const {
    data: productData,
    loading,
    error,
  } = useSWR({
    url: `${API_URL}/products/category/electronics`,
  });

  return (
    <>
      {loading ? (
        <span>Cargando...</span>
      ) : (
        <DashboardView data={productData} />
      )}
      {!loading && error && <h1>Error fatal, consulte mas tarde...</h1>}
    </>
  );
}

export default DashboardElectronics
