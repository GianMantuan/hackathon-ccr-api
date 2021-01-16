import Curriculo from "./Curriculo";

import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import Vaga from "./Vaga";

@Entity("pretensao")
export default class pretensao {
  curriculo: Curriculo[];

  @PrimaryGeneratedColumn("uuid")
  _id: string;

  @Column()
  descricao: string;

  @Column()
  pretensaoId: string;

  @ManyToMany(() => Vaga, vaga => vaga.pretensao)
  vaga: Vaga[];
}
