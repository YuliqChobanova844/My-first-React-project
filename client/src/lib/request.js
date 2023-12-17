const request = async (method, token, url, data) => {
  const options = {};

  if (method !== 'GET') {
      options.method = method;

      if (data) {
          options.headers = {
              'content-type': 'application/json',
          };

          options.body = JSON.stringify(data);
      }
  }

  if (token) {
      options.headers = {
          ...options.headers,
          'X-Authorization': token,
      };
  }

  const response = await fetch(url, options);

  if (response.status === 204) {
      return {};
  }

  let result = {};

  try {
    result = await response.json(); // Опит за парсване на отговора като JSON
  } catch (error) {
    // Отговорът не може да бъде обработен като JSON
    console.error('Error parsing response as JSON:', error);
  }

  if (!response.ok) {
      throw result;
  }

  return result;
};

export const requestFactory = (token) => {
  return {
      get: request.bind(null, 'GET', token),
      post: request.bind(null, 'POST', token),
      put: request.bind(null, 'PUT', token),
      patch: request.bind(null, 'PATCH', token),
      delete: request.bind(null, 'DELETE', token),
  }
};
