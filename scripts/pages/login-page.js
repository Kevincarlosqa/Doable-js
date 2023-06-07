function render() {

}

function renderHeader(logout) {
  return `
    <header>
      <nav>
      <h1>{ do<span>able</span> }</h1>
          ${logout? `<a>Logout</a>` : ""}
      </nav>
    </header>
  `
}







function loginPage() {
  return {
    toString(){
      return renderHeader()
    },
    addListeners(){

    }
  }

}

export default loginPage