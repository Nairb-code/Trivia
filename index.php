<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans|Press+Start+2P&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans&display=swap" rel="stylesheet">
    <script src="http://code.jquery.com/jquery.js"></script>
    <link rel="stylesheet" href="normalize.css">
    <link rel="stylesheet" href="style.css">
    <title>Trivia</title>
</head>
<body>
    <header>
        <h1>Trivia</h1>
    </header>

    <main>
        <div class = "contenedor">
            <div id = "preguntas">
                <!--    Preguntas del Juego     -->
            </div>

            <div id = "respuestas">
                <!--    Respuestas del Juego     -->
            </div>

            <form action="index.php" method="post">
                <input type="button" class = "btn" value = "Aceptar" onclick = "Comprobar()">
            </form>
        </div>

        <script src="script.js"></script>
    </main>

    <footer>
        <p>Brian Duran</p>
        <p>Todos los Derechos Reservado 2020 ©</p>
    </footer>
</body>
</html>