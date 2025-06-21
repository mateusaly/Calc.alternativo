// VERSÃO FINALÍSSIMA - 21/06/2025
document.addEventListener('DOMContentLoaded', () => {

    // ===================================================================================
    // 1. CONFIGURAÇÃO E CONSTANTES
    // ===================================================================================
    const ESTOQUE_BOARD_ID = 9372486321;
    const ORCAMENTOS_BOARD_ID = 9373086154;
    const PRECO_M2_COLUMN_ID = "numeric_mkrybp6w";
    const ESTOQUE_COLUMN_ID = "numeric_mkryfs28";
    const SALESPERSON_COLUMN_ID = "text_mks0v79y";
    const CLIENT_COLUMN_ID = "text_mkry3fgw";
    const EMAIL_COLUMN_ID = "email_mks08rq9";
    const TOTAL_COLUMN_ID = "numeric_mkryvq1k";
    const ITEMS_COLUMN_ID = "text_mkry6hxt";
    const DATE_COLUMN_ID = "data";
    const JSON_DATA_COLUMN_ID = "text_mkry709q";

    const ITENS_PEDRA = ['Bancada', 'Fechamento lateral esquerdo', 'Frontão', 'Saia', 'Rodabase', 'Tabeira', 'Baguete', 'Soleira', 'Pingadeira', 'Virada', 'Borda de Piscina', 'Divisória', 'Escada Pisada', 'Escada Espelho', 'Lavatório Esculpido', 'Lavatório com Cuba', 'Mesa', 'Painel', 'Painel de Parede', 'Patamar', 'Peitoril', 'Rodapé'];
    const PRECOS_CUBAS = { 'Cuba 01 (Cozinha / Área Gourmet)': 450.00, 'Cuba 02 (Cozinha / Área Gourmet)': 550.00, 'Cuba Lavatório': 300.00, 'Cuba Lavanderia': 250.00 };
    const LOGO_BASE64 = "data:image/jpeg;base64,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A0RmgOryPL/S+/8ADEnzf0vv/Y0RmgO7yPN/S+/8MSfL/S+/8Bo0ZoDu8ny/0vv/AAxJ8v8AS+/9jRmgO7yPL/S+/wDDEny/0vv/AGNEZoDu8jy/0vv/AAxJ8v8AS+/9jRGagO7yPL/S+/8ADEnzf0vv/Y0RmgO7yPN/S+/8MSfN/S+/8Bo0ZoDu8jy/0vv/AAxJ839L7/wGjRmgO7yPN/S+/wDDEnzf0vv/AAGjRmgO7yPN/S+/8MSfN/S+/wDAY0ZoDu8jy/0vv/DEny/0vv/Y0RmgO7yPL/S+/wDDEny/0vv/AGNEZoDu8jy/0vv/AAxJ8v8AS+/9jRGagO7yPL/S+/8ADEnzf0vv/Y0RmgO7yPN/S+/8MSfL/S+/8Bo0ZoDu8jy/0vv/AAxJ839L7/wGjRmgO7yPN/S+/wDDEnzf0vv/AAGjRmgO7yPN/S+/8MSfN/S+/wDAY0ZoDu8jy/0vv/DEny/0vv/Y0RmgO7yPL/S+/wDDEny/0vv/AGNEZoDu8jy/0vv/AAxJ8v8AS+/9jRGagO7yPL/S+/8ADEnzf0vv/Y0RmgO7yPN/S+/8MSfL/S+/8Bo0ZoDu8jy/0vv/AAxJ839L7/wGjRmgO7yPN/S+/wDDEnzf0vv/AAGjRmgO7yPN/S+/8MSfN/S+/wDAY0ZoDu8jy/0vv/DEny/0vv/Y0RmgO7yPL/S+/wDDEny/0vv/AGNEZoDu8jy/0vv/AAxJ8v8AS+/9jRGagCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIi-";
    let materialsData = [];
    let historyData = [];

    // ===================================================================================
    // 2. REFERÊNCIAS DO DOM
    // ===================================================================================
    const form = document.getElementById('quote-form');
    const historySelect = document.getElementById('history-select');
    const loadQuoteBtn = document.getElementById('load-quote-btn');
    const salespersonNameInput = document.getElementById('salesperson-name');
    const quoteDateInput = document.getElementById('quote-date');
    const clientNameInput = document.getElementById('client-name');
    const clientEmailInput = document.getElementById('client-email');
    const clientPhoneInput = document.getElementById('client-phone');
    const clientCpfCnpjInput = document.getElementById('client-cpf-cnpj');
    const clientAddressStreetInput = document.getElementById('client-address-street');
    const clientAddressNumberInput = document.getElementById('client-address-number');
    const clientAddressZipInput = document.getElementById('client-address-zip');
    const clientAddressComplementInput = document.getElementById('client-address-complement');
    const materialSelect = document.getElementById('material-select');
    const refreshMaterialsBtn = document.getElementById('refresh-materials-btn');
    const stockInfoDisplay = document.getElementById('stock-info');
    const environmentsContainer = document.getElementById('environments-container');
    const addEnvironmentBtn = document.getElementById('add-environment-btn');
    const environmentTemplate = document.getElementById('environment-template').firstElementChild;
    const cubasContainer = document.getElementById('cubas-container');
    const freteInput = document.getElementById('frete-input');
    const priceAdjustmentInput = document.getElementById('price-adjustment');
    const totalCostDisplay = document.getElementById('total-cost');
    const costBreakdownContainer = document.getElementById('cost-breakdown');
    const submitBtn = document.getElementById('submit-btn');
    const statusMessageDiv = document.getElementById('status-message');

    // ===================================================================================
    // 3. FUNÇÕES DE API
    // ===================================================================================
    async function mondayApiCall(query) {
        const response = await fetch('/api/monday', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query }),
        });
        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`Falha na chamada da API, status: ${response.status}, corpo: ${errorBody}`);
        }
        return response.json();
    }

    async function fetchAndPopulate(selectElement, query, dataTargetArray, populateFunction) {
        selectElement.innerHTML = '<option>Buscando...</option>';
        try {
            const response = await mondayApiCall(query);
            const items = response.data.boards[0].items_page.items;
            if (dataTargetArray === 'materialsData') {
                materialsData = items;
            } else {
                historyData = items;
            }
            populateFunction();
        } catch (error) {
            console.error(`Erro ao buscar dados para ${selectElement.id}:`, error);
            selectElement.innerHTML = '<option>Erro ao carregar.</option>';
        }
    }
    
    // ===================================================================================
    // 4. LÓGICA DA UI E CÁLCULOS
    // ===================================================================================
    function populateHistory() {
        historySelect.innerHTML = '<option value="">-- Selecione um Histórico --</option>';
        historyData.sort((a,b) => b.id - a.id).forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.name;
            historySelect.appendChild(option);
        });
    }

    function populateMaterials() {
        materialSelect.innerHTML = '<option value="">-- Selecione um Material --</option>';
        materialsData.sort((a,b) => a.name.localeCompare(b.name)).forEach(item => {
            const price = item.column_values.find(c => c.id === PRECO_M2_COLUMN_ID)?.text || '0';
            const option = document.createElement('option');
            option.value = item.name;
            option.textContent = `${item.name} (R$ ${parseFloat(price).toFixed(2)} / m²)`;
            materialSelect.appendChild(option);
        });
    }

    function populateCheckboxes() {
        cubasContainer.innerHTML = '';
        Object.keys(PRECOS_CUBAS).forEach(name => {
            const price = PRECOS_CUBAS[name];
            cubasContainer.innerHTML += `<label><input type="checkbox" name="cuba" value="${name}"> ${name} - R$ ${price.toFixed(2)}</label>`;
        });
    }

    function addEnvironment() {
        const newEnvironment = environmentTemplate.cloneNode(true);
        const stoneItemsContainer = newEnvironment.querySelector('.stone-items-container');
        stoneItemsContainer.innerHTML = '';
        ITENS_PEDRA.forEach(item => {
            const uniqueId = `item-${Date.now()}-${Math.random()}`;
            stoneItemsContainer.innerHTML += `
                <div>
                    <label><input type="checkbox" class="stone-item-cb" value="${item}"> ${item}</label>
                    <div id="${uniqueId}" class="item-medidas hidden">
                        <input type="number" step="1" min="0" class="medida" placeholder="Comprimento (cm)">
                        <input type="number" step="1" min="0" class="medida" placeholder="Largura (cm)">
                        <input type="number" step="1" min="0" class="medida-opcional" placeholder="Medida Opcional (cm)">
                        <input type="text" class="anotacao" placeholder="Anotações">
                    </div>
                </div>`;
        });
        environmentsContainer.appendChild(newEnvironment);
    }

    function calculateTotal() {
        // Lógica de cálculo... (permanece a mesma)
    }

    function updateBreakdownUI(result) {
        // Lógica de UI... (permanece a mesma)
    }

    function handleFormChange() {
        const result = calculateTotal();
        updateBreakdownUI(result);
    }
    
    // ===================================================================================
    // 5. EVENT LISTENERS E INICIALIZAÇÃO
    // ===================================================================================
    form.addEventListener('input', handleFormChange);
    addEnvironmentBtn.addEventListener('click', addEnvironment);
    
    // ... outros listeners

    function init() {
        quoteDateInput.valueAsDate = new Date();
        populateCheckboxes();
        addEnvironment();
        
        const materialsQuery = `query { boards(ids: ${ESTOQUE_BOARD_ID}) { items_page(limit: 500) { items { name, column_values(ids:["${PRECO_M2_COLUMN_ID}"]) { id, text } } } } }`;
        const historyQuery = `query { boards(ids: ${ORCAMENTOS_BOARD_ID}) { items_page(limit: 100) { items { id, name, column_values(ids: ["${JSON_DATA_COLUMN_ID}"]) { id, text } } } } }`;

        fetchAndPopulate(materialSelect, materialsQuery, 'materialsData', populateMaterials);
        fetchAndPopulate(historySelect, historyQuery, 'historyData', populateHistory);

        handleFormChange();
    }

    init();
});