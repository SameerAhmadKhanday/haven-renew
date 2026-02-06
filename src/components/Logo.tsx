const Logo = ({ className = "w-9 h-9" }: { className?: string }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Outer square frame */}
    <rect
      x="2"
      y="2"
      width="44"
      height="44"
      rx="4"
      stroke="currentColor"
      strokeWidth="2.5"
      className="text-primary"
    />
    {/* M letter */}
    <path
      d="M10 36V14L18 26L24 18L30 26L38 14V36"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-primary"
    />
    {/* Superscript "2" */}
    <text
      x="38"
      y="16"
      fontSize="10"
      fontWeight="700"
      fill="currentColor"
      className="text-primary"
      fontFamily="'Playfair Display', serif"
    >
      ²
    </text>
  </svg>
);

export default Logo;
