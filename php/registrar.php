<?php
// Conexión a la base de datos
$conn = new mysqli("localhost", "root", "", "KingdomBarber2");

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Verificar que las contraseñas coinciden
if ($_POST['Password'] !== $_POST['ConfirmPassword']) {
    die("Las contraseñas no coinciden.");
}

// Obtener datos del formulario
$first = $_POST['FirstName'];
$last = $_POST['LastName'];
$phone = $_POST['Phone'];
$email = $_POST['Email'];
$password = password_hash($_POST['Password'], PASSWORD_DEFAULT);
$birth = $_POST['BirthDate'];
$gender = $_POST['Gender'];

// Insertar datos en la tabla Users como 'Client'
$sql = "INSERT INTO Users (FirstName, LastName, Phone, Email, Password, BirthDate, Gender, UserType)
        VALUES (?, ?, ?, ?, ?, ?, ?, 'Client')";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssss", $first, $last, $phone, $email, $password, $birth, $gender);

if ($stmt->execute()) {
    echo "Registro exitoso.";
} else {
    echo "Error al registrar: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
