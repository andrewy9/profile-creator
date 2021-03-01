describe('post old employment history to database', () => {
  const mockOldEmployer = 'old employer'
  const addedHistory = {
    id: 1,
    mockOldEmployer,
    oldEmploymentDate: 'date',
    oldRole: 'old role'
  }

  const scope = nock('http://localhost')
    .post('/ap1/v1/detailsRoutes/oldHistory', mockOldHistory)
    .reply(201, addedHistory)

  test('posts old history to database', () => {
    expect.assertions(2)
    return postOldEmploymentHistoryToDatabase(mockOldHistory)
      .then((results) => {
        expect(results).toEqual(addedHistory)
        expect(scope.isDone()).toBe(true)
        return null
      })
  })
})