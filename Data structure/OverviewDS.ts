// Collection: users
{
    "id": "u123",
    "name": "Alice",
    "email": "alice@mail.com",
    "createdAt": "2025-05-01T10:00:00Z",
    "role": "customer"
  }
  
  // Collection: products
  {
    "id": "p123",
    "name": "Smartphone X",
    "price": 599.99,
    "category": "electronics",
    "stock": 25,
    "createdAt": "2025-04-20T15:00:00Z"
  }
  
  // Collection: sales
  {
    "id": "s123",
    "amount": 599.99,
    "date": "2025-05-01T12:00:00Z",
    "productId": "p123",
    "userId": "u123",
    "channel": "Website",
    "category": "electronics"
  }
  
  // Collection: visits (optional, for conversion rate)
  {
    "id": "v123",
    "userId": "u123",
    "timestamp": "2025-05-01T10:00:00Z",
    "device": "Desktop"
  }
  