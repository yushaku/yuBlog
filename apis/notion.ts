export const getArticleDetail = async (id: string) => {
  if (!id) return

  return fetch(`/api/notion/${id}`, {
    method: 'GET',
    mode: 'same-origin',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((data) => data.json())
}

export const getArticleList = async (path: string) => {
  if (!path) return

  return fetch(`/api/${path}`, {
    method: 'GET',
    mode: 'same-origin',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((data) => data.json())
}
