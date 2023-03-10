import { useQuery } from "@tanstack/react-query";
import { instance } from "../Instance";

export const useData = (key, url, options) =>{
  return useQuery(
    key,
    () => instance.get(url) ,
    {...options})
}
