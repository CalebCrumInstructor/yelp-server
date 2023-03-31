# yelp-server

## How to use

- To use the yelp api, hit the following route with a url parameter that has the value you would normally use to access the yelp api (no api key needed).

- https://yelp-server-caleb-crum.herokuapp.com/api?url={endocodedURL}

- The url passed in the parameter must be encoded. Do this using the built in function encodeURIComponent()

## Example

```js
async function getYelpData(yelpURL) {
  try {
    var baseURL = "https://yelp-server-caleb-crum.herokuapp.com/api?url=";
    var url = baseURL + encodeURIComponent(yelpURL);

    var res = await fetch(url);

    console.log(res);

    var data = await res.json();

    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getYelpData(
  "https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972"
);
```
