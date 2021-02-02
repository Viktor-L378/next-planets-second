import Grid from "../../components/Grid/Grid";

import planetsApi from "../../axios/planetsApi";
import { useRouter } from "next/router";

function Planets(props) {
  const router = useRouter();

  const data = {
    header: [
      "name",
      "rotation_period",
      "orbital_period",
      "diameter",
      "climate",
      "gravity",
      "terrain",
      "surface_water",
    ],
    values: [props.planetInfo],
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
  const planetInfo = await planetsApi.get('/planets');
  const planetCount = planetInfo.data.count;
  const paths = [...Array(planetCount).keys()].map((planetId) => {
    return {
      params: { id: String(planetId + 1) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const planetResponse = await planetsApi.get(`/planets/${params.id}`);
  const planetInfo = planetResponse.data;
  return {
    props: { planetInfo },
  };
}

export default Planets;
