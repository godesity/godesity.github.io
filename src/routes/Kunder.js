import Page from "../layouts/Page";
import { useSelector, useDispatch } from "react-redux";
import { fetchCustomers } from "../store/customers";
import { useEffect } from "react";
import Card from "../components/Card";
import CardList from "../components/CardList";

export default function Kunder() {
  const customers = useSelector((state) => state.customers.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);
  return (
    <Page title="Kunder">
      Vi vill upprätthålla en god kommunikation till våra kunder. Därför finns det kontaktmöjligheter så som e-post och telefon. Du som kund kan när som helst få uppdateringar om hur utvecklingen av produkten går och vid varje milstolpe informerar vi dig om alternativa lösningar om nuvarande läge.
      Om du vill komma i kontakt med oss så finns det här ett antal kontakt metoder.
      <CardList>
        {customers.map((c, i) =>
          <Card key={i} title={c.title.rendered} description={c.excerpt.rendered} coverImage={c.jetpack_featured_media_url} actionLink={"/kunder/" + c.id}></Card>
        )}
      </CardList>
    </Page>
  );
}
