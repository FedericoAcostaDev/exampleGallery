const API_URL = "https://api.imgur.com/3/gallery/";

export const asyncGetGalleries =
  ({ section, sort, window, page }) =>
  (dispatch) => {
    const url = `${API_URL}/${section}/${sort}/${window}/${page}?album_previews=true`;
    fetch(url, {
      async: true,
      crossDomain: true,
      method: "GET",
      headers: {
        authorization: "Client-ID" + process.env.REACT_APP_ID,
        Authorization: "Bearer ed6b6da9b2ff1b42449e05602514364e0e0ae013",
      },
    })
      .then((response) => {
        response.json().then((data) =>
          page > 0
            ? dispatch({ type: "GALLERIES_NEXT_PAGE", payload: data.data })
            : dispatch({
                type: "FETCH_GALLERIES_SUCCESS",
                payload: data.data,
              })
        );
      })
      .catch(function (error) {
        console.log("Request failed", error);
      });
  };
