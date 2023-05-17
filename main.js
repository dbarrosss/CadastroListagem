export async function cadastro(name, description, value, available) {
    try {
      let lista = JSON.parse(localStorage.getItem("products")) || [];
      await lista.push([name, description, value, available]);
      localStorage.setItem("products", JSON.stringify(lista));
      return true;
    } catch (e) {
      console.log("erro");
      return false;
    }
  }
  
  export function imprimirValores() {
    return localStorage.getItem("products");
  }