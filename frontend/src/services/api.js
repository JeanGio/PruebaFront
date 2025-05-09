const API_URL = 'https://jsonplaceholder.typicode.com/users'

export async function getPosts() {
  const res = await fetch(`${API_URL}/posts`)
  if (!res.ok) throw new Error('Error al obtener posts')
  return await res.json()
}

export async function getPostById(id) {
  const res = await fetch(`${API_URL}/posts/${id}`)
  if (!res.ok) throw new Error('Error al obtener post')
  return await res.json()
}
