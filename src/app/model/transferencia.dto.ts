export class TransferenciaDTO {
  id?: bigint;
  contaOrigem!: string;
  contaDestino!: string;
  valor!: number;
  taxa?: number;
  dataTransferencia!: Date;
  dataAgendamento?: Date;
  taxaCalculada?: number;

  constructor(
    id?: bigint,
    contaOrigem?: string,
    contaDestino?: string,
    valor?: number,
    taxa?: number,
    dataTransferencia?: Date,
    dataAgendamento?: Date,
    taxaCalculada?: number
  ) {
    this.id = id;
    this.contaOrigem = contaOrigem || '';
    this.contaDestino = contaDestino || '';
    this.valor = valor || 0;
    this.taxa = taxa || 0;
    this.dataTransferencia = dataTransferencia || new Date();
    this.dataAgendamento = dataAgendamento || new Date();
    this.taxaCalculada = taxaCalculada || 0;
  }
}
