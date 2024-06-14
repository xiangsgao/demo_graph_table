import {StyledGraph} from "./styled";
import {useGraph} from "./useGraph";
import {Chart} from "react-google-charts";


export const Graph = () => {

    const {data, isLoading, options} = useGraph();

    return (
        <StyledGraph>
            <Chart
                chartType={"LineChart"}
                width={"100%"}
                height={"600px"}
                data={data}
                options={options}
            />
        </StyledGraph>
    )
}