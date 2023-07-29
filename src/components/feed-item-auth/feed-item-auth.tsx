import {useDispatch} from "../../services/hooks/use-dispatch";
import {useSelector} from "../../services/hooks/use-selector";
import React, {useEffect} from "react";
import FeedItem from "../feed-item/feed-item";
import {
    getWSAuthState,
    WS_CONNECTION_CLOSED_AUTH,
    WS_CONNECTION_START_AUTH
} from "../../services/actions/ws-auth-action-types";

const FeedItemAuth = () => {
    const dispatch = useDispatch();
    const {message} = useSelector(getWSAuthState);

    useEffect(() => {
        dispatch({
            type: WS_CONNECTION_START_AUTH
        });
        return () => {
            dispatch({
                type: WS_CONNECTION_CLOSED_AUTH
            });
        }
    }, [dispatch]);

    if (!message || !message.orders) {
        return <></>
    }

    return <FeedItem message={message} />
}

export default FeedItemAuth;