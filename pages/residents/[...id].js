import Grid from "../../components/Grid/Grid";

import { useRouter } from "next/router";
import { fetchResidents } from "../../store/actions/residents";
import { wrapper } from "../../store/store";
import { useSelector } from "react-redux";

function Residents(props) {
  const router = useRouter();
  const filmsInfo = useSelector((state) => state.residents.data);

  const data = {
    header: ["name", "height", "mass", "hair_color", "skin_color"],
    values: filmsInfo,
    actions: [
      {
        label: "home",
        action: (row) => {
          router.push("/");
        },
      },
    ],
  };
  return (
    <div className="container">
      <Grid data={data} />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = [...Array(82).keys()].map((residentId) => {
    return {
      params: { id: [String(residentId + 1)] },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps = wrapper.getStaticProps(
  async ({ store, params }) => {
    await store.dispatch(fetchResidents(params.id));
  }
);

export default Residents;
