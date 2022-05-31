export function Footer() {
  return (
    <footer>
      <div className="bg-emerald-600 py-5 w-full flex align-middle">
        <div className="mx-auto space-x-5 text-white">
          &copy; {new Date().getFullYear()} Challenge
        </div>
      </div>
    </footer>
  );
}
