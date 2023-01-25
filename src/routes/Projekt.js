import Card from "../components/Card";
import CardList from "../components/CardList";
import Page from "../layouts/Page";

import { useSelector, useDispatch } from "react-redux";
import { fetchProjects } from "../store/projects";
import { useEffect } from "react";

export default function Projekt() {
  const projects = useSelector((state) => state.projects.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);
  return (
    <Page title="Projekt">
      <CardList>
        {projects.map((c, i) =>
          <Card key={i} title={c.title.rendered} description={c.excerpt.rendered} coverImage={c.jetpack_featured_media_url} actionLink={"/projekt/" + c.id}></Card>
        )}
      </CardList>
    </Page>
  );
}
