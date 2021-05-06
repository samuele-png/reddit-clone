import { Link } from "react-router-dom";
import "../../assets/App.css";
export default function SideBar() {
  return (
    <div className="Sidebar">
      Most popular stuff! <br/>
      <Link to="/r/askreddit">askreddit</Link> <br />
      <Link to="/r/games">games</Link> <br />
      <Link to="/r/react">react</Link> <br />
      <Link to="/r/programming">programming</Link> <br />
      <Link to="/r/foo">foo</Link> <br />
      <Link to="/r/roo">roo</Link> <br />
      <Link to="/r/gee">gee</Link> <br />
      <Link to="/r/gaa">gaa</Link> <br />
      <Link to="/r/raa">raa</Link> <br />
      <Link to="/r/daa">daa</Link> <br />

    </div>
  );
}
