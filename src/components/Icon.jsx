export default function Icon({ name, className = "", ...props }) {
  return (
    <svg className={`icon ${className}`} aria-hidden="true" {...props}>
      <use href={`#i-${name}`} />
    </svg>
  );
}
