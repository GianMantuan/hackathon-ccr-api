import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  Unique,
} from "typeorm";

import Curriculo from "./Curriculo";

@Entity("formacao")
@Unique(["_id"])
export default class Formacao {
  @PrimaryColumn("uuid")
  _id: string;

  @Column()
  curriculoId: string;

  @Column()
  intituicao: string;

  @Column()
  areaEstudo: string;

  @Column()
  dataInicio: Date;

  @Column()
  dataTermino: Date;

  @ManyToOne(() => Curriculo, (curriculo) => curriculo.formacao)
  @JoinColumn({ name: "_id" })
  curriculo: Curriculo[];
}
