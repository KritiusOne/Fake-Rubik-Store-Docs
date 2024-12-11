import type { entity } from "src/types/types";

export const product: entity = {
  EntityName: "Productos",
  description: "Contiene la lista de todos los productos disponibles en el sistema.",
  propierties: [
    {
      propiertyName: "Id",
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
      key: "IdProducto",
      tableRelation: "ProductCategory",
    },
    {
      typeRelation: "Uno a muchos",
      key: "IdProducto",
      tableRelation: "Reviews",
    },
  ],
};
