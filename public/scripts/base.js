const categoria = document.form.categoria,
  database = firebase.database(),
  form = document.getElementById("form");

enviar.addEventListener("click", (e) => {
  e.preventDefault();
  database
    .ref(categoria.value)
    .child(
      `${document.getElementById("name").value} ${
        document.getElementById("text").value
      }`
    )
    .set({
      correo: document.getElementById("mail").value,
      telefono: document.getElementById("telf").value,
      text: document.getElementById("text").value,
    });
  form.reset();
});
