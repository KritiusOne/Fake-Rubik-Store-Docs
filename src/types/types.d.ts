export type HTTPUsedVerbs = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface entity {
  EntityName: string
  description: string
  propierties: propierty[]
  relationships: relationships[]
}
export interface propierty {
  propiertyName: string
  dataType: string
  description: string
  isFK: boolean
  isPK?: boolean
}
export interface relationships {
  typeRelation: TypeRelation
  key: string
  tableRelation: Entities
}
export type TypeRelation = "Muchos a muchos" | "Uno a muchos" | "Uno a uno"
export type Entities = 
  | "Categories"
  | "Address"
  | "Deliveries"
  | "Orders"
  | "Products"
  | "Reviews"
  | "Role"
  | "States"
  | "User"
  | "ProductCategory";
