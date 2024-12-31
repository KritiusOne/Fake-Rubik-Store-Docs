export const getAll = `
{
   "metaData":{
      "totalCount":9,
      "pageSize":1,
      "currentPage":1,
      "totalPage":9,
      "hasNextPage":true,
      "hasPreviousPage":false,
      "nextPageURL":"/api/Order?MinPrice=&MaxPrice=&PageSize=1&PageNumber=2",
      "previousPageURL":"/api/Order?MinPrice=&MaxPrice=&PageSize=1&PageNumber=false"
   },
   "statusCode":200,
   "msg":"this all Orders filtered",
   "response":[
      {
         "deliveryInfo":{
            "idState":3,
            "idUser":2012,
            "code":"18fa3853-1af9-4a12-a183-6cadcfc4d5c3"
         },
         "userInfo":{
            "id":2012,
            "idRole":2,
            "idAddress":2011,
            "name":"Thor",
            "secondName":"Odinson",
            "email":"principe@asgard.com"
         },
         "orderProducts":[
            {
               "idProduct":2,
               "idOrder":1,
               "productsNumber":1,
               "price":120000,
               "numberCard":null,
               "productInfo":{
                  "id":2,
                  "name":"GAN Mirror M (Magnético) UV 3×3 Morado",
                  "price":120000,
                  "stock":10,
                  "image":"eadc4650-7dab-4f70-9657-2354615566ed",
                  "description":"Nuevo desafío: GAN MirrorM es un nuevo diseño visual con un cubo de velocidad de 3 x 3, que no se resuelve con colores sino por formas. El cubo de espejo GAN te traerá más diversión",
                  "thumbnail":"39e50337-fe40-4683-88fb-b440d1bdb9a7"
               }
            }
         ],
         "id":1,
         "idUser":2012,
         "idDelivery":2,
         "date":"2024-07-22T17:50:04.367",
         "finalPrice":120000,
         "numberCard":"1234567890"
      }
   ]
}
`;

export const queryFilters = `
    public class OrderQueryFilters
    {
        public int PageSize { get; set; } = 20;
        public int PageNumber { get; set; } = 1;
        public DateTime? Date { get; set; }
        public DateTime? MinDate { get; set; }
        public DateTime? MaxDate { get; set; }
        public double? MinPrice { get; set; }
        public double? MaxPrice { get; set; }
        public int? IdUser { get; set; }
    }
`;

export const getById = `
{
	"deliveryInfo": {
		"idState": 3,
		"idUser": 2012,
		"code": "18fa3853-1af9-4a12-a183-6cadcfc4d5c3"
	},
	"userInfo": {
		"id": 2012,
		"idRole": 2,
		"idAddress": 2011,
		"name": "Thor",
		"secondName": "Odinson",
		"email": "principe@asgard.com"
	},
	"orderProducts": [
		{
			"idProduct": 2,
			"idOrder": 1,
			"productsNumber": 1,
			"price": 120000,
			"numberCard": null,
			"productInfo": {
				"id": 2,
				"name": "GAN Mirror M (Magnético) UV 3×3 Morado",
				"price": 120000,
				"stock": 10,
				"image": "eadc4650-7dab-4f70-9657-2354615566ed",
				"description": "Nuevo desafío: GAN MirrorM es un nuevo diseño visual con un cubo de velocidad de 3 x 3, que no se resuelve con colores sino por formas. El cubo de espejo GAN te traerá más diversión",
				"thumbnail": "39e50337-fe40-4683-88fb-b440d1bdb9a7"
			}
		}
	],
	"id": 1,
	"idUser": 2012,
	"idDelivery": 2,
	"date": "2024-07-22T17:50:04.367",
	"finalPrice": 120000,
	"numberCard": "1234567890"
}
`;

export const createOrder = `
{
  "idUser": 0,
  "date": "2024-12-29T22:27:48.194Z",
  "finalPrice": 0,
  "numberCard": "string",
  "orderProducts": [
    {
      "idProduct": 0,
      "productsNumber": 0,
      "price": 0
    }
  ]
}
`;
