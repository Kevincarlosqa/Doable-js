function renderHeader(logout) {
  return `
    <header class="header">
      <nav class="navbar">
        <img class="logo" src="./imgs/doable-logo.png">
        ${logout? `<a class="js-logout-link"><img src="./imgs/logout.png"></a>` : ""}
      </nav>
    </header>
  `
}

export { renderHeader }