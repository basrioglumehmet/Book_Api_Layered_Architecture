import axiosInstance from "@/utils/axios/axiosInstance";
import { DataResult } from "@/types/result";
import { queryOptions } from "@tanstack/react-query";
export async function handleSearchFromApi(keyword: string): Promise<DataResult> {
    const result = await axiosInstance.get(`/search/${encodeURIComponent(keyword)}`);
    const data: DataResult = result.data;
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return data;
}


export function getBooksBySearchQueryOption(keyword: string) {
    return queryOptions({
        queryKey: ["searched_books", keyword],
        queryFn: () => handleSearchFromApi(keyword),
    });
}
