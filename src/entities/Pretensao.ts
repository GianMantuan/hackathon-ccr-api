import Curriculo from "./Curriculo";

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pretensao")
export default class pretensao {
  curriculo: Curriculo[];

  @PrimaryGeneratedColumn("uuid")
  _id: string;

  @Column()
  descricao: string;

  @Column()
  pretensaoId: string;
}
