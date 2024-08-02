<script></script>

<template>
    <nav class="mainNavbar">
        <a href="https://cashforce.com.br/" target="_blank">
            <img class="logo"  src="./icons/logo_cashforce.png" alt="Logo da Cashforce">
        </a>
        <button class="nfButton">
            <img class="nfButtonImage" src="./icons/nf_button.png" alt="Botão das notas fiscais">
        </button>
    </nav>
</template>

<style scoped>
    .mainNavbar {
        width: 18.5%;
        height: 100%;
        background-color:rgba(244, 246, 249);
    }
    .logo {
        width: 55%;
        margin-top: 9%;
        margin-left: 8.5%;
    }
    .nfButton {
        background-color: rgba(244, 246, 249);
        width: 100%;
        border: 0px;
        margin: 0px;
        padding: 0px;
    }
    .nfButton:hover {
        background-color: rgba(223, 226, 235);
    }
    .nfButtonImage {
        width: 100%;
        height: 100%;
    }

</style>
