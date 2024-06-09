// Primera pre entrega
// Alumno: Vallejos Cesar 
// Curso: JavaScript
// Comisión: 57710
// Tema: El juego de ahorcado

// Creamos la clase ahorcado para le juego
class Hanged {
  constructor(word) {
    this._word = word.toUpperCase().split('');
    this._hiddenWord = Array(this._word.length).fill('_');
    this._attempts = 2;
    this._wrongLetters = [];
  }
  get word() {
    return this._word;
  }
  get hiddenWord() {
    return this._hiddenWord;
  }
  get attempts() {
    return this._attempts;
  }
  get wrongLetters() {
    return this._wrongLetters;
  }
  reduceAttempts() {
    this._attempts--;
  }
}
while (true) {
  let prp = prompt('Este es el juego del ahorado\nAdivine la parabra de seis letras!\nQuiere intentarlo? SI o NO')
  if (prp.toLocaleUpperCase() == 'SI') {
    const play = new Hanged('coderhouse');
    while (play.attempts > 0 && play._hiddenWord.includes('_')) {
      guess(play, requestLetter());

      alert(`Palabra oculta: ${play._hiddenWord} 
          Intentos: ${play._attempts}
          Palabras incorrectas: ${play._wrongLetters}
      `)
    }
    if (play.hiddenWord.includes('_')) {
      alert('Se agotaron los intentos 🥲');
    } else {
      alert('¡Felicidades! Adivinaste la palabra 🎉');
    }
  } else if (prp.toLocaleUpperCase() == 'NO') {
    alert('Elijio NO, Fin de juego');
    again = false;
    break;
  } else {
    alert('Opcion incorrecta 🙃');
  }
}
// Función para pedir solo una letra
function requestLetter() {
  let letter;
  const letterOK = /^[a-zA-Z]$/;
  do {
    letter = prompt('Ingresa SOLO una letra del abecedario:');
    letter = letter && letter.trim().toUpperCase();
    if (!letterOK.test(letter) || letter.length !== 1) {
      alert('Por favor, ingresa una sola letra válida del abecedario.');
    }
  } while (!letterOK.test(letter) || letter.length !== 1);
  return letter;
}

// Función Adivinar
function guess(objHanged, letter) {
  if (objHanged.word.includes(letter)) {
    objHanged.word.forEach((char, index) => {
      if (char === letter) {
        objHanged.hiddenWord[index] = letter;
      }
    });
  } else {
    objHanged.reduceAttempts();
    objHanged.wrongLetters.push(letter);
  }
}
