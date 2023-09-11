
import Link from "next/link";
import Container from "./Container/Container";
import Subscribe from "./Subscribe/Subscribe";

const Footer = () => {
  return <div className="text-yellow-50 py-12 bg-slate-800">
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <div>
            {/* Add logo */}
            <h4 className="text-yellow-300 font-semibold text-xl">NTech House</h4>
          </div>
          <p>Elevate Your Present with Solutions That Resonate with the Future, Empowering You to Lead the Charge in Embracing Technological Progress at Its Finest.</p>
         
        </div>

        <div>
          <h4 className="text-yellow-300 font-semibold text-xl">Service</h4>
          <p className='mt-2'>
            <Link href={'/'}>Desktop Computers</Link>
          </p>

          <p className='mt-2'>
            <Link href={'/'}>Laptops</Link>
          </p>
          <p className='mt-2'>
            <Link href={'/'}>VR Headsets</Link>
          </p>
          <p className='mt-2'>
            <Link href={'/'}>Drones</Link>
          </p>
          <p className='mt-2'>
            <Link href={'/'}>Monitors</Link>
          </p>
          <p className='mt-2'>
            <Link href={'/'}>Security Cameras</Link>
          </p>
        </div>

        <div>
          <h4 className="text-yellow-300 font-semibold text-xl">Company</h4>
          <p className='mt-2'>
          <Link href={'/'}>Service</Link>
          </p>
          <p className='mt-2'>
          <Link href={'/'}>Features</Link>
          </p>
          <p className='mt-2'>
          <Link href={'/'}>Our Team</Link>
          </p>
          <p className='mt-2'>
          <Link href={'/'}>Portfolio</Link>
          </p>
          <p className='mt-2'>
          <Link href={'/'}>Blog</Link>
          </p>
          <p className='mt-2'>
          <Link href={'/'}>Contact Us</Link>
          </p>
        </div>

     <Subscribe></Subscribe>




      </div>
      <div className="mt-5 pt-5 border-t-2 flex flex-col-reverse lg:flex-row justify-between">
        <div>
          <p className="text-center mt-5 lg:mt-0">Copyright NTech House</p>
        </div>
        <div className="flex justify-between space-x-3">
          <p>8819 Ohio St. South Gate,
            CA 90280</p>
          <p>ntechhouse@sample.com</p>
          <p>+8801796668991</p>
        </div>
      </div>
    </Container>
  </div>;
};

export default Footer;
