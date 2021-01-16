import Formacao from "./Formacao";
import Pretensao from "./Pretensao";
import Usuario from "./Usuario";

import {
  PrimaryColumn,
  OneToMany,
  Entity,
  Unique,
  ManyToMany,
  JoinTable,
  OneToOne,
  JoinColumn,
} from "typeorm";

@Entity("curriculo")
@Unique(["_id"])
export default class Curriculo {
  @PrimaryColumn("uuid")
  _id: string;

  @OneToOne(() => Usuario, (usuario) => usuario.curriculo)
  @JoinColumn({ name: "_id" })
  usuario: Usuario;

  @OneToMany(() => Formacao, (formacao) => formacao.curriculo)
  @JoinColumn({ name: "curriculoId" })
  formacao: Formacao[];

  @ManyToMany(() => Pretensao, (pretensao) => pretensao.curriculo)
  @JoinTable({
    name: "pretensao_curriculo",
    joinColumn: {
      name: "curriculoId",
    },
    inverseJoinColumn: {
      name: "curriculoId",
    },
  })
  pretensao: Pretensao[];
}
