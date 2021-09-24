import { useState, useEffect } from "react";

export const useFetch = (url) => {
  //useState
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });
  //useEffect
  useEffect(() => {
    // resetear el loading para que aparesca antes de hacer el llamado a la url
    setState({
      data: null,
      loading: true,
      error: null,
    });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setTimeout(() => {
          setState({
            loading: false,
            error: null,
            data: data,
          });
        }, 1000);
      });
  }, [url]); //Quiero que se ejecute solo cuando el URL cambie

  return state;
};
