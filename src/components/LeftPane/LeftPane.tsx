import {css} from "@emotion/react";
import {StyledLeftPane} from "./styled";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {Col, Divider, Image, Row, Spin, Typography} from "antd";

const {Title, Text} = Typography;

export const LeftPane = () => {

    const selectedProduct = useSelector((state: RootState) => state.product.selectedProduct)

    return (
        <StyledLeftPane>
            {!selectedProduct && <Spin spinning tip={"loading"}/>}
            {selectedProduct && (
                <Row gutter={[0, 16]} justify={"center"}>
                    <Col span={24}>
                        <Image src={selectedProduct.image} width={150}/>
                    </Col>
                    <Col span={24}>
                        <Title level={4}>{selectedProduct.title}</Title>
                    </Col>
                    <Col span={24}>
                        <Text type={"secondary"}>{selectedProduct.subtitle}</Text>
                    </Col>
                    <Divider/>
                    {selectedProduct.tags.map((e) => (
                        <Col key={e}><Text className={"tag"} code>{e}</Text></Col>
                    ))}
                    <Divider/>
                </Row>
            )}

        </StyledLeftPane>
    )
}