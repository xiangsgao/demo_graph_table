import {QueryClient, QueryClientProvider} from "react-query";
import {RouterProvider} from "react-router-dom";
import React, {FC, ReactNode} from "react";
import {Provider} from "react-redux";
import store from "../../store/store";

const queryClient = new QueryClient()

interface AppShell {
    children: ReactNode
}

export const AppShell: FC<AppShell> = ({children}) => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </Provider>

    )
}