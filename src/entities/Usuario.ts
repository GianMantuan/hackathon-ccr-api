import Tipo from "./Tipo";

import { Entity, Column, Unique, PrimaryColumn, ManyToOne } from "typeorm";

@Entity("usuario")
@Unique(["_id"])
export default class Usuario {
  @PrimaryColumn("uuid")
  _id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @ManyToOne(()=>Tipo, tipo => tipo.usuario)
  tipo: Tipo;
}
