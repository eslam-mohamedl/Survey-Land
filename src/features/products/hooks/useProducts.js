import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProducts, createProduct } from "../api/productsApi";

export const useProducts = () => {
  const queryClient = useQueryClient();

  const productsQuery = useQuery(["products"], () => getProducts());

  const addProduct = useMutation(createProduct, {
    onSuccess: () => queryClient.invalidateQueries(["products"]),
  });

  return { productsQuery, addProduct };
}; 