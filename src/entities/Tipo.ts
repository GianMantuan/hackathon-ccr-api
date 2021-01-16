import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  Unique,
  JoinColumn,
} from "typeorm";
import Usuario from "./Usuario";


@Entity("tipo")
@Unique(["_id"])
export default class Formacao {
  @PrimaryColumn("uuid")
  _id: string;

  @Column()
  descricao: string;

  @OneToMany(() => Usuario, (usuario) => usuario.tipo)
  @JoinColumn({ name: "_id" })
  usuario: Usuario[];
}
