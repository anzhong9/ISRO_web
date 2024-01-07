import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white border-t-2 border-gray-500 border-dashed py-10 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-10">
          <div className="col-span-2">
            <h3 className="text-xl font-semibold mb-4">ISRO Headquarters</h3>
            <h5>Antariksh Bhavan, NewBEL Road, Bengaluru-560 094</h5>
            <p className="mb-2">Phone: +91-80-22172261</p>
            <p className="mb-4">Email: contact@isro.gov.in</p>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4">Important Links</h4>
            <ol className="list-disc ">
              <li><a href="#">RTI</a></li>
              <li><a href="#">Feedback</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="">Website Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
            
              {/* Add remaining links here */}
            </ol>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4">Other Links</h4>
            <ol className="list-disc ">
              <li><a href="#">Sitemap</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Tenders</a></li>
              <li><a href="#">Galleries</a></li>
              <li><a href="#">Archives</a></li>

              {/* Add remaining links here */}
            </ol>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4">Connect Us!</h4>
            <ol className="list-disc ">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Help</a></li>
            </ol>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
