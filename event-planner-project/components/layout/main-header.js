import Link from "next/link";
import { Fragment } from "react";
import classes from "../layout/main-header.module.css";

function MainHeader() {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link href="/">Next Events</Link>
        </div>
        <nav className={classes.navigation}>
          <ul>
            <li>
              <Link href="/events">Browse All Events</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}

export default MainHeader;
