# sdk-embed

## To Do:
* Deploying to heroku returns a $PORT error. Maybe adding a [weboack.prod.config](https://github.com/BabuBahir/react-node-example/blob/master/webpack.prod.config.js) then updating the scripts to run production should fix it.

## Quick and Dirty Steps
* Run locally
1. POST https://api.bigcommerce.com/stores/jrah6gmn/v3/channels
```json
{
  "name": "Embedded-Checkout", //any name
  "type": "storefront", //must be this combo
  "platform": "bloomreach"
}
```

2.  https://api.bigcommerce.com/stores/jrah6gmn/v3/channels/18113/site

```json
{
    "channel_id": 18113, //use channel id returned from step 1
    "url": "https://localhost" //must be this to run and test locally
}
```

3. Create local cert
Use either:
- [mkcert](https://github.com/FiloSottile/mkcert) - no steps
- [open ssl](https://www.freecodecamp.org/news/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec/) - steps

4. Create a React App with a route for /checkout (fork this one)
https://api.bigcommerce.com/stores/jrah6gmn/v3/sites/2/routes
```json

{
    "type": "checkout",
    "route": "/checkout/",
    "matching": ""
}
```


5. Create a S2S cart with your channel id.
```json
{
  "channel_id": 18113,
  "line_items": [
    {
      "quantity": 2,
      "product_id": 202,
      "variant_id": 501
    }
  ]
}
```
5. Get the embedded checkout url: and update Checkout.js
https://api.bigcommerce.com/stores/jrah6gmn/v3/carts/9482d37f-aff7-47f6-9ba0-9a7fd59a1ebc/redirect_urls
```json
{
    "data": {
        "cart_url": "https://tatiana.fun/cart.php?action=load&id=9482d37f-aff7-47f6-9ba0-9a7fd59a1ebc&token=bd8fd1533067830bfa6dd023ab0131e12ae38045abf78459868e5e3db8124543",
        "checkout_url": "https://tatiana.fun/cart.php?action=loadInCheckout&id=9482d37f-aff7-47f6-9ba0-9a7fd59a1ebc&token=bd8fd1533067830bfa6dd023ab0131e12ae38045abf78459868e5e3db8124543",
        "embedded_checkout_url": "https://tatiana.fun/cart.php?embedded=1&action=loadInCheckout&id=9482d37f-aff7-47f6-9ba0-9a7fd59a1ebc&token=bd8fd1533067830bfa6dd023ab0131e12ae38045abf78459868e5e3db8124543"
    },
    "meta": {}
}
```
6. Run your app on port 443 (since the port is so low, it will need `sudo npm run` etc)
7. Should be running at https://localhost
8. visit https://localhost/checkout
9. You're running a local checkout!
10. Don't accidentally push your local cert and then need to remake it again