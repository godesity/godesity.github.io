import Navbar from "../components/Navbar";
import PageFrame from "../components/PageFrame";
import Socials from "../components/Socials";

export default function Main(props) {
  return (
    <>
      <Navbar />
      <PageFrame>
        {props.children}
      </PageFrame>
      <Socials />
    </>
  );
}
