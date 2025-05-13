import './App.module.css'
import Layout from "./components/Layout/Layout.jsx";
import RouterSet from "./components/Routes/RouterSet.jsx";
import {selectIsRefreshing} from "./redux/auth/selectors.js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {refreshPage} from "./redux/auth/operations.js";

const App = () => {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);

    useEffect(() => {
        dispatch(refreshPage());
    }, [dispatch]);

    return (
        <>
            {isRefreshing && null}
            <Layout/>
            <RouterSet/>
        </>
    )
}

export default App
