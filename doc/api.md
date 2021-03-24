# CA TECH CHALLENGE STORE API

CA TECH CHALLENGE STORE API

## Endpoint

https://ca-tech-challenge-web-202103.herokuapp.com/

## レスポンスの基本構造

### 正常時
```json5
{
  "ok": true,
  "data": {},
}
```

### エラー時
```json5
{
  "ok": false,
  "message": "Error Message",
}
```

## /
ヘルスチェック用です．

```json5
{
  "ok": true,
}
```

## 実装API

- [products api](./products.md)
