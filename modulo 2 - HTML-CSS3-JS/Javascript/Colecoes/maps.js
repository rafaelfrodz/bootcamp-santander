const map1 = new Map()

map1.set("Luiz", "Admin")
map1.set("Rafael", "Admin")
map1.set("Gustavo", "Moderador")
map1.set("Joao", "Moderador")
map1.set("Luciano", "Admin")

function getAdmins (map) {
  let admins = []
  for (const [key, value] of map) {
    if (value === "Admin"){
      admins.push(key)
    }
  }
  return admins
}

console.log(getAdmins(map1))
