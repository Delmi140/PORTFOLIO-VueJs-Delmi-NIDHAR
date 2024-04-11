<template>


    <modalecv v-bind:revelecv="revelecv" v-bind:toogleModalecv="toogleModalecv"></modalecv>
    <modaleCc v-bind:revelecc="revelecc" v-bind:toogleModalecc="toogleModalecc"></modaleCc>
    <modaleDec v-bind:reveledec="reveledec" v-bind:toogleModaledec="toogleModaledec"></modaleDec>

    <header id="header-portfolio">
        <a href="#"><img class="image-header" src="../components/Images/Image-header.png" alt="image-header-delmi-nidhar"></a>
        <a class="p-header" href="#Présentation">Accueil</a>
        <a class="p-header" href="#moi">Profil</a>
        <a class="p-header" href="#Compétences">Compétences</a>
        <a class="p-header" href="#Portfolio">Portfolio</a>
        <a class="p-header" href="#contact">Contact</a>
    </header>
    <main>
        <div class="présentation" id="Présentation">
            <h1>Delmi NIDHAR</h1>
            <h2>Développeur Web Junior</h2>
        </div>
        <div class="moi" id="moi">
            <h2 class="h2-moi">A PROPOS DE MOI</h2>
            <div class="contenent-moi">
              <img class="image-moi" src="../components/Images/DelmiNIDHAR.png" alt="image-delmi-nidhar">
              <p class="p-moi">Hello ! Je m’appelle Delmi NIDHAR, développeur web junior.<br>
              Passionné par le secteur de tech et des jeux vidéos depuis plusieurs années, j’effectue une reconversion professionnelle vers le métier de développeur web. En décembre 2023, j’ai débuté une formation spécifique au front-end proposé par le Centre Européen de Formation.<br>
              Auparavant, j’ai travaillé pendant 20 ans dans le secteur de la vente, mon poste de manager m’a permis d’acquérir des compétences liées à l’organisation, l’écoute, le conseil et le travail en équipe.<br>
              Je continue à travailler chaque jour avec envie, motivation et des idées plein la tête pour mener à bien mon projet de développeur web. <br>
             </p> 
            </div>
        </div>
        <div class="Actuellement1">
            <h2 class="h2-Actuellement1">Actuellement :</h2>
            <h3 class="h3-Actuellement1" >Développeur Web Junior</h3>
        </div>
        <div class="competences" id="Compétences">
            <h2 class="h2-competences">COMPETENCES</h2>
            <p class="p-competences">Elles sont en constantes améliorations car pour moi la joie de ce<br> métier fait que l’on en apprend tous les jours, d’autant plus en étant<br> impliqué, curieux et passionné.</p>
            <div class="competences-contenent">
                <div class="competences-developpeur">
                    <h3 class="h3-front-end">FRONT-END</h3>
                    <h4 class="h4-competences">HTML</h4>
                    <p class="h5-html"></p>
                    <h4 class="h4-competences">CSS</h4>
                    <p class="h5-css"></p>
                    <h4 class="h4-competences">JAVASCRIPT</h4>
                    <p class="h5-javascript"></p>
                    <h3 class="h3-divers">DIVERS</h3>
                    <h4 class="h4-competences">WINDOWS</h4>
                    <p class="h5-windows"></p>
                    <h4 class="h4-competences">MAC/OS</h4>
                    <p class="h5-mac-os"></p>
                </div>
                <div class="image-cv-contenent">
                    <img class="image-cv" src="../components/Images/CvDelmiNIDHAR.jpg" alt="image-cv">
                    <button class="btn-telecharger-cv" onclick="window.location.href = 'src/components/Images/CV-Delmi-NIDHAR.jpg';"  target="_blank">Open</button>
                </div>
            </div>
        </div>
        <div class="Actuellement2">
            <h2 class="h2-Actuellement2" >Passion :</h2>
            <h3 class="h3-Actuellement2" >Musique : Ingénieur de son </h3>
            <h3 class="h3-Actuellement2">Logiciels utilisés : Logic Pro - Cubase - Pro Tools - Luna </h3>
        </div>
        <div class="portfolio" id="Portfolio">
            <h2 class="h2-Portfolio">PORTFOLIO</h2>
            <p class="p-portfolio">Ci-dessous, quelques exemples de réalisations effectuées durant la formation:</p>
            <div class="contenent-portfolio">
                <div class="contenent-cv-en-ligne">
                    <h3 class="h3-cv-en-ligne">CV en ligne de Delmi NIDHAR</h3>
                    <a v-on:click="toogleModalecv" href="#Portfolio"><img class="image-cv-en-ligne" src="../components/Images/CV-en-ligne-image-2.png" alt="image-cv-ligne"></a>
                    <button v-on:click="toogleModalecv" class="modal-btn-cv">Open</button>
                </div>
                <div class="contenent-cahier-des-charges">
                    <h3 class="h3-cahier-des-charges">Cahier des charges de la socketterie</h3>
                    <a v-on:click="toogleModalecc" href="#Portfolio"><img class="image-cahier-des-charges" src="../components/Images/cahier-des-charges-image-2.jpg" alt="image-cahier-charges"></a>
                    <button v-on:click="toogleModalecc" class="modal-btn-cc">Open</button>
                </div>
                <div class="contenent-dynamiser">
                    <h3 class="h3-dynamiser-un-espace">Dynamiser un espace de commentaires</h3>
                    <a v-on:click="toogleModaledec" href="#Portfolio"><img class="image-dynamiser" src="../components/Images/Dynamiser-un-espace-2.jpg" alt="image-dynamiser-commentaires"></a>
                    <button v-on:click="toogleModaledec" class="modal-btn-dec">Open</button>
                </div>
            </div>
        </div>
        <div class="contact" id="contact">
            <h2 class="h2-contact">CONTACTEZ-MOI</h2>
            <p class="p-contact">N'hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.</p>
            <div class="contenent-contact">
                <div>
                <h3 class="h3-coordonnées">Vos Coordonnées</h3>
                <form action="#" class="formulaire-coordonnees">
                    <h4 class="h4-Prénom">Prénom</h4>
                    <input type="text">
                    <h4 class="h4-Prénom">Nom</h4>
                    <input type="text">
                    <h4 class="h4-Prénom">E-mail</h4>
                    <input type="text">
                    <h4 class="h4-Prénom">Téléphone</h4>
                    <input type="text">
                    <h4 class="h4-Prénom">Objet</h4>
                    <input type="text">
                    <h4 class="h4-Prénom">Message</h4>
                    <input  class="texte-message" type="text">
                    <button class="btn-envoyer" onclick="window.location.href = 'mailto:nidhardelmi@hotmail.com';">Envoyer</button>
                </form>
                </div>
                <div>
                    <h3 class="h3-coordonnées">Mes Coordonnées</h3>
                    <address class="contenent-mes-coordonnées">
                        <p class="p-adresse">E-mail</p>
                        <p class="p-adresse"><a href="mailto:nidhardelmi@hotmail.com">nidhardelmi@hotmail.com</a></p>
                        <p class="p-adresse">Téléphone :</p>
                        <p class="p-adresse"><a href="tel:0630620099">06 30 62 00 99</a></p>
                        <p class="p-adresse">Adresse :</p>
                        <p class="p-adresse"><a href="https://www.google.fr/maps/place/80+Bd+de+Magenta,+75010+Paris/@48.8760308,2.3540511,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e12b298db95:0x36a3fa6c1a3460e7!8m2!3d48.8760273!4d2.356626!16s%2Fg%2F11c1zw8d5x?entry=ttu" target="_blank">80 Boulevard de Magenta<br>75010 PARIS</a></p>
                        <div class="liens-coordonnées">
                            <a href="https://www.facebook.com/?locale=fr_FR" target="_blank"><i class="fa-brands fa-facebook fa-4x"></i></a>
                            <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram fa-4x"></i></a>
                        </div>
                    </address>
                </div>
            </div>
        </div>
    </main>
    <footer id="footer-portfolio">
        <p class="p-footer" >© Copyright 2024 - Delmi NIDHAR. Tous droits réservés.</p>
        <div class="liens-footer">
            <p><router-link to='/:pathMatch(.*)*' target="_blank">Plan du site /</router-link></p>
            <p><router-link to='/:pathMatch(.*)*' target="_blank">Mentions légales /</router-link></p>
            <p><router-link to='/:pathMatch(.*)*' target="_blank">Politique de confidentialité</router-link></p>
        </div>
        <div>
            <a href="https://github.com/" target="_blank"><i class="fa-brands fa-github fa-4x"></i></a>
        </div>
        <div>
            <small class="p-mise-a-jour-footer" >Dernière mise à jour le <time datetime="2024-02-22">19/03/2024</time></small>
        </div>
    </footer>
    



