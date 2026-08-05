
    document.getElementById('registroEvento').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita el envío automático del formulario

      // Variables
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const telefono = document.getElementById('telefono').value;
      const intereses = document.querySelectorAll('input[name="intereses"]:checked');
      const horario = document.querySelector('input[name="horario"]:checked');
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;
      //3 validaciones adicionales para algunos de los campos, pueds elegir los que desees.
      const archivo = document.getElementById('archivo').files[0];
      const interesesArray = Array.from(intereses).map(checkbox => checkbox.value);
      const interesesString = interesesArray.join(', ');
      // 1 Validación de fecha y hora
      if (!fecha || !hora) {
        alert('Por favor, selecciona una fecha y hora válidas.');
        return;
      }
      // 2 Validación de archivo tamaño archivo estandar para la generacion y subir un archivo
      if (archivo && archivo.size > 2 * 1024 * 1024) { // 2MB
        alert('El archivo es demasiado grande. Por favor, selecciona un archivo menor a 2MB.');
        return;
      }
        // 3 Validación de correo electrónico
        // /^[^\s@]+@[^\s@]+\.[^\s@]+$/ es para la validacion de email :)
        // Usado practica 
        const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.test(correo)) {
          alert('Por favor, ingresa un correo electrónico válido.');
          return;
        }
      // Validaciones básicas
      if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
      }

      // Si todo está bien
      alert('Registro exitoso. ¡Gracias por registrarte!');
    });

