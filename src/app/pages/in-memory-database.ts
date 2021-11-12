import { InMemoryDbService } from "angular-in-memory-web-api";
import { Categorias } from "src/app/pages/categorias/shared/categorias.model";

export class InMemoryDatabase implements InMemoryDbService {
    createDb(){
        const categorias = [
            { id: 1, nome: 'Moradia', descricao: 'Pagamentos de contas da casa' },
            { id: 2, nome: 'Saúde', descricao: 'Plano de Saúde e Remédios' },
            { id: 3, nome: 'Lazer', descricao: 'Cinema, parques, praia, etc' },
            { id: 4, nome: 'Salário', descricao: 'Recebimento de salário' },
            { id: 5, nome: 'Freelas', descricao: 'Trabalhos como freelancer' }
        ];
        return{categorias}
    }
}