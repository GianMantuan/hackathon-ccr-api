import Usuario from "./Usuario";

import { Column, Entity, OneToMany, PrimaryColumn, Unique } from "typeorm";

@Entity("tipo")
@Unique(["_id"])
export default class Formacao {
  @PrimaryColumn("uuid")
  _id: string;

  @Column()
  descricao: string;

  @OneToMany(() => Usuario, (usuario) => usuario.tipo)
  usuario: Usuario;
}
