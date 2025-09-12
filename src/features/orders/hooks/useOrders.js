import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getOrders, createOrder } from "../api/ordersApi";

export const useOrders = () => {
  const queryClient = useQueryClient();

  const ordersQuery = useQuery(["orders"], () => getOrders());

  const addOrder = useMutation(createOrder, {
    onSuccess: () => queryClient.invalidateQueries(["orders"]),
  });

  return { ordersQuery, addOrder };
}; 