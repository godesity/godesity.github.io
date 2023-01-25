import Page from "../layouts/Page";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom'
import { fetchPost } from "../store/post";
import { useEffect, createRef } from "react";

export default function Projekt() {
    const project = useSelector((state) => state.project.value);
    const dispatch = useDispatch();
    const { id } = useParams();
    const contentRef = createRef();
    useEffect(() => {
        dispatch(fetchPost(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (project) {
            contentRef.current.innerHTML = project.content.rendered;
        }
    }, [contentRef, project]);
    return (<>
        {project && <Page title="Projekt">
            <h2>{project.title.rendered}</h2>
            <div ref={contentRef}>{project.content.rendered}</div>
        </Page>}</>
    );
}
