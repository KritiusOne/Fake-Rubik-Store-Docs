export const getAll = `
{
"msg": "This are all directions with users",
	"response": [
		{
			"user": {
				"id": 2014,
				"idRole": 2,
				"idAddress": 2013,
				"name": "James Jonah",
				"secondName": "Jameson",
				"email": "jjjameson@gmail.com",
				"phone": "3155504045",
				
			},
			"id": 2013,
			"address": "Calle 5 Cr 6 C7 #8",
			"city": "Cali",
			"state": "Valle del cauca",
			"country": "Colombia",
			"description": "Cerca de la tienda"
		},
		{
			"user": {
				"id": 2015,
				"idRole": 2,
				"idAddress": 2014,
				"name": "Salazar",
				"secondName": "Slytherin",
				"email": "sslytherin@gmail.com",
				"phone": "9090909009"
			},
			"id": 2014,
			"address": null,
			"city": null,
			"state": null,
			"country": null,
			"description": null
		}
  ]
}
`
export const updateBody = `
export interface UpdateAddress {
  id: number,
  address: string,
  city: string,
  state: string,
  country: string,
  description: string
}

`