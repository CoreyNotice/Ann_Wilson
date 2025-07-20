import JustSold from '../components/JustSold';
import JustListed from '../components/JustListed';
import HomeBackground from '../components/HomeBackground';
import NavbarComponent from '../components/NavbarComponent';

export default function Home() {
  return (
    <>
      <NavbarComponent/>
      < HomeBackground/>
   <div className="container py-4">
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <div className="border border-3 p-3 h-100">
              <JustListed />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="border border-3 p-3 h-100">
              <JustSold />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
