import Image from "next/image";
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "react-query";
type getUserImagesType = () => Promise<{ url: string; id: string }[]>;

const useImageLoader = () => {
  const indexToUrl = (_: any, i: number) => {
    return {
      url: `https://picsum.photos/id/${900 + i}/200/200`,
      id: crypto.randomUUID(),
    };
  };
  const getUserImages: getUserImagesType = async () => {
    return await Promise.resolve(
      Array(3 * 5)
        .fill(0)
        .map(indexToUrl)
    );
  };
  return useQuery({ queryKey: ["userImages"], queryFn: getUserImages });
};

export const Posts = () => {
  const { data, isError, isLoading, status } = useImageLoader();

  return (
    <>
      <div className="w-full flex justify-center flex-wrap gap-1">
        {status === "success" &&
          data.map((v) => {
            return (
              <div className="w-[32%]" key={v.url}>
                {/* <Image src={v.url} alt='' width={100} height={100}></Image> */}
                <img src={v.url}></img>
              </div>
            );
          })}
      </div>
    </>
  );
};
