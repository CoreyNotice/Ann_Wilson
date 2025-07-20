// This file lives at: src/app/just-listed/page.js
export const dynamic = 'force-dynamic'; // ensures fresh data in App Router (Next.js 13+)

async function getListings() {
  // Replace this URL with your real backend endpoint
  const res = await fetch('http://localhost:4000/api/listings', {
    cache: 'no-store',

  });
  console.log(res)

  if (!res.ok) throw new Error('Failed to fetch listings');
  return res.json();
}

export default async function JustListed() {
  const listings = await getListings();
  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">Just Listed</h1>

      <div className="row g-4">
        {listings.map((listing) => (
          <div className="col-sm-6 col-md-4" key={listing.id}>
            <div className="card h-100">
              <img
                src={listing.imageUrl}
                className="card-img-top"
                alt={listing.title}
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{listing.title}</h5>
                <p className="card-text text-muted">${listing.price.toLocaleString()}</p>
                <a href="#" className="btn btn-primary mt-auto">View</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
