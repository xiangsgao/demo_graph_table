import {StyledTable} from "./styled";
import {useTable} from "./useTable";
import {Table as AntTable} from "antd"


export const Table = () => {

    const {isLoading, columns, data} = useTable();


    return (
        <StyledTable>
            <AntTable columns={columns} dataSource={data} loading={isLoading}/>
        </StyledTable>
    )
}