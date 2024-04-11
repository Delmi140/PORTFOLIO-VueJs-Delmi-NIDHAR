<template>
    <body id="body-cv">
        <header id="haeder-cv">
            <div id="pres-header">
                <a href= "src/components/Images/Delmi-NIDHAR.jpeg"  target="_blank"><img id="photo-cv" src="../components/Images/Delmi-NIDHAR.jpeg" alt="photo-cv"></a>
                <h1 id="h1-cv">Delmi NIDHAR</h1>
                <h2 id="h2-cv">Développeur web junior</h2>

            </div>
            <div>
                <address id="adresse-cv">
                    <p id="element-1"><a href="https://www.google.fr/maps/place/80+Bd+de+Magenta,+75010+Paris/@48.8760308,2.3540511,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e12b298db95:0x36a3fa6c1a3460e7!8m2!3d48.8760273!4d2.356626!16s%2Fg%2F11c1zw8d5x?entry=ttu" target="_blank">80 Boulevard de Magenta<br>75010 PARIS</a></p>
                    <p id="element-1"><a href="mailto:nidhardelmi@hotmail.com">nidhardelmi@hotmail.com</a></p>
                    <p id="element-1"><a href="tel:0630620099">06 30 62 00 99</a></p>

                </address>
            </div>

        </header>
        <main id="main-cv">
            <div id="Apropos-cv">
                <h3 id="Element-4">A propos de moi</h3>
                <p id="Element-6">Je suis une personne dynamique , organiser, rigoureux qui grace ces experience passé dans le  domaine du retail et aussi à la formation de développeur web au  sein du centre de formation Europeen que j'ai pu suivre.<br/>Je me pertmet aujourd'hui de me presenter à vous <br/> en temps que développeur web junior.</p>
                <h3 id="Element-4">Langues Parlées</h3>
                <ul>
                  <li>Français : Langue marternelle</li>
                  <li>Anglais : Intermédiaire</li>
                </ul>
                <h3 id="Element-4">Centres d'interet</h3>
                <ul>
                    <li>Musique</li>
                    <li>Voyage</li>
                    <li>Concert</li>
                </ul>
            </div>
            <div id="exp-pro-cv">
                <h3 id="Element-5">Expérience professionnelles</h3>
                <h4>Manager de vente et de stock chez GAP(rue de Renne)</h4>
                <p>De Mai 2011 à Mai 2023</p>
                <ul>
                    <li>Management d’une équipe de 8 personnes</li>
                    <li>Gestion des stocks</li>
                    <li>Organisation des réceptions et des expéditions </li>
                    <li>Gestion des fournitures des magasins</li>
                    <li>Suivi des livraisons </li>
                    <li>Inventaire</li>
                </ul>
                <h4>Stockiste GAP (rue du commerce)</h4>
                <p>De Mai 2007 à Mai 2011</p>
                <ul>
                    <li>Gestion des livraisons </li>
                    <li>Réassort du magasin</li>
                    <li>Organisation du stock</li>
                    <li>Implantation des nouvelles collections</li>
                    <li>Transfert d'articles</li>
                </ul>
                <h4>Conseiller de vente chez Gap (rue du commerce)</h4>
                <p>De Octobre 2004 à Mai 2007</p>
                <ul>
                    <li>Conseiller de vente</li>
                    <li>Accueil en cabine d'essayage</li>
                    <li>Spécialiste caisse</li>
                </ul>
                <h3 id="Element-5">Diplomes/Formations</h3>
                <h4>Développeur Web bac +3</h4>
                <p>Année 2024</p>
                <p>Centre de Formation Europeen</p>
                <h4>BTS CPI (conception de produit industriel)</h4>
                <p>Année 2003</p>
                <p>Lycée Armand Raspail Paris 15</p>
                <h3 id="Element-5">Compétences</h3>
                <ul>
                    <li>HTML 5 - Expert</li>
                    <li>CSS 3 - Intermédiaire</li>
                    <li>Github - Débutant</li>
                </ul>


            </div>

        </main>
        <footer id="footer-cv">
            <div id="liens-footer">
                <i id="i-footer" class="fa-brands fa-instagram fa-4x"></i>
                <i id="i-footer" class="fa-brands fa-facebook fa-4x"></i>
                <i id="i-footer" class="fa-brands fa-square-twitter fa-4x"></i>
            </div>
            <small>Dernière mise à jour le <time datetime="2024-01-22">22/01/2024</time></small>

        </footer>
    </body>
    

</template>

<script>
export default {
    name: 'Cvenligne'

}


</script>

<style>

#body-cv{
    width: 1160px;
    border-right-width: 1px;
    border-right-style: solid;
}

#haeder-cv{
   
    text-align: center;
}

#main-cv{
    background-color: blue;
    display: flex;
    flex-direction: row;
   
}
#footer-cv{
    background-color: #782221;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
}
#photo-cv{
    height: 300px;
    width: 300px;
    border: 2px solid black;
    border-radius: 50%;
    box-shadow: 0 0 40px deepskyblue,15px 0 40px orange;
    cursor: zoom-in;
    margin-top: 50px;

}
#pres-header{
    background-color: #782221;
}
#h1-cv{
    color: white;
    font-family: 'Lato', sans-serif;
}
#h2-cv{
    color: white;
    font-family: 'Lato', sans-serif;
    margin-bottom: 0px;
    padding-bottom: 50px;
}
#adresse-cv{
    background-color:#2c1d27;
    width: 1160px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}


#Apropos-cv{
    background-color: #782221;
    width: 400px;
    
}


#exp-pro-cv{
    background-color: white;
    width: 760px;
    padding-left: 30px;
}

#element-1{
    text-align: center;
    
}
#element-1 :hover{
    color: green;
    padding-bottom: 3px;
    border-bottom: 2px solid green;
}


#Element-2{
    background-color: #782221;
}
#Element-3{
    flex-grow: 2;
}
#Element-4{
    margin-right: 20px;
    background-color: #dbc2a4;
    padding-left: 20px;
}
#Element-5{
    margin-right: 20px;
    border-left-width: 10px ;
    border-left-style: solid;
    border-color: #782221;
    background-color: #dbc2a4;
}
#Element-5:hover{
    border-right-style: solid;
    border-color: #782221;
    border-right-width: 10px ;
}
#Element-6{
    text-indent: 100px;
    margin: 20px;
}
#i-footer{
    opacity: 0.5;
    margin-right: 20px;
    margin-left: 20px;
}

#liens-footer{
    margin-bottom: 20px;
}




</style>

