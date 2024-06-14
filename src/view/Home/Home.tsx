import {Layout} from "../../components/Layout/Layout";
import {MainContainer} from "./styled";
import React from "react";
import {LeftPane} from "../../components/LeftPane/LeftPane";
import {RightPane} from "../../components/RightPane/RightPane";
import {useGetData} from "../../api/useGetData";
import {setSelected} from "../../store/productSlice";
import {useDispatch} from "react-redux";
import {Alert} from "antd";

const breadCrumbs = [
    {title: "Home", url: "/"}
]


export default function Home() {
    const dispatch = useDispatch();
    const {isLoading, isError, data} = useGetData();

    React.useEffect(() => {
        // select the first product, normally we would only want to do this once when data becomes defined but not really an issue here.
        if (data) {
            dispatch(setSelected(data[0]));
        }
    }, [data, dispatch])

    return (
        <Layout pageTitle={"Home Page"} breadCrumbs={breadCrumbs}>
            {isError &&
                <Alert message="Error fetching the product" type="error" style={{marginBottom: "12px"}}/>
            }
            <MainContainer>
                <LeftPane/>
                <RightPane/>
            </MainContainer>
        </Layout>
    )
}
