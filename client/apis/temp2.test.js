describe('postEducationHistoryToDatabase', () => {
  const mockProvider = 'AUT'
  const addEducation = {
    mockProvider,
    qualification: 'Business',
    year: '2020'
  }

  const scope = nock('http://localhost')
    .post('/api/v1/education', mockProvider)
    .reply(201, addEducation)

  test('post education to api', () => {
    expect.assertions(2)

    return postEducationHistoryToDatabase(addEducation)
      .then(res => {
        expect(scope.isDone()).toBe(true)
        expect(res).toBe(addEducation)
      })
  })
})