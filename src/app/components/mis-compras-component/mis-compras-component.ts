import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Compras } from '../../models/Compras';
import { ServiceCompras } from '../../services/serviceCompras';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-mis-compras-component',
  standalone: false,
  styleUrl: './mis-compras-component.css',
  templateUrl: './mis-compras-component.html',
})
export class MisComprasComponent implements OnInit {
  public compras: Compras[] = [];

  constructor(
    private _service: ServiceCompras,
    private _cdr: ChangeDetectorRef,
  ) {}

  async ngOnInit(): Promise<void> {
    this.compras = await this._service.getCompras();
    this._cdr.detectChanges();
  }

  generarDocumento(): void {
    const document = new jsPDF();

    document.setFontSize(18);
    document.text('Mis compras', 10, 10);
    document.setFontSize(12);

    const header = [['idCubo', 'idPedido', 'idUsuario', 'Fecha pedido']];
    const data = (this.compras ?? []).map((compra) => [
      compra.idCubo,
      compra.idPedido,
      compra.idUsuario,
      new Date(compra.fechaPedido).toLocaleString('es-ES'),
    ]);

    autoTable(document, {
      head: header,
      body: data,
      startY: 20,
    });

    window.open(document.output('bloburl'), '_blank');
  }
}
