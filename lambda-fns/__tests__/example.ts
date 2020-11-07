import { ExampleHandler } from '../example'

describe('ExampleHandler', () => {
  test('return Hello world', async () => {
    const result = await ExampleHandler({ name: 'Julian' })
    expect(result).toEqual({ msg: 'Hello Julian'})
  })
})
