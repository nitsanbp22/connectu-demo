export default function ConnectUIcon({ size = 40, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <circle cx="21" cy="18" r="8" fill="#008C95" />
      <circle cx="43" cy="18" r="8" fill="#008C95" opacity="0.9" />
      <path
        d="M10 46c1.8-10.2 8.2-16.2 16-16.2 4.2 0 7.2 1.5 9.4 4.1C32.9 39.7 27.4 44 19.8 44H17v6h-5.4c-1.1 0-1.8-.9-1.6-2Z"
        fill="#008C95"
      />
      <path
        d="M54 46c-1.8-10.2-8.2-16.2-16-16.2-4.2 0-7.2 1.5-9.4 4.1C31.1 39.7 36.6 44 44.2 44H47v6h5.4c1.1 0 1.8-.9 1.6-2Z"
        fill="#008C95"
        opacity="0.9"
      />
      <path
        d="M32 50.5 20.7 39.8c-3.5-3.3-1.1-9.2 3.8-9.2 2.2 0 4.2 1.3 5.1 3.2L32 38.6l2.4-4.8c1-1.9 2.9-3.2 5.1-3.2 4.9 0 7.3 5.9 3.8 9.2L32 50.5Z"
        fill="#EAF6F7"
        stroke="#008C95"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}
