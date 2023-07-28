import {useDispatch} from "../../services/hooks/use-dispatch";
import {useSelector} from "../../services/hooks/use-selector";
import {
    getWSState,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_START
} from "../../services/actions/ws-action-types";
import React, {useEffect} from "react";
import FeedItem from "../feed-item/feed-item";

const FeedItemNoAuth = () => {
    const dispatch = useDispatch();
    const {message} = useSelector(getWSState);

    useEffect(() => {
        dispatch({
            type: WS_CONNECTION_START
        });
        return () => {
            dispatch({
                type: WS_CONNECTION_CLOSED
            });
        }
    }, [dispatch]);

    if (!message || !message.orders) {
        return <></>
    }

    return <FeedItem message={message} />
}

export default FeedItemNoAuth;