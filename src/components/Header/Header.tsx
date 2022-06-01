import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex w-full">
      <div className="bg-emerald-600 py-5 w-full">
        <div className="container mx-auto flex space-x-5">
          <div id="Logo">
            <Link to="/" className="text-white font-extrabold">
              Challenge
            </Link>
          </div>
          <nav>
            <ul className="flex flex-row space-x-3">
              <li>
                <Link
                  to="/"
                  className="text-white hover:bg-white hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/images"
                  className="text-white hover:bg-white hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Images
                </Link>
              </li>
              <li>
                <Link
                  to="/sheets"
                  className="text-white hover:bg-white hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sheets
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
