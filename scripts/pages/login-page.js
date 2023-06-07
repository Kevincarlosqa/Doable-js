function render() {

}

function renderHeader(logout) {
  return `
    <header class="header">
      <nav class="navbar">
        <img class="logo" src="./imgs/doable-logo.png">
        ${logout? `<a><img src="./imgs/logout.png"></a>` : ""}
      </nav>
    </header>
  `
}







function loginPage() {
  return {
    toString(){
      let logout = "log"
      return renderHeader()
    },
    addListeners(){

    }
  }

}

export default loginPage