import { useCreateMyRestaurant } from "@/api/MyResturantApi";
import ManageResturantForm from "@/forms/manage-resturant-form/ManageResturantForm";

const ManageResturantPage = () => {
  const { createResturant, isLoading } = useCreateMyRestaurant();
  return <ManageResturantForm onSave={createResturant} isLoading={isLoading} />;
};

export default ManageResturantPage;
