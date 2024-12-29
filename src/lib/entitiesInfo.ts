import type { entity } from "src/types/types";

export const product: entity = {
  EntityName: "Productos",
  description:
    "Contiene la lista de todos los productos disponibles en el sistema.",
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
  description:
    "Se utiliza para clasificar los productos, lo cual es util para filtrar y buscar",
  EntityName: "Categoría",
  propierties: [
    {
      propiertyName: "id",
      description: "Identificador único de la categoría",
      dataType: "integer",
      isFK: false,
      isPK: true,
    },
    {
      propiertyName: "name",
      dataType: "string",
      description: "Nombre de la categoría",
      isFK: false,
    },
  ],
  relationships: [
    {
      tableRelation: "ProductCategory",
      key: "id",
      typeRelation: "Uno a muchos",
    },
  ],
};
export const userEntity: entity = {
  EntityName: "User",
  description:
    "Entidad que representa a los usuarios del sistema, incluyendo su información personal, roles, direcciones y relaciones con otras entidades como órdenes, entregas y reseñas.",
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
    },
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
    },
  ],
};
export const review: entity = {
  EntityName: "Review",
  description:
    "Representa una reseña de producto realizada por un usuario, incluyendo una calificación y una descripción opcional.",
  propierties: [
    {
      propiertyName: "ProductId",
      dataType: "integer",
      description:
        "Clave foránea que referencia el producto que se está reseñando.",
      isFK: true,
      isPK: true,
    },
    {
      propiertyName: "UserId",
      dataType: "integer",
      description:
        "Clave foránea que referencia al usuario que realizó la reseña.",
      isFK: true,
      isPK: true,
    },
    {
      propiertyName: "Description",
      dataType: "string",
      description: "Texto opcional que describe la reseña del usuario.",
      isFK: false,
    },
    {
      propiertyName: "Rate",
      dataType: "integer",
      description: "Calificación otorgada por el usuario al producto.",
      isFK: false,
    },
  ],
  relationships: [
    {
      typeRelation: "Uno a muchos",
      key: "ProductId",
      tableRelation: "Products",
    },
    {
      typeRelation: "Uno a muchos",
      key: "UserId",
      tableRelation: "User",
    },
  ],
};
export const address: entity = {
  description:
    "La entidad Address almacena información relacionada con ubicaciones físicas de usuarios, destinos de entrega o direcciones asociadas a pedidos. Puede representar una dirección de facturación, envío u otra relacionada.",
  EntityName: "Dirección de usuario",
  propierties: [
    {
      propiertyName: "Id",
      dataType: "int",
      description: "Identificador único del registro",
      isFK: false,
      isPK: true,
    },
    {
      propiertyName: "City",
      dataType: "string",
      description: "Ciudad de residencia o donde se desea recibir los envíos",
      isFK: false,
    },
    {
      propiertyName: "State",
      dataType: "string",
      description:
        "Departamento, estado, región, etc. en el que se encuentra la ciudad",
      isFK: false,
    },
    {
      propiertyName: "Country",
      dataType: "string",
      description: "País donde se encuentra el estado y la ciudad del usuario",
      isFK: false,
    },
    {
      propiertyName: "Description",
      dataType: "string",
      description:
        "Descripción ampliada de la dirección del usuario, aquí pueden ir detalles como el codigo postal, la dirección exacta y/o una descripción del lugar",
      isFK: false,
    },
  ],
  relationships: [
    {
      key: "Id",
      tableRelation: "User",
      typeRelation: "Uno a uno",
    },
  ],
};

export const ProductCategory: entity = {
  EntityName: "ProductCategory",
  description:
    "Table auxiliar para relacionar de muchos a muchos a los productos con las categorias",
  propierties: [
    {
      propiertyName: "IdCategory",
      dataType: "int",
      description:
        "FK que lo relaciona con la entidad de las categorías y a su vez es parte de la clave compuesta",
      isFK: true,
      isPK: true,
    },
    {
      propiertyName: "IdProduct",
      dataType: "int",
      description:
        "FK que lo relaciona con la entidad de los productos y a su vez es parte de la clave compuesta",
      isFK: true,
      isPK: true,
    },
  ],
  relationships: [
    {
      key: "IdCategory",
      tableRelation: "Categories",
      typeRelation: "Uno a muchos",
    },
    {
      key: "IdProduct",
      tableRelation: "Products",
      typeRelation: "Uno a muchos",
    },
  ],
};

export const ordersEntity: entity = {
  EntityName: "Ordenes",
  description:
    "La tabla Orders almacena la información relacionada con los pedidos realizados por los usuarios en el sistema. Cada registro representa un pedido único que incluye detalles del usuario que lo realizó, la fecha en que se hizo el pedido y el precio total del mismo. Además, la tabla contiene claves foráneas para vincularla con las tablas de usuarios y métodos de entrega, permitiendo gestionar relaciones con otras entidades del sistema.",
  propierties: [
    {
      propiertyName: "Id",
      dataType: "int",
      description: "Identificador único del pedido.",
      isFK: false,
      isPK: true,
    },
    {
      propiertyName: "IdUser",
      dataType: "int",
      description: "Identificador del usuario que realizó el pedido.",
      isFK: true,
    },
    {
      propiertyName: "IdDelivery",
      dataType: "int",
      description: "Identificador del envío.",
      isFK: true,
    },
    {
      propiertyName: "DateOrder",
      dataType: "Date",
      description: "Fecha en que se realizó el pedido.",
      isFK: false,
    },
    {
      propiertyName: "TotalPrice",
      dataType: "number",
      description: "Precio total del pedido.",
      isFK: false,
    },
  ],
  relationships: [
    {
      typeRelation: "Uno a muchos",
      key: "IdUser",
      tableRelation: "User",
    },
    {
      typeRelation: "Uno a uno",
      key: "IdDelivery",
      tableRelation: "Deliveries",
    },
  ],
};

export const OrdersProducts: entity = {
  EntityName: "OrdersProducts",
  description:
    "Es una entidad auxiliar que representa la relación de muchos a muchos entre los productos y las ordenes.",
  propierties: [
    {
      propiertyName: "IdProduct",
      dataType: "int",
      description:
        "FK que lo relaciona con la entidad de los productos y a su vez es parte de la clave compuesta",
      isFK: true,
      isPK: true,
    },
    {
      propiertyName: "IdOrders",
      dataType: "int",
      description:
        "FK que lo relaciona con la entidad de las ordenes y a su vez es parte de la clave compuesta",
      isFK: true,
      isPK: true,
    },
    {
      propiertyName: "ProductsNumbers",
      dataType: "int",
      description: "Cantidad de unidades compradas",
      isFK: false,
    },
    {
      propiertyName: "Price",
      dataType: "double",
      description: "Precio de la compra de estas unidades",
      isFK: false,
    },
  ],
  relationships: [
    {
      key: "IdProduct",
      tableRelation: "Products",
      typeRelation: "Uno a muchos",
    },
    {
      key: "IdOrders",
      tableRelation: "Orders",
      typeRelation: "Uno a muchos",
    },
  ],
};
