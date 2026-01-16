import { Link } from 'react-router-dom'
import tk1 from '../assets/images/tk-1.png'
import { EXTERNAL_LINKS } from '../constants'

const Hero: React.FC = () => {
  return (
    <section className="w-full py-16">
      <div className="align-element flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left: Text Content (60%) */}
        <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-[60%]">
          {/* Small Header - Larger */}
          <span className="text-lg font-semibold tracking-wide uppercase text-emerald-300 mb-8">
            Full Stack Engineer based in Australia
          </span>

          {/* Main Title - Controlled to 2-3 lines */}
          <h1 className="text-4xl lg:text-5xl text-gray-100 font-bold text-center lg:text-left mb-8 leading-snug w-full max-w-3xl">
            Building Scalable, Unified Digital Ecosystems.
          </h1>

          {/* Sub-headline - Larger & Brighter */}
          <p className="mb-10 text-lg md:text-xl font-normal leading-loose text-center lg:text-left max-w-2xl text-gray-300 font-sans">
            I don&apos;t just write code; I architect solutions. From
            high-performance Next.js booking engines to complex MERN operations
            dashboards.
          </p>

          {/* Buttons & Social Links - All in One Row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto flex-wrap">
            {/* Button 1 */}
            <Link
              to="/work"
              className="px-8 py-3 text-lg leading-none rounded-full bg-green-400 text-black font-semibold transition-all duration-200 hover:bg-green-500 active:bg-green-600 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
            >
              <span className="leading-none">View the Ecosystem</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transform group-hover:translate-y-0.5 transition-transform duration-200"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            {/* Button 2 */}
            <Link
              to={EXTERNAL_LINKS.RESUME}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 text-lg leading-none rounded-full border border-white/30 text-white font-medium transition-all duration-200 hover:border-white hover:bg-white/10 flex items-center justify-center gap-2"
            >
              <span className="leading-none">Download Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            {/* Divider */}
            <div className="hidden sm:block w-px h-10 bg-white/20 mx-2"></div>

            {/* Social Links - Same Row */}
            <div className="flex items-center gap-4">
              <a
                href={EXTERNAL_LINKS.GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-green-400 transition-colors duration-200"
                aria-label="GitHub profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={EXTERNAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-green-400 transition-colors duration-200"
                aria-label="LinkedIn profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Profile Image (40%) */}
        <div className="flex justify-center items-center w-full lg:w-[40%] mt-8 lg:mt-12">
          <div className="relative flex items-center justify-center">
            {/* Subtle glow effect */}
            <div className="absolute z-0 w-[280px] h-[280px] bg-green-500/10 rounded-full blur-3xl opacity-50"></div>

            {/* Profile Image */}
            <img
              src={tk1}
              alt="Tracy Kong - Full Stack Engineer"
              className="w-64 h-64 object-cover rounded-full shadow-2xl relative z-20 border border-white/10"
              style={{ objectPosition: '50% 30%' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
