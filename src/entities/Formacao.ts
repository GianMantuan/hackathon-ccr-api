import { Column, Entity, ManyToOne, PrimaryColumn, Unique } from "typeorm";

import Curriculo from "./Curriculo";

@Entity("formacao")
@Unique(["_id"])
export default class Formacao {
  @PrimaryColumn("uuid")
  _id: string;

  @ManyToOne(() => Curriculo, (curriculo) => curriculo.formacao)
  curriculo: Curriculo;

  intituicao: string;
  @Column()
  @Column()
  areaEstudo: string;

  @Column()
  dataInicio: Date;

  @Column()
  dataTermino: Date;
}
