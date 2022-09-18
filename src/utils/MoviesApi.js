class MoviesApi {
  constructor({ baseUrl, headers, credentials }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._creditials = credentials;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      credentials: this._credentials,
    })
      .then(this._checkResponse)
      .then((result) => {
        return result;
      });
  }
}

const moviesApi = new MoviesApi({
  baseUrl: "https://api.diploma.smolib.nomoredomains.sbs/",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
});

export { moviesApi };
