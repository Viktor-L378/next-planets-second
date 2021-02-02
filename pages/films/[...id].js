import Grid from "../../components/Grid/Grid";
import { useState } from "react";

import planetsApi from "../../axios/planetsApi";
import axios from "axios";
import { useRouter } from "next/router";

function Films(props) {
  const router = useRouter();

  const data = {
    header: ["title", "episode_id", "director", "producer", "release_date"],
    values: props.filmsInfo,
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
  const paths = [...Array(6).keys()].map((filmId) => {
    return {
      params: { id: [String(filmId + 1)] },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const filmsPromises = params.id.map((filmId) => {
    return planetsApi(`/films/${filmId}`).then((response) => response.data);
  });
  const filmsInfo = await Promise.all(filmsPromises);

  return {
    props: { filmsInfo },
  };
}

export default Films;
