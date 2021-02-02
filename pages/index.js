import App from "../components/App";
import { fetchPlanets } from "../store/actions/planets";
import { wrapper } from "../store/store";

export default function Home() {
  return <App  />;
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  await store.dispatch(fetchPlanets());
});
