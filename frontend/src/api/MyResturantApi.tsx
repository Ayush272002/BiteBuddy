import { Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useCreateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyResturantRequest = async (
    resturantFormData: FormData
  ): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/resturant`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: resturantFormData,
    });

    if (!response.ok) {
      throw new Error("Failed to create resturant");
    }

    return response.json();
  };

  const {
    mutate: createResturant,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createMyResturantRequest);

  if (isSuccess) {
    toast.success("Resturant created successfully");
  }

  if (error) {
    toast.error("Failed to create resturant");
  }

  return { createResturant, isLoading };
};
