export const URL_API = 'https://dogsapi.origamid.dev/json/';

export function TOKEN_GET() {
  return {
    api_post_url: `${URL_API}jwt-auth/v1/token`,
    api_post_options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: 'dog', password: 'dog' }),
    },
  };
}

export function USER_GET(token) {
  return {
    api_get_url: `${URL_API}api/user`,
    api_get_options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}
