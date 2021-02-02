import Grid from "../../components/Grid/Grid";

import planetsApi from "../../axios/planetsApi";
import axios from "axios";
import { useRouter } from "next/router";

function Residents(props) {
  const router = useRouter();

  const data = {
    header: ["name", "height", "mass", "hair_color", "skin_color"],
    values: props.residentsInfo,
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

export async function getStaticProps({ params }) {
  const residentsPromises = params.id.map((residentId) => {
    return planetsApi(`/people/${residentId}`).then((response) => response.data);
  });
  const residentsInfo = await Promise.all(residentsPromises);

  return {
    props: { residentsInfo },
  };
}

export default Residents;
