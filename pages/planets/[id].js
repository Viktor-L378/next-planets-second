import Grid from "../../components/Grid/Grid";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Planets(props) {
  const [planetInfo, setPlanetInfo] = useState([]);
  const router = useRouter();
  const planetsInfo = useSelector((state) => state.planets.data);
  useEffect(() => {
    if (props.planetName) {
      setPlanetInfo(
        planetsInfo.filter((planet) => planet.name === props.planetName)
      );
    }
  }, [props.planetName]);

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
    values: planetInfo,
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
  const paths = [
    {
      params: { id: "planet_name" },
    },
  ];
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: { planetName: params.id },
  };
}

export default Planets;
