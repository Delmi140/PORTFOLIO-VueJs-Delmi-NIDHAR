<template>
    <div class="bloc-modale-dec" v-if="reveledec">
        <div class="overlay-dec" v-on:click="toogleModaledec"></div>
        <div class="modal-dec">
            <button class="close-modal-dec modal-trigger-dec" v-on:click="toogleModaledec">X</button>
            <h2 class="h2-modal-dec">Dynamiser Un Espace De Commentaires</h2>
            <p class="p-image-commentaires-modal"><img  class="image-dynamiser-commentaires-modal" src="./Images/Dynamiser-Un-Espace-De-Commentaires.png" alt="image-commentaires-modal"></p>
            <p class="p-date-modal-dec">Date de creation :21/02/2024</p>
            <p class="p-tech-modal-dec">Technologies utilisées : HTML et JS</p>
            <p class="p-liensite-modal-dec"><a href="./documents/documents-formation/Dynamiser-Un-Espace-De-Commentaires/index.html" target="_blank">Lien</a> vers le site</p>
            <p class="p-liengit-modal-dec"><a href="https://github.com/Delmi140/Depot-DynamiserUnEspaceDeCommentaires" target="_blank">Lien</a> vers le repository GitHub</p>

        </div>


    </div>

</template>

<script>
export default {
    name:'ModaleDec',
    props:['reveledec', 'toogleModaledec']
}




</script>

<style>

.image-dynamiser-commentaires-modal{
    height: 300px;
    width: 200px;
    border: 1px solid;
    
}
.overlay-dec{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #333333d3;

}

.bloc-modale-dec{
    position: fixed;
    top: 0;
    width: 1728px;
    height: 125vh;
}

.modal-dec{
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
.close-modal-dec{
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

.h2-modal-dec{
    text-align: center;
    font-family: Montserrat,sans-serif;
    font-weight: 500;
    color: black;
}
.p-date-modal-dec{
    text-align: center;
}
.p-tech-modal-dec{
    text-align: center;
}
.p-liensite-modal-dec{
    text-align: center;
}
.p-liengit-modal-dec{
    text-align: center;
}
.p-image-commentaires-modal{
    text-align: center;
}


</style>