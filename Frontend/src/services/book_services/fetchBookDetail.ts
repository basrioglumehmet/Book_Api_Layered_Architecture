import { Book, BookDetail } from "@/types/book";
import { DataResult, GenericDataResult } from "@/types/result";
import axiosInstance from "@/utils/axios/axiosInstance";
import { queryOptions } from "@tanstack/react-query";

export async function handleFetchBookDetail(nameId:string){
    const result = await axiosInstance.get(`api/Book/${nameId}`);
    const data: GenericDataResult<BookDetail> = result.data;
    return data;
}

export function fetchBookDetail(nameId:string){
    return queryOptions({
        queryKey:["book_detail",nameId],
        queryFn: () => handleFetchBookDetail(nameId)
    })
}