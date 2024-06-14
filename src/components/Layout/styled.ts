import styled from "styled-components";
import {Layout} from "antd";

const {Header, Content, Footer} = Layout;

export const StyledHeader = styled(Header)`
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100%;
    display: flex;
    align-items: flex-end;
    background-color: #003153;

    .header-container {
        max-width: 1600px;
        display: flex;
        width: 100%;
        margin: 0 auto;
        color: white;

        a {
            text-decoration: underline;
            color: white;
            font-size: 26px;
            font-weight: 700;
        }

        button, button:hover {
            padding: 0;
            display: inline-flex;
            align-items: center;
        }

        .ant-menu {
            width: 100%;
        }

        .right-header-item {
            padding-bottom: 10px;

            .ant-space-item {
                height: 100%;

                span {
                    height: 100%;
                    display: inline-flex;
                    width: max-content;
                    justify-content: center;
                    align-items: flex-end;
                    margin-bottom: 10px;

                    svg {
                        cursor: pointer;
                    }
                }
            }
        }
    }
`

export const StyledContent = styled(Content)`
    padding-inline: 50px;

    .ant-breadcrumb-link {
        cursor: pointer;
    }

    .ant-breadcrumb {
        max-width: 1600px;
        width: 100%;
        margin: 8px auto !important;
        padding: 16px 0;
    }

    .container {
        max-width: 1600px;
        width: 100%;
        margin: 0 auto;
        min-height: 50vh;
    }
`

export const StyledFooter = styled(Footer)`
    display: flex;
    justify-content: center;
    background-color: gray;
    color: white;
`