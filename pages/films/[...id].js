import Grid from "../../components/Grid/Grid";
import { useState } from "react";
import { wrapper } from "../../store/store";

import planetsApi from "../../axios/planetsApi";
import axios from "axios";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { fetchFilms } from "../../store/actions/films";

function Films(props) {
  const router = useRouter();
  const filmsInfo = useSelector(state => state.films.data);

  const data = {
    header: ["title", "episode_id", "director", "producer", "release_date"],
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

export const getStaticProps = wrapper.getStaticProps(
  async ({ store, params }) => {
    await store.dispatch(fetchFilms(params.id));
  }
);

export default Films;
