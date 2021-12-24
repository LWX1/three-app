import React, { ComponentType, Fragment, ReactElement, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import NotFound from "src/pages/not-found";

interface RouteProps {
    tag?: string;
    name?: string;
    path?: string;
    children?: RouteProps[];
    element?: ComponentType;
    index?:boolean;
}

interface IRouteProps {
    routes: RouteProps[];
}


const Loading = (): ReactElement => {
    return <div>loading</div>
}

const getRoutesChild = (data: IRouteProps): ReactElement => {

    return <Fragment>
        {
            data.routes.map((route: RouteProps, index: number) => {
                if (route.children?.length) {
                    return (<Route key={index} index={route.index}
                        element={route.element && <route.element {...route} />}
                    >
                        {
                            getRoutesChild({routes:route.children})
                        }
                    </Route>)
                }
                return <Route key={index} path={route.path} index={route.index}
                    element={route.element && <route.element {...route} />}
                />
            })
        }
    </Fragment>


}

const RoutesBase = (props: IRouteProps): ReactElement => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                {
                    props.routes.map((route: RouteProps, index:number) => {
                        if (route.children?.length) {
                            return (<Route key={index} index={route.index}
                                element={route.element && <route.element {...route} />}
                            >
                                {
                                    getRoutesChild({routes:route.children})
                                }
                            </Route>)
                        }
                        return <Route key={index} path={route.path} index={route.index}
                            element={route.element && <route.element {...route} />}
                        />
                    })
                }
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}

export default RoutesBase;