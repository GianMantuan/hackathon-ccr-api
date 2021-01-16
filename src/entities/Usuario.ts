import Tipo from "./Tipo";
import Curriculo from "./Curriculo";

import {
  Entity,
  Column,
  Unique,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from "typeorm";

@Entity("usuario")
@Unique(["_id"])
export default class Usuario {
  @PrimaryColumn("uuid")
  _id: string;

  @Column()
  tipoId: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @OneToOne(() => Curriculo, (curriculo) => curriculo, {
    cascade: true,
    onDelete: "CASCADE",
    primary: true,
  })
  curriculo: Curriculo;

  @ManyToOne(() => Tipo, (tipo) => tipo.usuario)
  @JoinColumn({ name: "tipoId" })
  tipo: Tipo;
}
