import AdminPageMain from "../components/AdminPage/AdminPage";
import ProductLists from "../components/ProductLists/ProductLists";

export default function AdminHomePage() {
  return (
    <div>
      <AdminPageMain>
        <ProductLists />
      </AdminPageMain>
    </div>
  );
}
