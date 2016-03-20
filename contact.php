<?php 
	require 'input/config.php';
	require 'input/form.php';

	$query = $pdo->query('SELECT * FROM users');
	$users = $query->fetchAll();

?>


<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>FROGGER</title>
		<link rel="stylesheet" href="src/css/contact2.css">

		<link rel="stylesheet" href="src/css/reset.css">
		<link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
		<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
		<link rel="icon" href="favicon.ico" type="image/x-icon">
	</head>

	<body>
		<div class="container">
			<div class="nav-bar">
				<div class="logo">
					<a href="#"><img src="images/logo.png"></a>
				</div>

				<div class="items">
					<ul>
						<li><a href="homepage.html">ACCUEIL</a></li>
						<li><a href="regles.html">RÈGLES</a></li>
						<li><a href="contact.html">CONTACT</a></li>
						<li><a href="#">PROFIL</a></li>
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
      <img src="src/images/work.jpeg" alt="qg"/>
    </div>

    <div class="container2">
    	<div class="title">
    		<p>Découvrez notre équipe</p>
    	</div>
    	<div class="line">
    	</div>
    	<div class="team">
    		<div class="rang-1">
    			<img class="gala" src="src/équipes/gala.png">
    			<img class="arthur" src="src/équipes/chassin.png">
    			<img class="pierre" src="src/équipes/pdg.png">
    		</div>
    		<div class="description-1">
    			<p>Gala Pillot<br><span class="green">Développeur back</span></p>
    			<p>Arthur Chassin<br><span class="green">Designer</span></p>
    			<p>Pierre de Gourcy<br><span class="green">Developpeur back</span></p>
    		</div>
    		<div class="rang-2">
    			<img src="src/équipes/peltre.png">
    			<img src="src/équipes/dlr.png">
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
				<a href="#"><img src="src/images/facebook.png"></a>
				<a href="#"><img src="src/images/twitter.png"></a>
				<a href="#"><img src="src/images/snapchat.png"></a>
				<a href="#"><img src="src/images/instagram.png"></a>
			</div>
		</div>

		<div class="formulaire">
			<div class="title2">
				<p>Contactez notre équipe</p>
			</div>
			<div class="line">
			</div>
			<form action="#" method="post">
				<h3> Vous </h3>
				<div class="infos">
					<div class="error">
						<input type="text" name="name" id="name" placeholder="Votre nom">
						<label for="name"></label>
					</div>
					<div class="mail">
						<input type="text" name="mail" id="mail" placeholder="Votre adresse mail">
						<label for="mail"></label>
					</div>
					<h3> Votre musique </h3>
					<div class="titleform">
						<input type="text" name="title" id="title" placeholder="Titre de la musique">
						<label for="title"></label>
					</div>
					<div class="artist">
						<input type="text" name="artist" id="artist" placeholder="Artiste de la musique">
						<label for="artist"></label>
					</div>
					<div class="id">
						<p>Correspond à la valeur après le watch?v=</p>
						<input type="text" name="id" id="id" placeholder="ID Youtube - exemple : MB6vHZBHH5g">
						<label for="id"></label>
					</div>
					<div class="cover">
						<input type="text" name="cover" id="cover" placeholder="URL de la cover">
						<label for="cover"></label>
					</div>
					<div class="comment">
						<input type="text" name="comment" id="comment" placeholder="Votre commentaire">
						<label for="comment"></label>
					</div>
					<div>
						<input type="submit" class="submit">
					</div>

				</div>
				</form>
				<div class="map">
					<img src="src/images/map.png">
				</div>


   		</div>

   		

		
	

		<script src="src/js/libs/jquery-2.2.0.min.js"></script>
		<script src="src/js/app/contact.js"></script>
	</body>
</html>
