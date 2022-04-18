import Menu from "./../menu/Menu"
function Layout({ children }) {
  return (
    <div>
      <Menu />
      {children}
    </div>
  )
}

export default Layout
