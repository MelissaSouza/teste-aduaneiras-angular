import { Component } from '@angular/core';

declare var $: any; // Declaração para utilizar o jQuery

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true // Adicione esta linha para marcar o componente como independente
})
export class AppComponent {
  title = 'meu-projeto-angular';

  editarLinha(event: MouseEvent) {
    const button = event.target as HTMLElement;
    const row = button.parentNode?.parentNode as HTMLTableRowElement;
    if (!row) return;
    const cells = row.getElementsByTagName("td");
  
    // Capturando os valores das células da linha
    const adicao = cells[0]?.innerHTML || '';
    const codigoNCM = cells[1]?.innerHTML || '';
    const paisOrigem = cells[2]?.innerHTML || '';
    const unidadeMedida = cells[3]?.innerHTML || '';
    const quantidadeMedida = cells[4]?.innerHTML || '';
    const paisAquisicao = cells[5]?.innerHTML || '';
    const unidadeComercializada = cells[6]?.innerHTML || '';
    const quantidadeComercializada = cells[7]?.innerHTML || '';
    const inconterm = cells[8]?.innerHTML || '';
    const valorAduaneiro = cells[9]?.innerHTML || '';
  
    // Preenchendo os campos do formulário no modal
    const adicaoElement = document.getElementById('adicao') as HTMLInputElement;
    adicaoElement.value = adicao;
    const codigoNCMElement = document.getElementById('codigoNCM') as HTMLInputElement;
    codigoNCMElement.value = codigoNCM;
    const paisOrigemElement = document.getElementById('paisOrigem') as HTMLInputElement;
    paisOrigemElement.value = paisOrigem;
    const unidadeMedidaElement = document.getElementById('unidadeMedida') as HTMLInputElement;
    unidadeMedidaElement.value = unidadeMedida;
    const quantidadeMedidaElement = document.getElementById('quantidadeMedida') as HTMLInputElement;
    quantidadeMedidaElement.value = quantidadeMedida;
    const paisAquisicaoElement = document.getElementById('paisAquisicao') as HTMLInputElement;
    paisAquisicaoElement.value = paisAquisicao;
    const unidadeComercializadaElement = document.getElementById('unidadeComercializada') as HTMLInputElement;
    unidadeComercializadaElement.value = unidadeComercializada;
    const quantidadeComercializadaElement = document.getElementById('quantidadeComercializada') as HTMLInputElement;
    quantidadeComercializadaElement.value = quantidadeComercializada;
    const incontermElement = document.getElementById('inconterm') as HTMLInputElement;
    incontermElement.value = inconterm;
    const incontermTextElement = document.getElementById('incontermText') as HTMLInputElement;
    incontermTextElement.value = inconterm;
    const valorAduaneiroElement = document.getElementById('valorAduaneiro') as HTMLInputElement;
    valorAduaneiroElement.value = valorAduaneiro;
  
    // Exibindo o modal
    $('#modalIncluirAdicao').modal('show');
  }

  excluirLinha(event: MouseEvent) {
    const button = event.target as HTMLElement;
    const row = button.parentNode?.parentNode as HTMLTableRowElement;
    if (!row) return;
    row.parentNode?.removeChild(row);
  }

  gravarDados() {
    const adicao = (document.getElementById('adicao') as HTMLInputElement)?.value || '';
    const codigoNCM = (document.getElementById('codigoNCM') as HTMLInputElement)?.value || '';
    const paisOrigem = (document.getElementById('paisOrigem') as HTMLInputElement)?.value || '';
    const unidadeMedida = (document.getElementById('unidadeMedida') as HTMLInputElement)?.value || '';
    const quantidadeMedida = (document.getElementById('quantidadeMedida') as HTMLInputElement)?.value || '';
    const paisAquisicao = (document.getElementById('paisAquisicao') as HTMLInputElement)?.value || '';
    const unidadeComercializada = (document.getElementById('unidadeComercializada') as HTMLInputElement)?.value || '';
    const quantidadeComercializada = (document.getElementById('quantidadeComercializada') as HTMLInputElement)?.value || '';
    const inconterm = (document.getElementById('inconterm') as HTMLInputElement)?.value || '';
    const incontermText = (document.getElementById('incontermText') as HTMLInputElement)?.value || '';
    const valorAduaneiro = (document.getElementById('valorAduaneiro') as HTMLInputElement)?.value || '';
    const aduaneiroText = (document.getElementById('aduaneiroText') as HTMLInputElement)?.value || '';

    const table = document.getElementById('planilha') as HTMLTableElement;
    const newRow = table.insertRow(-1);

    const cellAdicao = newRow.insertCell(0);
    const cellCodigoNCM = newRow.insertCell(1);
    const cellPaisOrigem = newRow.insertCell(2);
    const cellUnidadeMedida = newRow.insertCell(3);
    const cellQuantidadeMedida = newRow.insertCell(4);
    const cellPaisAquisicao = newRow.insertCell(5);
    const cellUnidadeComercializada = newRow.insertCell(6);
    const cellQuantidadeComercializada = newRow.insertCell(7);
    const cellInconterm = newRow.insertCell(8);
    const cellValorAduaneiro = newRow.insertCell(9);

    cellAdicao.innerHTML = adicao;
    cellCodigoNCM.innerHTML = codigoNCM;
    cellPaisOrigem.innerHTML = paisOrigem;
    cellUnidadeMedida.innerHTML = unidadeMedida;
    cellQuantidadeMedida.innerHTML = quantidadeMedida;
    cellPaisAquisicao.innerHTML = paisAquisicao;
    cellUnidadeComercializada.innerHTML = unidadeComercializada;
    cellQuantidadeComercializada.innerHTML = quantidadeComercializada;
    cellInconterm.innerHTML = inconterm;
    cellValorAduaneiro.innerHTML = valorAduaneiro;

    $('#modalIncluirAdicao').modal('hide');
  }
}