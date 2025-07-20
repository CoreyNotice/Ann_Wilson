import JustSold from './JustSold';
import JustListed from './JustListed';
import HomeBackground from '../components/HomeBackground';
import NavbarComponent from '../components/NavbarComponent';

export default function Home() {
  return (
    <>
      <NavbarComponent/>
      < HomeBackground/>
      <div className="d-flex justify-content-between p-3">
        <JustListed/>
        <JustSold/>
      </div>
    </>
  );
}
