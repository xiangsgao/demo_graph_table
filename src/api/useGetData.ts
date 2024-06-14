import {useQuery} from "react-query";

export interface Review {
    "customer": string,
    "review": string
    "score": number
}

export interface Sale {
    "weekEnding": string,
    "retailSales": number,
    "wholesaleSales": number,
    "unitsSold": number,
    "retailerMargin": number
}

export interface Product {
    "id": string,
    "title": string,
    "image": string,
    "subtitle": string,
    "brand": string,
    "reviews": Review[],
    "retailer": string,
    "details": string[],
    "tags": string[],
    "sales": Sale[]
}

export const useGetData = () => {
    // this api response is cached by react query already so no need to worry about calling this redundantly in multiple places
    const {isLoading, isError, data} = useQuery<Product[], Error>({
        queryKey: ['getData'],
        queryFn: () => fetch('/data.json').then((res) => res.json())
    });

    return {isLoading, isError, data}
}