<script></script>

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
            <tr class="contentTableRow">
                <td>Teste</td>
                <td>Teste</td>
                <td>Teste</td>
                <td>Teste</td>
                <td>Teste</td>
                <td>Teste</td>
                <td>Teste</td>
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
        border: 1px solid black;
        border-radius: 50px;
    }

</style>