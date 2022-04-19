import Menu from "../menu/Menu"
function Layout({ children, role }) {
  return (
    <div>
      <Menu role={role} />
      {children}
    </div>
  )
}

export default Layout
