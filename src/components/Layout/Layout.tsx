import {FC, ReactNode} from "react";
import {Breadcrumb, Image, Layout as AntLayout} from "antd";
import {StyledContent, StyledFooter, StyledHeader} from "./styled";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import {css} from "@emotion/react";

const styles = {
    link: css`
        color: white !important;
        text-decoration: underline;
    `
}

interface ILayoutProps {
    children: ReactNode,
    pageTitle: string,
    breadCrumbs: { url: string, title: string }[]
}

export const Layout: FC<ILayoutProps> = ({children, pageTitle, breadCrumbs}) => {

    const navigate = useNavigate()

    return (
        <AntLayout style={{minHeight: "100vh"}}>
            <StyledHeader>
                <div className={'header-container'}>
                    <Link to={"/"}>
                        S
                    </Link>
                </div>
            </StyledHeader>
            <StyledContent>
                <Breadcrumb style={{margin: '16px 0'}}>
                    {breadCrumbs.map(e => {
                        return (
                            <Breadcrumb.Item key={e.title} onClick={() => {
                                navigate(e.url)
                            }}>{e.title}</Breadcrumb.Item>
                        )
                    })}
                </Breadcrumb>
                <div className={"container"}>
                    {children}
                </div>
            </StyledContent>
            <StyledFooter><Image height={50} src={"/logo.svg"}/></StyledFooter>
        </AntLayout>
    )
}