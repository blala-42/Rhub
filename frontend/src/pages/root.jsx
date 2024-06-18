import { Outlet } from "react-router-dom";
import NavigationBar from "../components/navigation-bar"

export default function Root() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </>
  )
}
