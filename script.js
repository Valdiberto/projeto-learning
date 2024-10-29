function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const elem = document.getElementById("spotify1")
  const elem2 = document.getElementById("spotify2")
  const elem3 = document.getElementById("spotify3")
  const elem4 = document.getElementById("spotify4")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // light mode. adicionar a imagem light
    img.setAttribute("src", " ./assets/profile1.jpg")

    elem.setAttribute(
      "src",
      "https://open.spotify.com/embed/track/1Vej0qeQ3ioKwpI6FUbRv1?utm_source=generator"
    )

    elem2.setAttribute(
      "src",
      "https://open.spotify.com/embed/track/4JXfNOePhdgMOI7KZ1L25U?utm_source=generator"
    )

    elem3.setAttribute(
      "src",
      "https://open.spotify.com/embed/track/4RUmLxHGEoeyG3TU78OCLG?utm_source=generator"
    )

    elem4.setAttribute(
      "src",
      "https://open.spotify.com/embed/track/469rBLYJUZHMJLtq2Wch3h?utm_source=generator"
    )
  } else {
    // se tiver sem light mode, mantem a normal
    img.setAttribute("src", "./assets/profile2.png")

    elem.setAttribute(
      "src",
      "https://open.spotify.com/embed/track/69KUKhBqyGvtO1jtJwZEcv?utm_source=generator"
    )

    elem2.setAttribute(
      "src",
      "https://open.spotify.com/embed/track/1I97UEdJWw7uXtlpgGVMIp?utm_source=generator"
    )

    elem3.setAttribute(
      "src",
      "https://open.spotify.com/embed/track/1BRt9HAjbLhiGNqrdU5nDl?utm_source=generator"
    )

    elem4.setAttribute(
      "src",
      "https://open.spotify.com/embed/track/5OhYmVuDlPEhZyFtf1B4O0?utm_source=generator"
    )
  }
}
