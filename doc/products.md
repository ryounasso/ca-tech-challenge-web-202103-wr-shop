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
