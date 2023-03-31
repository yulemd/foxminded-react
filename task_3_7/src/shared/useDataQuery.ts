import { useQuery } from "react-query";
import { fetchData } from "../api/fetchData";

export const useDataQuery = (endpoint: string) => {
  return useQuery({
  queryFn: () => fetchData(`/${endpoint}`),
  queryKey: [`${endpoint}`],
  })
}