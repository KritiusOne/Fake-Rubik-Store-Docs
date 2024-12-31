export const getAll = `
{
  "msg": "This is the all categories",
  "response": [
    {
      "id": 1,
      "name": "3x3"
    },
    {
      "id": 2,
      "name": "4x4"
    },
    {
      "id": 3,
      "name": "WCA"
    },
    {
      "id": 4,
      "name": "PACK"
    },
    {
      "id": 5,
      "name": "2X2"
    },
    {
      "id": 6,
      "name": "MAGNETICO"
    }
  ]
}
`
export const bodyCreateCategory = `
{
  "name": "string",
  "productCategories": [
    {
      "idProduct": 0
    }
  ]
}
`
export const bodyCreatePC = `
{
  "categoryProductDTOs": [
    {
      "idCategory": 0,
      "idProduct": 0
    }
  ]
}
`