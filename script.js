const form = document.getElementById("form-habits")
const nlwSetp = new NLWSetup(form)
const button = document.querySelector(" header button")
/* adicionando um evento ao botão*/
button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5) // converte para a data do pais slice() recorta para formato dia e mes
  const dayExists = nlwSetp.dayExists(today)

  if (dayExists) {
    alert("Data já inclusa")
    return
  }
  alert("Dia adicionado com sucesso ✅")
  nlwSetp.addDay(today)
}

// função onde ira salvar as datas já inseridas
function save() {
  localStorage.setItem("dataSave", JSON.stringify(nlwSetp.data)) // converte obj em string
}

const data = JSON.parse(localStorage.getItem("dataSave")) || {}
nlwSetp.setData(data)
nlwSetp.load()
