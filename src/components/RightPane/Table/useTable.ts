import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {TableProps, Typography} from "antd";
import {Sale} from "../../../api/useGetData";
import moment from "moment";

export const useTable = () => {
    const selectedProduct = useSelector((state: RootState) => state.product.selectedProduct);


    const columns: TableProps<Sale>['columns'] = [
        {
            title: 'WEEK ENDING',
            dataIndex: 'weekEnding',
            key: 'weekEnding',
            defaultSortOrder: 'descend',
            filters: selectedProduct?.sales.map(sale => (
                {
                    text: moment(sale.weekEnding, "YYYY-MM-DD").format("MM-DD-YY"),
                    value: sale.weekEnding,
                }
            )),
            render: (_, sale) => moment(sale.weekEnding, "YYYY-MM-DD").format("MM-DD-YY"),
            filterSearch: true,
            onFilter: (value, sale) => sale.weekEnding.includes(value as string),
            sorter: (a, b) => a.weekEnding.localeCompare(b.weekEnding),
        },
        {
            title: 'RETAIL SALES',
            dataIndex: 'retailSales',
            key: 'retailSales',
            sorter: (a, b) => a.retailSales - b.retailSales,
        },
        {
            title: 'WHOLESALE SALES',
            dataIndex: 'wholesaleSales',
            key: 'wholesaleSales',
            render: (_, sale) => `$${sale.wholesaleSales.toLocaleString()}`,
            sorter: (a, b) => a.wholesaleSales - b.wholesaleSales,
        },
        {
            title: 'UNIT SOLD',
            dataIndex: 'unitsSold',
            key: 'unitSold',
            sorter: (a, b) => a.unitsSold - b.unitsSold,
        },
        {
            title: 'RETAILER MARGIN',
            dataIndex: 'retailerMargin',
            key: 'retailerMargin',
            render: (_, sale) => `$${sale.retailerMargin.toLocaleString()}`,
            sorter: (a, b) => a.retailerMargin - b.retailerMargin,
        },
    ]

    const data: Sale[] = selectedProduct?.sales ?? [];

    return {
        data, columns, isLoading: !selectedProduct
    }
}