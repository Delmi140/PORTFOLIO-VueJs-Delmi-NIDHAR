<template>
    <div class="bloc-modale-cv" v-if="revelecv">
        <div class="overlay-cv" v-on:click="toogleModalecv"></div>
        <div class="modal-cv">
            <button class="close-modal-cv" v-on:click="toogleModalecv">X</button>
            <h2 class="h2-modal-cv">{{titre}}</h2>
            <p class="p-image-cv-en-ligne"><img class="image-cv-en-ligne-modal" :src="imagecv" alt="image"></p>
            <p class="p-date-modal-cv">{{date}}</p>
            <p class="p-tech-modal-cv">{{technologies}}</p>
            <p class="p-liensite-modal-cv"><router-link to='/Cvenligne' target="_blank">{{ liensitecv }} </router-link> {{ textsitecv }}</p>
            <p class="p-liensite-modal-cv"><router-link to='/NotFound' target="_blank">{{ liensitedec }} </router-link> {{ textsitedec }}</p>
            <p class="p-liengit-modal-cv"><a :href="liengitnet" target="_blank">{{ LienGit }}</a> {{textlien}}</p>
            
            
        </div>


    </div>

</template>

<script>

export default {
    name:'ModaleCv',
    props:['revelecv', 'toogleModalecv', 'titre', 'date', 'technologies','liensitecv','textsitecv','liensitedec','textsitedec','imagecv','liengitnet','LienGit','textlien', ]
    
    
}

</script>



<style>

.image-cv-en-ligne-modal{
    height: 250px;
    width: 200px;
    
}

.bloc-modale-cv{
   
    position: fixed;
    top: 0;
    width: 1728px;
    height: 125vh;

}

.overlay-cv{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #333333d3;

}

.modal-cv{
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

.p-date-modal-cv{
    text-align: center;
}

.p-tech-modal-cv{
    text-align: center;
}

.p-liensite-modal-cv{
    text-align: center;
}
.p-liengit-modal-cv{
    text-align: center;
}
.p-image-cv-en-ligne{
    text-align: center;
}
.close-modal-cv{
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
.h2-modal-cv{
    text-align: center;
    font-family: Montserrat,sans-serif;
    font-weight: 500;
    color: black;

}




</style>