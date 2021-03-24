# products API

## /products
商品一覧を返します．

```json5
{
  "ok": true,
  "data": [
    {
      id: 1,
      title: "...",
      price: "...",
      category: "...",
      description: "...",
      image: "..."
    },
    // ...
    {
      id: 20,
      title: "...",
      price: "...",
      category: "...",
      description: "...",
      image: "..."
    },
  ]
}
```

## /products?limit=5

商品一覧5件返します.

## /products?sort=desc&sortKey=price

商品一覧をpriceの降順に並べて返します.
default: sort=asc, sortkey=id

## /products?category=bag

与えたcategoryの商品一覧を返します.

## /products?badget=10000

与えた値の以下の値段の商品一覧を返します.

## /products/:id
`:id` で指定されたidを持つ商品の情報を返します．

ex.) :id = 1の場合

```json5
{
  "ok": true,
  "data":  {
    id: 1,
    title: "...",
    price: "...",
    category: "...",
    description: "...",
    image: "..."
  }
}
```
