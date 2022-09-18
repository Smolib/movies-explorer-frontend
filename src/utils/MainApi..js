class MainApi{
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

  createUser({ name, email, password }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    }).then(this._checkResponse);
  }

  login({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(this._checkResponse);
  }

  signOut() {
    return fetch(`${this._baseUrl}/signout`, {
      method: "POST",
      headers: this._headers,
      credentials: this._credentials,
    }).then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
      credentials: this._credentials,
    })
      .then(this._checkResponse)
      .then((result) => {
        return result;
      });
  }

  patchUserInfo({ name, email }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then(this._checkResponse);
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      credentials: this._credentials,
    })
      .then(this._checkResponse)
      .then((result) => {
        return result;
      });
  }

    postMovie(movie) {
      return fetch(`${this._baseUrl}/movies`, {
        method: "POST",
        headers: this._headers,
        credentials: this._credentials,
        body: JSON.stringify(movie),
      }).then(this._checkResponse);
    }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: this._headers,
      credentials: this._credentials,
    }).then(this._checkResponse);
  }
}

const mainApi = new MainApi({
  baseUrl: "https://api.diploma.smolib.nomoredomains.sbs/",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
});

export { mainApi };
