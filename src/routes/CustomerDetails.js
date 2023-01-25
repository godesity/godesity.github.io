import Page from "../layouts/Page";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom'
import { fetchPost } from "../store/post";
import { useEffect, createRef } from "react";

export default function Projekt() {
    const customer = useSelector((state) => state.customer.value);
    const dispatch = useDispatch();
    const { id } = useParams();
    const contentRef = createRef();
    useEffect(() => {
        dispatch(fetchPost(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (customer) {
            contentRef.current.innerHTML = customer.content.rendered;
        }
    }, [contentRef, customer]);
    return (<>
        {customer && <Page title="Projekt">
            <h2>{customer.title.rendered}</h2>
            <div ref={contentRef}>{customer.content.rendered}</div>
        </Page>}</>
    );
}
