import App from "../components/App";
import { fetchPlanets } from "../store/actions/planets";
import { wrapper } from "../store/store";

export default function Home() {
  return <App  />;
}

export const getStaticProps = wrapper.getServerSideProps(async ({ store }) => {
  await store.dispatch(fetchPlanets());
});
