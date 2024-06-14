import {useSelector} from "react-redux";
import {Sale} from "../../../api/useGetData";
import {RootState} from "../../../store/store";
import moment from "moment";

const getAdditionalData = (sales?: Sale[]) => {
    if (!sales) return []

    const months: Record<string, Omit<Sale, "weekEnding">> = {
        JAN: {retailSales: 0, retailerMargin: 0, wholesaleSales: 0, unitsSold: 0},
        FEB: {retailSales: 0, retailerMargin: 0, wholesaleSales: 0, unitsSold: 0},
        MAR: {retailSales: 0, retailerMargin: 0, wholesaleSales: 0, unitsSold: 0},
        APR: {retailSales: 0, retailerMargin: 0, wholesaleSales: 0, unitsSold: 0},
        MAY: {retailSales: 0, retailerMargin: 0, wholesaleSales: 0, unitsSold: 0},
        JUN: {retailSales: 0, retailerMargin: 0, wholesaleSales: 0, unitsSold: 0},
        JUL: {retailSales: 0, retailerMargin: 0, wholesaleSales: 0, unitsSold: 0},
        AUG: {retailSales: 0, retailerMargin: 0, wholesaleSales: 0, unitsSold: 0},
        SEP: {retailSales: 0, retailerMargin: 0, wholesaleSales: 0, unitsSold: 0},
        OCT: {retailSales: 0, retailerMargin: 0, wholesaleSales: 0, unitsSold: 0},
        NOV: {retailSales: 0, retailerMargin: 0, wholesaleSales: 0, unitsSold: 0},
        DEC: {retailSales: 0, retailerMargin: 0, wholesaleSales: 0, unitsSold: 0}
    }

    for (const sale of sales) {
        const month = moment(sale.weekEnding, "YYYY-MM-DD").format("MMM").toUpperCase();
        const {unitsSold, retailSales, retailerMargin, wholesaleSales} = sale;
        const cur = months[month];
        months[month] = {
            retailSales: cur.retailSales + retailSales,
            unitsSold: cur.unitsSold + unitsSold,
            retailerMargin: cur.retailerMargin + retailerMargin,
            wholesaleSales: cur.wholesaleSales + wholesaleSales
        }
    }
    return Object.keys(months)
        .reduce((acc, key) => {
            const {unitsSold, retailerMargin, wholesaleSales, retailSales} = months[key];
            return [
                ...acc,
                [key, retailSales, wholesaleSales, unitsSold, retailerMargin]
            ]
        }, [] as (string | number)[][])
}


export const useGraph = () => {
    const selectedProduct = useSelector((state: RootState) => state.product.selectedProduct);

    const sales: Sale[] = selectedProduct?.sales ?? [];

    const options = {
        title: "Retail Sales",
        curveType: "function",
        legend: {position: "bottom"},
    }

    const data: (string | number)[][] = [
        ["Month", "RETAIL SALES", "WHOLESALE SALES", "UNIT SOLD", 'RETAILER MARGIN'],
        ...getAdditionalData(sales),
    ];

    return {data, isLoading: !selectedProduct, options}

}