</template>



<script>

import ModaleCv from '@/components/ModaleCv.vue';

import ModaleCc from '@/components/ModaleCc.vue';

import ModaleDec from '@/components/ModaleDec.vue'

export default {
    name:'portfolio',
    data(){
        return{
            revelecv: false,
            revelecc: false,
            reveledec:false
        }
    },
    components: {
        'modalecv': ModaleCv,
        'modaleCc': ModaleCc,
        'modaleDec':ModaleDec

    },
    methods:{
        toogleModalecv: function(){
            this.revelecv = !this.revelecv

        },
        toogleModalecc: function(){
            this.revelecc = !this.revelecc

        },
        toogleModaledec: function(){
            this.reveledec = !this.reveledec
        }
    },

    
}



</script>

<style>

#header-portfolio{
    background-color: gold;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    width: 1728px;
    margin-top: 0px;

}
.image-header{
    height: 70px;
    width: 70px;
    border: 2px solid;
    border-radius: 50%;

}
.p-header{
    font-family: "Monoton", sans-serif;
    font-weight: 400;
    font-style: normal;
}





.présentation{
    height: 350px;
    text-align: center;
    background-image: url(../components/Images/photo-presentation3.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size:cover;
    padding-top: 100px;
}
h1{
    color: white;
    font-family: "Rubik Moonrocks", sans-serif;
    font-weight: 400;
    font-style: normal;
    padding-top: 100px;
}
h2{
    color: white;
    font-family: "Rubik Moonrocks", sans-serif;
    font-weight: 400;
    font-style: normal;
}



.moi{
    background-image: url(../components/Images/fontercran9.jpg);
    background-size: cover;
}
.h2-moi{
    color: black;
    text-align: center;
    margin-top: 0px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-family: "Monoton", sans-serif;
    font-weight: 400;
    font-style: normal;
}
.contenent-moi{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.image-moi{
    height: 650px;
    width: 500px;
    margin-bottom: 20px;
    border: 3px black solid;
}
.p-moi{
    height: 300px;
    width: 400px;
    text-align: center;
    background-color: #fff;
    margin-top: 59px;
    padding-top: 45px;
    font-family: "Aladin", system-ui;
    font-weight: 400;
    font-style: normal;
    border: 3px black solid;
    padding-bottom: 45px;
   
}




.Actuellement1{
    text-align: center;
    background-image: url(../components/Images/photo-presentation3.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 350px;
    padding-top: 100px;
}
.h2-Actuellement1{
    margin-top: 0px;
    padding-top: 20px;
    color: #fff;
}
.h3-Actuellement1{
    color: #fff;
}





.competences{
    background-image: url(../components/Images/fontercran9.jpg);
    background-size: cover;
}
.h2-competences{
    color: black;
    text-align: center;
    margin-top: 0px;
    padding-top: 20px;
    
    font-family: "Monoton", sans-serif;
    font-weight: 400;
    font-style: normal;
}
.p-competences{
    text-align: center;
    
    font-family: "Aladin", system-ui;
    font-weight: 400;
    font-style: normal;
    text-shadow:0 0 3px white;
    font-weight:bold;
}
.competences-developpeur{
    
    width: 500px;
    
    border: 3px solid;
    display: flex;
    flex-direction: column;
    background-color: #fff;
}
.image-cv-contenent{
    height: 700px;
    width: 500px;
    border: 3px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
}
.image-cv{
    height: 500px;
    width: 400px;
    border: 1px solid;
}
.competences-contenent{
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    padding-top: 50px;
    padding-bottom: 50px;
}
.h5-html{
    height: 10px;
    width: 300px;
    border: 1px solid;
    
    background-color: aqua;
    border-right-width: 50px;
    border-color: brown;
    margin-left: 50px;
    margin-top: 0px;
}
.h5-css{
    height: 10px;
    width: 280px;
    border: 1px solid;
   
    background-color: aqua;
    border-right-width: 70px;
    border-color: brown;
    margin-left: 50px;
    margin-top: 0px;
}
.h5-javascript{
    height: 10px;
    width: 260px;
    border: 1px solid;
    
    background-color: aqua;
    border-right-width: 90px;
    border-color: brown;
    margin-left: 50px;
    margin-top: 0px;
}
.h5-windows{
    height: 10px;
    width:320px;
    border: 1px solid;
    
    background-color: aqua;
    border-right-width: 30px;
    border-color: brown;
    margin-left: 50px;
    margin-top: 0px;
}
.h5-mac-os{
    height: 10px;
    width: 320px;
    border: 1px solid;
    
    background-color: aqua;
    border-right-width: 30px;
    border-color: brown;
    margin-left: 50px;
    margin-bottom: 50px;
    margin-top: 0px;
}
.h3-front-end{
    text-align: center;
   
}
.h3-divers{
    text-align: center;
    padding-top: 50px;
}
.h4-competences{
    padding-left: 50px;
    padding-top: 20px;
    padding-bottom: 10px;
}
.btn-telecharger-cv{
    padding: 10px 14px;
    font-size: 18px;
    display: block;
    min-width: 150px;
    cursor: pointer;
}




.Actuellement2{
    text-align: center;
    background-image: url(../components/Images/photo-presentation3.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 350px;
    padding-top: 100px;
}
.h2-Actuellement2{
    margin-top: 0px;
    padding-top: 20px;
    color: #fff;
}
.h3-Actuellement2{
    color: #fff;
}





.portfolio{
    background-image: url(../components/Images/fontercran9.jpg);
    background-size: cover;
}
.h2-Portfolio{
    color: black;
    text-align: center;
    font-family: "Monoton", sans-serif;
    font-weight: 400;
    font-style: normal;
    padding-top: 20px
}
.p-portfolio{
    text-align: center;
    font-family: "Aladin", system-ui;
    font-weight: 400;
    font-style: normal;
    text-shadow:0 0 3px white;
    font-weight:bold;
}
.contenent-portfolio{
    display: flex;
    justify-content:space-around;
    padding-top: 50px;
    padding-bottom: 50px;
    
}
.contenent-cv-en-ligne{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: 3px solid;
    background-color: #fff;
    height: 700px;
    width: 500px;
    
}
.contenent-cahier-des-charges{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: 3px solid;
    background-color: #fff;
    height: 700px;
    width: 500px;
    
}
.contenent-dynamiser{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: 3px solid;
    background-color: #fff;
    height: 700px;
    width: 500px;
    
}
.image-cv-en-ligne{
    height: 400px;
    width: 400px;
    border: 1px solid;
}
.image-cv-en-ligne:hover{
    box-shadow: 6px 6px 3px blue;
}
.image-cahier-des-charges{
    height: 400px;
    width: 400px;
    border: 1px solid;
}
.image-cahier-des-charges:hover{
    box-shadow: 6px 6px 3px blue;
}
.image-dynamiser{
    height: 400px;
    width: 400px;
    border: 1px solid;
}
.image-dynamiser:hover{
    box-shadow: 6px 6px 3px blue;
}
.h3-cv-en-ligne{
    color: blue;
}
.h3-cahier-des-charges{
    color: blue;
}
.h3-dynamiser-un-espace{
    color: blue;
}
.modal-btn-cv{
    padding: 10px 14px;
    font-size: 18px;
    display: block;
    min-width: 150px;
    cursor: pointer

}
.modal-btn-cc{
    padding: 10px 14px;
    font-size: 18px;
    display: block;
    min-width: 150px;
    cursor: pointer
}
.modal-btn-dec{
    padding: 10px 14px;
    font-size: 18px;
    display: block;
    min-width: 150px;
    cursor: pointer
}




.h2-contact{
    text-align: center;
    color: white;
    margin-top: 0px;
    padding-top: 20px;
    font-family: "Monoton", sans-serif;
    font-weight: 400;
    font-style: normal;
}
.p-contact{
    text-align: center;
    color: white;
    font-family: "Aladin", system-ui;
    font-weight: 400;
    font-style: normal;
    padding-top: 10px;
    padding-bottom: 20px;
}
.contenent-contact{
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 50px;

}
.formulaire-coordonnees{
    height: 700px;
    width: 500px;
    border: 3px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    
}
.h4-Prénom{
    text-align: center;
    color: white;
}
.contenent-mes-coordonnées{
    height: 700px;
    width: 500px;
    border: 3px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
}
.contact{
    background-image: url(../components/Images/photo-presentation3.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover
}
.p-adresse{
    color: white;
    font-family: "Aladin", system-ui;
    font-weight: 400;
    font-style: normal;
}
.h3-coordonnées{
    color: white;
    padding-bottom: 20px;
}
.btn-envoyer{
    padding: 10px 14px;
    font-size: 18px;
    display: block;
    min-width: 150px;
    cursor: pointer;
}
.texte-message{
    padding: 40px 14px;
    font-size: 18px;
    
}
.liens-coordonnées{
    width: 150px;
    display: flex;
    justify-content: space-around;  
}
.liens-coordonnées{
    display: flex;
    justify-content: space-around;
}





#footer-portfolio{
    text-align: center;
    background-image: url(../src/components/Images/Fondecran8.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    
   
}

.liens-footer{
    text-align: center;
    display: flex;
    justify-content: center;
    text-shadow:0 0 3px white;
    font-weight:bold;
}
.p-footer{
    margin-top: 0px;
    padding-top: 50px;
    text-shadow:0 0 3px white;
    font-weight:bold;
}
.p-mise-a-jour-footer{
    text-shadow:0 0 3px white;
    font-weight:bold;
}




body{
    width: 1728px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0px;
   
}



</style>