import {StyledRightPane} from "./styled";
import {Col, Row} from "antd";
import {Graph} from "./Graph/Graph";
import {Table} from "./Table/Table";

export const RightPane = () => {


    return (
        <StyledRightPane>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Graph/>
                </Col>
                <Col span={24}>
                    <Table/>
                </Col>
            </Row>
        </StyledRightPane>
    )
}