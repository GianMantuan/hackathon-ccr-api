import Formacao from "./Formacao";

import { PrimaryColumn, OneToMany } from "typeorm";

export default class Curriculo {
  @PrimaryColumn("uuid")
  _id: string;

  @OneToMany(() => Formacao, (formacao) => formacao.curriculo)
  formacao: Formacao;
}
