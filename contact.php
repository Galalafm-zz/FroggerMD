<?php 
	require 'input/config.php';
	require 'input/form.php';

	$query = $pdo->query('SELECT * FROM users');
	$users = $query->fetchAll();

?>


<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>FROGGER MD</title>
		<link rel="stylesheet" href="css/contact.css">

		<link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
		<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
		<link rel="icon" href="favicon.ico" type="image/x-icon">
	</head>

	<body>
		<div class="container">
			<div class="nav-bar">
				<div class="logo">
					<a href="styles.html"><img src="images/logo.png"></a>
				</div>

				<div class="items">
					<ul>
						<li id="li4"><h4><a href="styles.html">ACCUEIL</a></h4></li>
						<li id="li5"><h4><a href="regles.html">RÈGLES</a></h4></li>
						<li id="li6"><h4><a href="contact.php">CONTACT</a></h4></li>
						<!-- <li><a href="#" onClick="window.open('pop_up.html','mon_popup','toolbar=1,location=1,directories=1,status=1,scrollbars=1,resizable=1,copyhistory=1,width=800,height=400,screenX=200,screenY=200');">PROFIL</a></li> -->
					</ul>
				</div>
			</div>
		</div>
		<div class="Headquarter">
			<h2>FROGGER SQUAT :</h2>
			<span class="adresse">27 Bis Rue du Progrès, 93100 Montreuil</span>
			<span class="telephone">01 41 72 77 71</span>
			<span class="horaires">Lundi au Vendredi : 08h30 - 21h30</span>
		</div>
    <div class="background">
      <img src="images/work.jpeg" alt="qg"/>
    </div>

    <div class="container2">
    	<div class="title">
    		<p>Découvrez notre équipe</p>
    	</div>
    	<div class="line">
    	</div>
    	<div class="team">
    		<div class="rang-1">
    			<img src="images/gala.png">
    			<img src="images/chassin.png">
    			<img src="images/pdg.png">
    		</div>
    		<div class="description-1">
    			<p>Gala Pillot<br><span class="green">Développeur back</span></p>
    			<p>Arthur Chassin<br><span class="green">Designer</span></p>
    			<p>Pierre de Gourcy<br><span class="green">Chef de Projet<br>Developpeur back</span></p>
    		</div>
    		<div class="rang-2">
    			<img src="images/peltre.png">
    			<img src="images/dlr.png">
    		</div>
    		<div class="description-2">
    			<p>Antoine Peltre<br><span class="green">Développeur front</span></p>
    			<p>Arthur de la Rochefordière<br><span class="green">Poète</span></p>
    		</div>
		</div>

		<div class="social-net">
			<div class="title">
				<p>Rejoignez-nous sur les réseaux sociaux</p>
			</div>
			<div class="line">
			</div>
			<div class="rs">
				<a href="#"><img src="images/facebook.png"></a>
				<a href="#"><img src="images/twitter.png"></a>
				<a href="#"><img src="images/snapchat.png"></a>
				<a href="#"><img src="images/instagram.png"></a>
			</div>
		</div>

		<div class="formulaire">
			<div class="title2">
				<p>Contactez notre équipe</p>
			</div>
			<div class="line">
			</div>
			<form action="#" method="post">
				<div class="infos">
					<div class="error">
						<input type="text" name="name" id="name" placeholder="Votre nom">
						<label for="name"></label>
					</div>
					<div class="mail">
						<input type="text" name="mail" id="mail" placeholder="Votre adresse mail">
						<label for="mail"></label>
					</div>
					<div class="title">
						<input type="text" name="title" id="title" placeholder="Titre de la musique">
						<label for="title"></label>
					</div>
					<div class="artist">
						<input type="artist" name="artist" id="artist" placeholder="Artiste de la musique">
						<label for="artist"></label>
					</div>
					<div class="id">
						<input type="id" name="id" id="id" placeholder="ID Youtube">
						<label for="id"></label>
					</div>
					<div class="cover">
						<input type="cover" name="cover" id="cover" placeholder="URL de la cover">
						<label for="cover"></label>
					</div>
					<div class="comment">
						<input type="text" name="comment" id="comment" placeholder="Votre commentaire">
						<label for="comment"></label>
					</div>
					<div>
						<input type="submit" class="valider">
					</div>

				</div>
				</form>
				<div class="map">
					<img src="images/map.png">
				</div>




   		</div>
			

		<script src="src/js/libs/jquery-2.2.0.min.js"></script>
		<script src="assets/jquery.min.js"></script>
		<script src="scripts/menu.js"></script>
	</body>
</html>