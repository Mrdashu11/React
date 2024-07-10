import React from 'react';

function Section1() {
  return (
    <>
      <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ padding: '35px' }}>
        <div className="container">
          <div className="row g-2">
            <div className="col-md-10">
              <div className="row g-2">
                <div className="col-md-4">
                  <input type="text" className="form-control border-0 py-3" placeholder="Search Keyword" aria-label="Search Keyword" />
                </div>
                <div className="col-md-4">
                  <select className="form-select border-0 py-3" aria-label="Property Type">
                    <option selected>Property Type</option>
                    <option value="1">Property Type 1</option>
                    <option value="2">Property Type 2</option>
                    <option value="3">Property Type 3</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select className="form-select border-0 py-3" aria-label="Location">
                    <option selected>Location</option>
                    <option value="1">Location 1</option>
                    <option value="2">Location 2</option>
                    <option value="3">Location 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <button className="btn btn-dark border-0 w-100 py-3">Search</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h1 className="mb-3">Property Types</h1>
            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
          </div>
          <div className="row g-4">
            {/* Property Types */}
            {propertyTypes.map((propertyType, index) => (
              <div key={index} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                <a className="cat-item d-block bg-light text-center rounded p-3" href="#">
                  <div className="rounded p-4">
                    <div className="icon mb-3">
                      <img className="img-fluid" src={propertyType.icon} alt="Icon" />
                    </div>
                    <h6>{propertyType.name}</h6>
                    <span>{propertyType.propertiesCount} Properties</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// Sample property types data
const propertyTypes = [
  { name: 'Apartment', icon: 'img/icon-apartment.png', propertiesCount: 123 },
  { name: 'Villa', icon: 'img/icon-villa.png', propertiesCount: 123 },
  { name: 'Home', icon: 'img/icon-house.png', propertiesCount: 123 },
  { name: 'Office', icon: 'img/icon-housing.png', propertiesCount: 123 },
  { name: 'Building', icon: 'img/icon-building.png', propertiesCount: 123 },
  { name: 'Townhouse', icon: 'img/icon-neighborhood.png', propertiesCount: 123 },
  { name: 'Shop', icon: 'img/icon-condominium.png', propertiesCount: 123 },
  { name: 'Garage', icon: 'img/icon-luxury.png', propertiesCount: 123 },
];

export default Section1;
