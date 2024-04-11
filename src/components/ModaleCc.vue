<template>
    <div class="bloc-modale-cc" v-if="revelecc">
        <div class="overlay-cc" v-on:click="toogleModalecc"></div>
        <div class="modal-cv">
            <button class="close-modal-cc" v-on:click="toogleModalecc">X</button>
            <h2 class="h2-modal-cc">Cahier des charges de la socketterie</h2>
            <p class="p-image-cahier-des-charges-modal" ><img  class="image-cahier-des-charges-modal" src="./Images/CAHIER-DES-CHARGES-LA-SOCKETTERIE.jpg" alt="image-cahier-charges-modal"></p>
            <p class="p-date-modal-cc">Date de creation :21/02/2024</p>
            <p class="p-tech-modal-cc">Technologies utilisées : WORD et PDF</p>
            <p class="p-liensite-modal-cc"><a href="src/components/Images/CAHIER-DES-CHARGES-Delmi-Nidhar.pdf" target="_blank">Lien</a> vers le ficher PDF</p>

        </div>


    </div>

</template>

<script>
export default {
    name:'ModaleCc',
    props:['revelecc', 'toogleModalecc']
}




</script>

<style>

.image-cahier-des-charges-modal{
    height: 300px;
    width: 200px;
    
}
.close-modal-cc{
    padding: 8px 10px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    background: #ff365e;
    color: #fff;
}

.h2-modal-cc{
    text-align: center;
    font-family: Montserrat,sans-serif;
    font-weight: 500;
    color: black;

}

.p-date-modal-cc{
    text-align: center;
}
.p-tech-modal-cc{
    text-align: center;
}
.p-liensite-modal-cc{
    text-align: center;
}
.p-image-cahier-des-charges-modal{
    text-align: center;
}
.bloc-modale-cc{
    position: fixed;
    top: 0;
    width: 1728px;
    height: 125vh;
}
.overlay-cc{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #333333d3;

}

.modal-cc{
    width: 95%;
    max-width: 500px;
    min-width: 300px;
    padding: 30px;
    background: #fff;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);

}

</style>