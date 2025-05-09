import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getPostById } from './api'

global.fetch = vi.fn()

describe('API', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('fetch one post', async () => {
    const mockResponse = { id: 1, title: 'Post mock', body: 'Contenido de prueba' }

    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockResponse)
    })

    const result = await getPostById(1)
    expect(result).toEqual(mockResponse)
  })

  it('debe lanzar error si el response no es ok', async () => {
    fetch.mockResolvedValue({
      ok: false
    })

    await expect(getPostById(1)).rejects.toThrow('Error al obtener post')
  })
})
