
export default
url=>query=>variables=>cb=>
{
  const options =
  {
      method: 'POST',
      headers:
      {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      },
      body: JSON.stringify
      (
        {
          query: query,
          variables: variables
        }
      )
  }

  const response=
  response=>
  response
  .json()
  .then
  (
    json=>
    response.ok ? json : Promise.reject(json)
  )

  const data=
  data=>
  cb(data.data)

  const error=
  error=>
  console.log(error)

  fetch(url,options)
  .then(response)
  .then(data)
  .catch(error)
}
