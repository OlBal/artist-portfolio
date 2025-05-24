export default function Footer() {
  return (
    <footer className="border-t py-12 bg-white">
      {/* <div className="container"> */}
      {/* <div className="flex-row mb-2">
        <NewsLetter />
      </div>
       */}

      {/* </div> */}
      <div className="mt-8 pt-8 border-t text-center text-gray-600">
        <p>© {new Date().getFullYear()} Oliver Ballon. All rights reserved.</p>
      </div>
    </footer>
  );
}
