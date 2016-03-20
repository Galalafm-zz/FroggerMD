<?php 

$errors = array();
$success = array();

// DATA SEND
if(!empty($_POST)) 
{

	// SET VARIABLES
	$name 	= strip_tags(trim($_POST['name']));
	$mail 	= strip_tags(trim($_POST['mail']));
    $title    = strip_tags(trim($_POST['title']));
    $artist    = strip_tags(trim($_POST['artist']));
    $id    = strip_tags(trim($_POST['id']));
    $cover    = strip_tags(trim($_POST['cover']));
	$comment 	= strip_tags(trim($_POST['comment']));


	// NAME ERRORS
	if(empty($name))
		$errors['name'] = 'Missing name'; 


	// MAIL ERRORS
	if(empty($mail))
		$errors['mail'] = 'Missing mail'; 

    // TITLE ERRORS
    if(empty($title))
        $errors['title'] = 'Missing title'; 

    // ARTIST ERRORS
    if(empty($artist))
        $errors['artist'] = 'Missing artist';

    // ID ERRORS
    if(empty($id))
        $errors['id'] = 'Missing id';

    // COVER ERRORS
    if(empty($cover))
        $errors['cover'] = 'Missing cover'; 

	// COMMENT ERRORS
	if(empty($comment))
		$errors['comment'] = 'Missing comment'; 


	//Success
	if(empty($errors))
    {
        $prepare = $pdo->prepare('INSERT INTO users (name,mail,title,artist,id,cover,comment) VALUES (:name,:mail,:title,:artist,:id,:cover,:comment)');
        $prepare->bindValue('name',$name);
        $prepare->bindValue('mail',$mail);
        $prepare->bindValue('title',$title);
        $prepare->bindValue('artist',$artist);
        $prepare->bindValue('id',$id);
        $prepare->bindValue('cover',$cover);
        $prepare->bindValue('comment',$comment);

        $execute = $prepare->execute();

        if(!$execute)
        {
        	$errors[] = "Une erreur s\'est produite lors de la sauvegarde";
        }
        else
        {
        	$success[] = 'Utilisateur enregistré';

        	$name  ='';
        	$mail ='';
        	$title ='';
            $artist ='';
            $id ='';
            $cover ='';
        	$comment ='';
        }
    }

}
