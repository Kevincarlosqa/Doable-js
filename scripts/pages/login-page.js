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


renderHeader()





function loginPage() {
  return {
    toString(){

    },
    addListeners(){

    }
  }

}