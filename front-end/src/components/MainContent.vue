<script>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';

    export default {
        setup() {
            const orders = ref([]);
            const error = ref(null);

         const getData = async () => {
            try {
                const result = await axios.get("http://localhost:3001/orders");
                orders.value = result.data;
                orders.value = orders.value.map((o) => {
                    const dataCompleta = new Date(o.emissionDate);
                    const dia = dataCompleta.getDate();
                    const mes = dataCompleta.getMonth();
                    const ano = dataCompleta.getFullYear()
                    o.emissionDate = `${dia}/${mes}/${ano}`;

                    let valor = new Number(o.value);
                    valor = valor.toLocaleString(undefined, {minimumFractionDigits: 2})
                    o.value = `R$ ${valor}`;

                    switch (o.orderStatusBuyer) {
                        case '0':
                            o.orderStatusBuyer = 'Pendente de confirmação';
                            break;
                        case '1':
                            o.orderStatusBuyer = 'Pendente de confirmação';
                            break;
                        case '2': 
                            o.orderStatusBuyer = 'Não reconhece o pedido'
                            break;
                        case '3': 
                            o.orderStatusBuyer = 'Mercadoria não recebida'
                            break;
                        case '4': 
                            o.orderStatusBuyer = 'Recebida com avaria'
                            break;
                        case '5': 
                            o.orderStatusBuyer = 'Devolvida'
                            break;
                        case '6': 
                            o.orderStatusBuyer = 'Recebida com devolução parcial'
                            break;
                        case '7': 
                            o.orderStatusBuyer = 'Recebida e confirmada'
                            break;
                        case '8': 
                            o.orderStatusBuyer = 'Pagamento Autorizado'
                            break;
                    }
                    return o
                });
            } catch (err) {
                error.value = err.message;
            } 
    };

    onMounted(() => {
      getData();
    });

    return {
      orders,
      error,
    };
  },
};
</script>

<template>
    <main class="content">
        <header class="contentHeader">
            <img src="./icons/content_logo.png" alt="Cabeçalho da página de Notas Fiscais">
        </header>
        <table class="contentTable">
            <tr class="contentTableHeader">
                <th>Nota fiscal</th>
                <th>Sacado</th>
                <th>Cedente</th>
                <th>Emissão</th>
                <th>Valor</th>
                <th>Status</th>
            </tr>
            <tr v-for="order in orders" :key="order.id" class="contentTableRow">
                <td>{{order.nNf}}</td>
                <td>{{order.Buyer.name}}</td>
                <td>{{order.Provider.name}}</td>
                <td>{{order.emissionDate}}</td>
                <td class="specialCells">{{order.value}}</td>
                <td class="specialCells">{{order.orderStatusBuyer}}</td>
                <td class="providerButton">Dados do cedente</td>
            </tr>
        </table>
    </main>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,700;1,9..40,700&display=swap');
    .content {
        position: absolute;
        width: 81.5%;
        height: 93%;
        left: 18.5%;
        top: 7%;
    }
    .contentHeader {
        width: fit-content;
        margin-top: 3%;
        margin-left: 3%;
    }
    .contentTable {
        width: 81.5%;
        font-family: "DM Sans", sans-serif;
        font-size: 14px;
        text-align: center;
        border-collapse: separate;
        border-spacing: 0 10px;
        margin-left: 2.5%;
    }
    .contentTableHeader {
        color:rgba(161, 168, 184, 1);
        font-size: 12px;
        text-align: center;
    }
    .contentTableRow {
        color: rgba(77, 85, 102, 1);
        border-radius: 50px;
    }
    .specialCells {
        color: rgba(0, 173, 140, 1);
    }
    .providerButton {
        border: 1px solid rgba(77, 85, 102, 1);
        border-radius: 25px;
    }
</style>
