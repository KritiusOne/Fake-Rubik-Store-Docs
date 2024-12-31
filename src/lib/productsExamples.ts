export const getAllProducts = `
{
  "metaData": {
    "totalCount": 31,
    "pageSize": 3,
    "currentPage": 1,
    "totalPage": 11,
    "hasNextPage": true,
    "hasPreviousPage": false,
    "nextPageURL": "https://apifakerubikstore.azurewebsites.net/api/Product?MinPrice=&MaxPrice=&PageSize=3&PageNumber=2",
    "previousPageURL": "https://apifakerubikstore.azurewebsites.net/api/Product?MinPrice=&MaxPrice=&PageSize=3&PageNumber=false"
  },
  "statusCode": 200,
  "msg": "This is all products",
  "response": [
    {
      "id": 2,
      "name": "GAN Mirror M (Magnético) UV 3×3 Morado",
      "price": 120000,
      "thumbnail": "39e50337-fe40-4683-88fb-b440d1bdb9a7"
    },
    {
      "id": 1002,
      "name": "QiYi Warrior 3x3 S",
      "price": 12900,
      "thumbnail": "922de203-de10-404d-b8bc-5c503ca24a61"
    },
    {
      "id": 1003,
      "name": "MoYu Super RS3 M 2022",
      "price": 66900,
      "thumbnail": "79f4fa59-c04c-481b-98b3-86bad3f5af6b"
    }
  ]
}
`
export const getAllInfoProducts = `
{
  "metaData": {
    "totalCount": 31,
    "pageSize": 3,
    "currentPage": 1,
    "totalPage": 11,
    "hasNextPage": true,
    "hasPreviousPage": false,
    "nextPageURL": "https://apifakerubikstore.azurewebsites.net/api/Product?MinPrice=&MaxPrice=&PageSize=3&PageNumber=2",
    "previousPageURL": "https://apifakerubikstore.azurewebsites.net/api/Product?MinPrice=&MaxPrice=&PageSize=3&PageNumber=false"
  },
  "statusCode": 200,
  "msg": "This is all products",
  "response": [
    {
      "reviews": [
        {
          "productId": 2,
          "userId": 1004,
          "description": "Es un gran cubo, muy buen material, muy lindo y tiene gran giro",
          "rate": 5
        }
      ],
      "productCategories": [
        {
          "idCategory": 1,
          "idProduct": 2,
          "categoryNav": {
            "id": 1,
            "name": "3x3"
          }
        },
        {
          "idCategory": 6,
          "idProduct": 2,
          "categoryNav": {
            "id": 6,
            "name": "MAGNETICO"
          }
        }
      ],
      "id": 2,
      "name": "GAN Mirror M (Magnético) UV 3×3 Morado",
      "price": 120000,
      "stock": 10,
      "image": "eadc4650-7dab-4f70-9657-2354615566ed",
      "description": "Nuevo desafío: GAN MirrorM es un nuevo diseño visual con un cubo de velocidad de 3 x 3, que no se resuelve con colores sino por formas. El cubo de espejo GAN te traerá más diversión",
      "thumbnail": "39e50337-fe40-4683-88fb-b440d1bdb9a7"
    },
    {
      "reviews": [],
      "productCategories": [
        {
          "idCategory": 1,
          "idProduct": 1002,
          "categoryNav": {
            "id": 1,
            "name": "3x3"
          }
        },
        {
          "idCategory": 3,
          "idProduct": 1002,
          "categoryNav": {
            "id": 3,
            "name": "WCA"
          }
        }
      ],
      "id": 1002,
      "name": "QiYi Warrior 3x3 S",
      "price": 12900,
      "stock": 20,
      "image": "19a7cd72-c7dd-429d-9dce-e2c8a34e5314",
      "description": "El QiYi Warrior 3x3 S es el nuevo speedcube económico de la marca qiyi. Es igual que el Qiyi Warrior W, con la diferencia de que la cantidad de plástico usado para la fabricación es menor, de esta forma se abarata el coste del producto haciéndolo más accesible.",
      "thumbnail": "922de203-de10-404d-b8bc-5c503ca24a61"
    },
    {
      "reviews": [],
      "productCategories": [
        {
          "idCategory": 1,
          "idProduct": 1003,
          "categoryNav": {
            "id": 1,
            "name": "3x3"
          }
        },
        {
          "idCategory": 3,
          "idProduct": 1003,
          "categoryNav": {
            "id": 3,
            "name": "WCA"
          }
        },
        {
          "idCategory": 6,
          "idProduct": 1003,
          "categoryNav": {
            "id": 6,
            "name": "MAGNETICO"
          }
        }
      ],
      "id": 1003,
      "name": "MoYu Super RS3 M 2022",
      "price": 66900,
      "stock": 15,
      "image": "1eb2fd2d-3301-4a53-8f8e-52b9f4e9c067",
      "description": "El MoYu Super RS3 M 2022 es un cubo 3x3 con un giro y unas sensaciones increíblemente buenas, tiene un gran corte de esquinas y un giro muy suave, rápido y directo, con apenas aplicarle una pequeña fuerza a cualquier cara se hace un giro, pero ¡cuidado!, la potencia sin control no sirve de nada.",
      "thumbnail": "79f4fa59-c04c-481b-98b3-86bad3f5af6b"
    }
  ]
}
`

export const getById = `
{
  "msg": "This is the product selected",
  "response": {
    "reviews": [
      {
        "productId": 2,
        "userId": 1004,
        "description": "Es un gran cubo, muy buen material, muy lindo y tiene gran giro",
        "rate": 5
      }
    ],
    "productCategories": [
      {
        "idCategory": 1,
        "idProduct": 2,
        "categoryNav": {
          "id": 1,
          "name": "3x3"
        }
      },
      {
        "idCategory": 6,
        "idProduct": 2,
        "categoryNav": {
          "id": 6,
          "name": "MAGNETICO"
        }
      }
    ],
    "id": 2,
    "name": "GAN Mirror M (Magnético) UV 3×3 Morado",
    "price": 120000,
    "stock": 10,
    "image": "eadc4650-7dab-4f70-9657-2354615566ed",
    "description": "Nuevo desafío: GAN MirrorM es un nuevo diseño visual con un cubo de velocidad de 3 x 3, que no se resuelve con colores sino por formas. El cubo de espejo GAN te traerá más diversión",
    "thumbnail": "39e50337-fe40-4683-88fb-b440d1bdb9a7"
  }
}

`