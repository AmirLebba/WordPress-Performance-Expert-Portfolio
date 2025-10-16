export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} SpeedExpert – WordPress Performance
          Optimization. All rights reserved.
        </p>
        <p className="tagline">Guaranteed results. Proven expertise. Lightning-fast WordPress sites.</p>
      </div>
    </footer>
  );
}