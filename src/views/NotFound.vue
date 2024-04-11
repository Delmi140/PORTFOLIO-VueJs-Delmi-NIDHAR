<template>
    <header id="header-404">
        <a href="#"><img class="image-header" src="../components/Images/Image-header.png" alt="image-header-delmi-nidhar"></a>
        <a class="p-header" href="#Présentation">Accueil</a>
        <a class="p-header" href="#moi">Profil</a>
        <a class="p-header" href="#Compétences">Compétences</a>
        <a class="p-header" href="#Portfolio">Portfolio</a>
        <a class="p-header" href="#contact">Contact</a>
    </header>
    <main>
        <div class="page-404">
            <img class="image-page-404" src="../components/Images/404-error.avif" alt="image-page-404">
            <h1 class="h1-page-404">Page 404</h1>
        </div>
    </main>
    <footer id="footer-404">
        <p class="p-footer" >© Copyright 2024 - Delmi NIDHAR. Tous droits réservés.</p>
        <div class="liens-footer">
            <p><a href="#">Plan du site /</a></p>
            <p><a href="#">Mentions légales /</a></p>
            <p><a href="#">Politique de confidentialité</a></p>
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
export default {
    name: 'NotFound'

}


</script>


<style>

.page-404{
    text-align: center;
   
}

.h1-page-404{
    color: black;
    margin-bottom: 150px;
}
.image-page-404{
    margin-top: 200px;
}

#header-404{
    background-color: gold;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    width: 1728px;
    margin-top: 0px;
}

#footer-404{
    text-align: center;
    background-image: url(../components/Images/Fondecran8.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}

</style>

