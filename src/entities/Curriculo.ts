import Formacao from "./Formacao";

import { PrimaryColumn, OneToMany, Entity, Unique  } from "typeorm";

@Entity("curriculo")
@Unique(["_id"])
export default class Curriculo {
  @PrimaryColumn("uuid")
  _id: string;

  @OneToMany(() => Formacao, (formacao) => formacao.curriculo)
  formacao: Formacao;
}
