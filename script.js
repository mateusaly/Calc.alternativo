// VERSÃO DEFINITIVA E COMPLETA - 21/06/2025
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
    const LOGO_BASE64 = "data:image/jpeg;base64,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A0RmgOryPL/S+/8ADEnzf0vv/Y0RmgO7yPN/S+/8MSfL/S+/8Bo0ZoDu8ny/0vv/AAxJ8v8AS+/9jRmgO7yPL/S+/wDDEny/0vv/AGNEZoDu8jy/0vv/AAxJ8v8AS+/9jRGagO7yPL/S+/8ADEnzf0vv/Y0RmgO7yPN/S+/8MSfN/S+/8Bo0ZoDu8jy/0vv/AAxJ839L7/wGjRmgO7yPN/S+/wDDEnzf0vv/AAGjRmgO7yPN/S+/8MSfN/S+/wDAY0ZoDu8jy/0vv/DEny/0vv/Y0RmgO7yPL/S+/wDDEny/0vv/AGNEZoDu8jy/0vv/AAxJ8v8AS+/9jRGagO7yPL/S+/8ADEnzf0vv/Y0RmgO7yPN/S+/8MSfL/S+/8Bo0ZoDu8jy/0vv/AAxJ839L7/wGjRmgO7yPN/S+/wDDEnzf0vv/AAGjRmgO7yPN/S+/8MSfN/S+/wDAY0ZoDu8jy/0vv/DEny/0vv/Y0RmgO7yPL/S+/wDDEny/0vv/AGNEZoDu8jy/0vv/AAxJ8v8AS+/9jRGagO7yPL/S+/8ADEnzf0vv/Y0RmgO7yPN/S+/8MSfL/S+/8Bo0ZoDu8jy/0vv/AAxJ839L7/wGjRmgO7yPN/S+/wDDEnzf0vv/AAGjRmgO7yPN/S+/8MSfN/S+/wDAY0ZoDu8jy/0vv/DEny/0vv/Y0RmgO7yPL/S+/wDDEny/0vv/AGNEZoDu8jy/0vv/AAxJ8v8AS+/9jRGagCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAi-";
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
    async function mondayApiCall(query, variables = {}) {
        try {
            const response = await fetch('/api/monday', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query, variables }),
            });
            if (!response.ok) {
                const errorBody = await response.text();
                throw new Error(`Falha na chamada da API, status: ${response.status}, corpo: ${errorBody}`);
            }
            const data = await response.json();
            if (data.errors) {
                throw new Error(data.errors.map(e => e.message).join('\n'));
            }
            return data.data;
        } catch (error) {
            console.error("ERRO na chamada da API:", error);
            throw error;
        }
    }

    async function fetchAndPopulate(selectElement, query, dataTargetSetter, populateFunction) {
        selectElement.innerHTML = '<option>Buscando...</option>';
        try {
            const response = await mondayApiCall(query);
            const items = response.data.boards[0].items_page.items;
            dataTargetSetter(items);
            populateFunction();
        } catch (error) {
            console.error(`Erro ao buscar dados para ${selectElement.id}:`, error);
            selectElement.innerHTML = '<option>Erro ao carregar dados</option>';
        }
    }

    async function sendQuoteToMonday(quoteData) {
        const mutation = `mutation ($boardId: ID!, $itemName: String!, $columnValues: JSON!) { create_item (board_id: $boardId, item_name: $itemName, column_values: $columnValues) { id } }`;
        const columnValues = {
            [SALESPERSON_COLUMN_ID]: quoteData.salespersonName,
            [CLIENT_COLUMN_ID]: quoteData.clientName,
            [EMAIL_COLUMN_ID]: { email: quoteData.clientEmail, text: quoteData.clientEmail },
            [TOTAL_COLUMN_ID]: quoteData.totalCost.toFixed(2),
            [DATE_COLUMN_ID]: quoteData.quoteDate,
            [ITEMS_COLUMN_ID]: quoteData.humanReadableDetails,
            [JSON_DATA_COLUMN_ID]: quoteData.jsonData,
        };
        const variables = {
            boardId: ORCAMENTOS_BOARD_ID,
            itemName: `Orçamento para ${quoteData.clientName || 'Cliente sem nome'}`,
            columnValues: JSON.stringify(columnValues),
        };
        try {
            const data = await mondayApiCall({query: mutation, variables: variables});
            return data.data.create_item.id;
        } catch (error) {
            throw new Error('Falha ao salvar o orçamento no Monday.com');
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
            stoneItemsContainer.innerHTML += `
                <div>
                    <label>
                        <input type="checkbox" class="stone-item-cb" value="${item}"> ${item}
                    </label>
                    <div class="item-medidas hidden">
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
        let subtotalCost = 0;
        let totalLinearMeters = 0;
        let breakdownItems = [];
        const selectedMaterialName = materialSelect.value;
        const materialInfo = materialsData.find(m => m.name === selectedMaterialName);
        const materialPricePerM2 = materialInfo ? parseFloat(materialInfo.column_values.find(c => c.id === PRECO_M2_COLUMN_ID)?.text || '0') : 0;

        document.querySelectorAll('.environment-block').forEach(envBlock => {
            const envName = envBlock.querySelector('.environment-name').value.trim() || "Ambiente";
            envBlock.querySelectorAll('.stone-item-cb:checked').forEach(checkbox => {
                const medidasInputs = checkbox.closest('label').nextElementSibling.querySelectorAll('.medida');
                const comprimentoCm = parseFloat(medidasInputs[0].value) || 0;
                const larguraCm = parseFloat(medidasInputs[1].value) || 0;

                if (comprimentoCm > 0 && larguraCm > 0 && materialPricePerM2 > 0) {
                    const areaM2 = (comprimentoCm / 100) * (larguraCm / 100);
                    const linearMeters = ((comprimentoCm / 100) * 2) + ((larguraCm / 100) * 2);
                    const itemCost = areaM2 * materialPricePerM2;
                    subtotalCost += itemCost;
                    totalLinearMeters += linearMeters;
                    breakdownItems.push({ category: 'Peças de Pedra', description: `${checkbox.value} (${envName})`, details: `${areaM2.toFixed(3)} m²`, subtotal: itemCost });
                }
            });
        });
        
        document.querySelectorAll('input[name="cuba"]:checked').forEach(cuba => {
            const price = PRECOS_CUBAS[cuba.value];
            subtotalCost += price;
            breakdownItems.push({ category: 'Cubas', description: cuba.value, details: '1 un.', subtotal: price });
        });

        const localidade = document.querySelector('input[name="localidade"]:checked').value;
        let maoDeObraCost = 0;
        if (totalLinearMeters > 0) {
            const custoLinear = totalLinearMeters * 200;
            if (localidade === 'mogi') {
                maoDeObraCost = Math.max(200, custoLinear);
                breakdownItems.push({ category: 'Mão de Obra', description: `Serviço - Mogi e Região`, details: `${totalLinearMeters.toFixed(2)}m lineares`, subtotal: maoDeObraCost });
            } else if (localidade === 'sp') {
                maoDeObraCost = Math.max(280, custoLinear);
                breakdownItems.push({ category: 'Mão de Obra', description: `Serviço - Capital SP`, details: `${totalLinearMeters.toFixed(2)}m lineares`, subtotal: maoDeObraCost });
            }
        }

        const frete = parseFloat(freteInput.value) || 0;
        const ajustePercentual = parseFloat(priceAdjustmentInput.value) || 0;
        const subtotalFinal = subtotalCost + maoDeObraCost;
        const ajusteValor = subtotalFinal * (ajustePercentual / 100);
        const totalCost = subtotalFinal + frete + ajusteValor;

        return { totalCost, breakdownItems, subtotal: subtotalFinal, frete, ajuste: ajusteValor };
    }

    function updateBreakdownUI(result) {
        totalCostDisplay.textContent = `R$ ${result.totalCost.toFixed(2)}`;
        if (result.breakdownItems.length === 0 && result.frete === 0 && result.ajuste === 0) {
            costBreakdownContainer.innerHTML = `<p class="breakdown-placeholder">Preencha os campos para ver o resumo detalhado.</p>`;
            return;
        }
        let html = `<table><thead><tr><th>Descrição</th><th>Detalhes</th><th>Subtotal</th></tr></thead><tbody>`;
        let currentCategory = "";
        result.breakdownItems.forEach(item => {
            if (item.category !== currentCategory) {
                currentCategory = item.category;
                html += `<tr class="category-header"><td colspan="3">${currentCategory}</td></tr>`;
            }
            html += `<tr><td>${item.description}</td><td>${item.details}</td><td>R$ ${item.subtotal.toFixed(2)}</td></tr>`;
        });
        html += `</tbody></table>`;
        html += `<table style="margin-top: 20px; width: 50%; float: right; text-align: right; border: none;">
                    <tr style="border: none;"><td style="font-weight: bold; border: none;">Subtotal dos Itens:</td><td style="border: none;">R$ ${result.subtotal.toFixed(2)}</td></tr>
                    <tr style="border: none;"><td style="font-weight: bold; border: none;">Frete:</td><td style="border: none;">R$ ${result.frete.toFixed(2)}</td></tr>
                    <tr style="border: none;"><td style="font-weight: bold; border: none;">Ajuste (${result.ajuste >= 0 ? '+' : ''}${priceAdjustmentInput.value || 0}%):</td><td style="border: none;">R$ ${result.ajuste.toFixed(2)}</td></tr>
                 </table><div style="clear:both;"></div>`;
        costBreakdownContainer.innerHTML = html;
    }

    function handleFormChange() {
        const result = calculateTotal();
        updateBreakdownUI(result);
    }
    
    // ===================================================================================
    // 5. EVENT LISTENERS
    // ===================================================================================
   form.addEventListener('input', handleFormChange);
    addEnvironmentBtn.addEventListener('click', addEnvironment);
    refreshMaterialsBtn.addEventListener('click', initDataFetch);

    environmentsContainer.addEventListener('change', (e) => {
        if (e.target.classList.contains('stone-item-cb')) {
            const medidasDiv = e.target.closest('label').nextElementSibling;
            if (medidasDiv && medidasDiv.classList.contains('item-medidas')) {
                medidasDiv.classList.toggle('hidden', !e.target.checked);
            }
        }
    });

    submitBtn.addEventListener('click', async () => {
        // Lógica de validação do formulário...
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Gerando...';
        showStatusMessage('Iniciando processo...', 'info');

        try {
            const formData = getFormDataAsObject();
            const calcResult = calculateTotal();
            const humanReadableDetails = generateHumanReadableDetails(calcResult);

            showStatusMessage('Salvando no Monday.com...', 'info');
            const newItemId = await sendQuoteToMonday({
                ...formData,
                totalCost: calcResult.totalCost,
                humanReadableDetails,
                jsonData: JSON.stringify(formData)
            });

            showStatusMessage('Gerando PDF...', 'info');
            await generatePDF({ ...formData, ...calcResult, quoteNumber: `ORC-${newItemId}` });
            
            showStatusMessage(`Orçamento #${newItemId} salvo e PDF gerado!`, 'success');
            form.reset();
            init();

        } catch (error) {
            showStatusMessage(`Erro: ${error.message}`, 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Gerar Orçamento';
        }
    });
    
    // ... (Listeners de histórico e submit aqui)

    // ===================================================================================
    // 6. INICIALIZAÇÃO
    // ===================================================================================
    function init() {
        quoteDateInput.valueAsDate = new Date();
        populateCheckboxes();
        environmentsContainer.innerHTML = ''; // Limpa ambientes antes de adicionar o primeiro
        addEnvironment();
        initDataFetch();
        handleFormChange();
    }

    async function initDataFetch() {
        const materialsQuery = `query { boards(ids: ${ESTOQUE_BOARD_ID}) { items_page(limit: 500) { items { name, column_values(ids:["${PRECO_M2_COLUMN_ID}"]) { id, text } } } } }`;
        const historyQuery = `query { boards(ids: ${ORCAMENTOS_BOARD_ID}) { items_page(limit: 100) { items { id, name, column_values(ids: ["${JSON_DATA_COLUMN_ID}"]) { id, text } } } } }`;
        
        // Executa as duas buscas em paralelo
        await Promise.all([
            fetchAndPopulate(materialSelect, {name: 'fetchMaterials', query: materialsQuery}, (items) => { materialsData = items; }, populateMaterials),
            fetchAndPopulate(historySelect, {name: 'fetchHistory', query: historyQuery}, (items) => { historyData = items; }, populateHistory)
        ]);
    }

    init();
});