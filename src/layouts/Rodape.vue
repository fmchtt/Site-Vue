<template>
    <footer>
        <img src="@/assets/logo.png">
        <p>Desenvolvido por: Barcetto / Copyright© - Todos os direitos Reservados</p>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
footer {
    background: rgb(44,22,61);
    background: linear-gradient(90deg, rgba(44,22,61,1) 0%, rgba(72,35,99,1) 60%, rgba(100,49,138,1) 100%);
}

footer > img {
    width: 450px;
    height: 150px;
    display: inline-block;
}

footer > p {
    display: inline-block;
    color: white;
    vertical-align: top;
    margin-top: 60px;
    font-family: 'Baloo Bhaina 2', cursive;
}
</style>