import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// useTheme hook to get LOB specific theme
export const useThemeInfo = (themeUrl?: string) => {
  // get theme from api
  const getTheme = async () => {
    // return empty object if no theme is provided
    if (!themeUrl) return {};
    try {
      const { data } = await axios.get(`../themes/${themeUrl}.json`);
      // return design token json
      return data;
    } catch (e) {
      return {};
    }
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["theme", themeUrl],
    queryFn: getTheme,
    refetchOnWindowFocus: true
  });
  let returnValue;

  if (error instanceof Error) {
    returnValue = `An error has occurred while fetching theme. Error: ${error.message}`;
  }

  if (!isLoading && data) {
    returnValue = data;
  }
  return returnValue;
};
