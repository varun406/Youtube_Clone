import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useFetch = (url) => {
  const fetchedData = fetch(url).then((res) => res.json());

  const { data, isLoading } = useQuery("data", fetchedData);

  return { data, isLoading };
};
