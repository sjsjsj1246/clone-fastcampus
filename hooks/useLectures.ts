import { useQuery } from "react-query";

const useLectures = () => {
  return useQuery("lecture list", () =>
    fetch("/api/lectures").then((res) => res.json())
  );
};

export default useLectures;
