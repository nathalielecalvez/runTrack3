<?php
$host = "localhost";//connexion à localhost
$dbname = "partie";//nom de la table de la bdd
$username = "root";//pseudo de connexion à php myadmin
$password="";
// $hashed_password = password_hash($password, PASSWORD_DEFAULT);

try {
    $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8";//lien de connexion entre localhots et la machine
    $pdo = new PDO($dsn, $username, $password);//creation d'un pdo (adresse, nom, mdp)

    // Configuration des options PDO
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    echo "Connexion réussie <br>";

} catch (PDOException $e) {//affiche l'erreur
    echo "Erreur de connexion : " . $e->getMessage();
}

?>