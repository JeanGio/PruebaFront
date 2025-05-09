import { describe, it, expect } from 'vitest'
import { getPosts, getPostById } from './api'

describe('API', () => {
  it('fetch posts', async () => {
    const posts = await getPosts()
    expect(posts.length).toBeGreaterThan(0)
  })

  it('fetch one post', async () => {
    const post = await getPostById(1)
    expect(post).toHaveProperty('id')
  })
})
