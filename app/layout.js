import "../app/globals.css";  

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <header>
          <h1></h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
