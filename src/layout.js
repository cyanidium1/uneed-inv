// app/layout.js
import Header from './components/Header';

export default function RootLayout({ children }) {
  
  return (
        <div className="page-wrapper">
          <Header />
          {children}
        </div>
  );
}
