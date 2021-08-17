import { useState, useEffect } from "react";

const useInitialCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      fetch(
        "https://instagrampet-api-2kk2ombi4-instagrampet.vercel.app/categories"
      )
        .then((resolve) => resolve.json())
        .then((data) => setCategories(data));
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } catch (error) {
      return error.message;
    }
  }, []);

  return {
    categories,
    loading,
  };
};

export default useInitialCategories;
