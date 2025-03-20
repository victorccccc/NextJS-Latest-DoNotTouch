import "../styles/global.css";
import "../styles/layout.css";


export default function App({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
