import {
  Entity,
  Column,
  Unique,
  PrimaryColumn,
  OneToOne,
} from "typeorm";
import Curriculo from "./Curriculo";

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

  @OneToOne(() => Curriculo, (curriculo) => curriculo, {
    cascade: true,
    onDelete: "CASCADE",
    primary: true,
  })
  curriculo: Curriculo;
}
