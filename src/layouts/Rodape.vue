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
@media (min-width:320px) { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }
@media (min-width:480px) { /* smartphones, Android phones, landscape iPhone */ }
@media (min-width:600px) {
    footer > img {
        width: 250px;
    }

    footer > p {
        margin-top: 30px;
    }
}
@media (min-width:801px) { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
@media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) {
    footer > img {
        width: 350px;
    }

    footer > p {
        margin-top: 40px;
    }
}

footer {
    background: rgb(44,22,61);
    background: linear-gradient(90deg, rgba(44,22,61,1) 0%, rgba(72,35,99,1) 60%, rgba(100,49,138,1) 100%);
}

footer > img {
    display: inline-block;
}

footer > p {
    display: inline-block;
    color: white;
    vertical-align: top;
    font-family: 'Baloo Bhaina 2', cursive;
}
</style>