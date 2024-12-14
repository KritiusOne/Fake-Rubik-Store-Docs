import type { entity } from "src/types/types";

export const product: entity = {
  EntityName: "Productos",
  description: "Contiene la lista de todos los productos disponibles en el sistema.",
  propierties: [
    {
      propiertyName: "id",
      dataType: "string",
      description: "Identificador único del producto.",
      isFK: false,
      isPK: true,
    },
    {
      propiertyName: "NombreProducto",
      dataType: "string",
      description: "Nombre del producto.",
      isFK: false,
    },
    {
      propiertyName: "Precio",
      dataType: "decimal",
      description: "Precio del producto.",
      isFK: false,
    },
    {
      propiertyName: "Inventario",
      dataType: "number",
      description: "Cantidad de producto en inventario.",
      isFK: false,
    },
    {
      propiertyName: "Imagen",
      dataType: "string",
      description: "URL de la imagen del producto.",
      isFK: false,
    },
    {
      propiertyName: "Descripción",
      dataType: "string",
      description: "Descripción detallada del producto.",
      isFK: false,
    },
    {
      propiertyName: "thumbnail",
      dataType: "string",
      description: "URL de la miniatura del producto.",
      isFK: false,
    },
    {
      propiertyName: "Marca",
      dataType: "string",
      description: "Marca del producto.",
      isFK: false,
    },
  ],
  relationships: [
    {
      typeRelation: "Uno a muchos",
      key: "id",
      tableRelation: "ProductCategory",
    },
    {
      typeRelation: "Uno a muchos",
      key: "id",
      tableRelation: "Reviews",
    },
  ],
};

export const category: entity = {
  description: "Se utiliza para clasificar los productos, lo cual es util para filtrar y buscar",
  EntityName: "Categoría",
  propierties: [
    {
      propiertyName: "id",
      description: "Identificador único de la categoría",
      dataType: "integer",
      isFK: false,
      isPK: true
    },
    {
      propiertyName: "name",
      dataType: "string",
      description: "Nombre de la categoría",
      isFK: false
    }
  ],
  relationships: [
    {
      tableRelation: "ProductCategory",
      key: "id",
      typeRelation: "Uno a muchos"
    }
  ]
}
export const userEntity: entity = {
  EntityName: "User",
  description: "Entidad que representa a los usuarios del sistema, incluyendo su información personal, roles, direcciones y relaciones con otras entidades como órdenes, entregas y reseñas.",
  propierties: [
    {
      propiertyName: "Id",
      dataType: "integer",
      description: "Identificador único del usuario.",
      isFK: false,
      isPK: true,
    },
    {
      propiertyName: "IdRole",
      dataType: "integer",
      description: "Identificador del rol asociado al usuario.",
      isFK: true,
    },
    {
      propiertyName: "IdAddress",
      dataType: "integer",
      description: "Identificador de la dirección asociada al usuario.",
      isFK: true,
    },
    {
      propiertyName: "Name",
      dataType: "string",
      description: "Nombre del usuario.",
      isFK: false,
    },
    {
      propiertyName: "SecondName",
      dataType: "string",
      description: "Apellido del usuario.",
      isFK: false,
    },
    {
      propiertyName: "Email",
      dataType: "string",
      description: "Correo electrónico del usuario.",
      isFK: false,
    },
    {
      propiertyName: "Password",
      dataType: "string",
      description: "Contraseña del usuario.",
      isFK: false,
    },
    {
      propiertyName: "Phone",
      dataType: "string",
      description: "Número de teléfono del usuario.",
      isFK: false,
    }
  ],
  relationships: [
    {
      typeRelation: "Uno a muchos",
      key: "Id",
      tableRelation: "Orders",
    },
    {
      typeRelation: "Uno a muchos",
      key: "Id",
      tableRelation: "Deliveries",
    },
    {
      typeRelation: "Uno a muchos",
      key: "Id",
      tableRelation: "Reviews",
    },
    {
      typeRelation: "Uno a muchos",
      key: "IdRole",
      tableRelation: "Role",
    },
    {
      typeRelation: "Uno a uno",
      key: "IdAddress",
      tableRelation: "Address",
    }
  ]
};
export const review: entity = {
  EntityName: "Review",
  description: "Representa una reseña de producto realizada por un usuario, incluyendo una calificación y una descripción opcional.",
  propierties: [
    {
      propiertyName: "ProductId",
      dataType: "integer",
      description: "Clave foránea que referencia el producto que se está reseñando.",
      isFK: true
    },
    {
      propiertyName: "UserId",
      dataType: "integer",
      description: "Clave foránea que referencia al usuario que realizó la reseña.",
      isFK: true
    },
    {
      propiertyName: "Description",
      dataType: "string",
      description: "Texto opcional que describe la reseña del usuario.",
      isFK: false
    },
    {
      propiertyName: "Rate",
      dataType: "integer",
      description: "Calificación otorgada por el usuario al producto.",
      isFK: false
    }
  ],
  relationships: [
    {
      typeRelation: "Uno a muchos",
      key: "ProductId",
      tableRelation: "Products"
    },
    {
      typeRelation: "Uno a muchos",
      key: "UserId",
      tableRelation: "User"
    }
  ]
};
