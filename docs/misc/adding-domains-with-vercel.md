# Configuring digger domains with Vercel

To use digger with a domain that is purchased through Vercel it works like any other domain. However there is a caveat since a domain purchased through vercel already has a "CAA" record for certificate validation. This doesn't play with with Amazon's Certificate Manager service. To cut a long story short, in order to get it working with digger-configured domain you need to add an additional CAA record:

```
NAME: inhabit.eco
VALUE: 0 issue "amazonaws.com"
```


Check out this loom to get a clearer picture of how to get it done:


<div style="position: relative; padding-bottom: 64.63195691202873%; height: 0;"><iframe src="https://www.loom.com/embed/32c34ec0681d41e8abce8891032df7c3" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

Happy digging!