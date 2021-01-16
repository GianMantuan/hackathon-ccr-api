import { Column, Entity, PrimaryColumn } from "typeorm";

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
}