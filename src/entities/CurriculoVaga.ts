import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import Curriculo from "./Curriculo";
import Vaga from "./Vaga";

@Entity('curriculo_vaga')
export default class CurriculoVaga {
  @PrimaryColumn()
  curriculoId: string

  @PrimaryColumn()
  vagaId: string

  @Column()
  selecionado: boolean

  @Column()
  motivo: string

  @ManyToOne(() => Curriculo, curriculo => curriculo.curriculoVaga)
  @JoinColumn({name: 'curriculoId'})
  curriculo: Curriculo;

  @ManyToOne(() => Vaga, vaga => vaga.curriculoVaga)
  @JoinColumn({name: 'vagaId'})
  vaga: Vaga;
}