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

import Certificado from "./Certificado";
import CurriculoVaga from "./CurriculoVaga";
import Experiencia from "./Experiencia";
import Formacao from "./Formacao";
import Pretensao from "./Pretensao";
import Usuario from "./Usuario";

@Entity("curriculo")
@Unique(["_id"])
export default class Curriculo {
  @PrimaryColumn("uuid")
  _id: string;

  @OneToOne(() => Usuario, (usuario) => usuario.curriculo)
  @JoinColumn({ name: "_id" })
  usuario: Usuario;

  @OneToMany(() => CurriculoVaga, curriculoVaga => curriculoVaga.curriculoId)
  @JoinColumn({name: '_id'})
  curriculoVaga: CurriculoVaga[];

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

  @OneToMany(() => Experiencia, experiencia => experiencia.curriculo)
  @JoinColumn({name: 'curriculoId'})
  experiencia: Experiencia[];

  @OneToMany(() => Certificado, certificado => certificado.curriculo)
  @JoinColumn({name: 'curriculoId'})
  certificado: Certificado[];

  @OneToMany(() => Formacao, (formacao) => formacao.curriculo)
  @JoinColumn({ name: "curriculoId" })
  formacao: Formacao[];
}
