export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={`brand__mark ${className ?? ""}`} aria-hidden="true">
      <svg viewBox="0 0 64 64">
        <g fill="none" stroke="currentColor" strokeWidth="1.1">
          <circle cx="32" cy="32" r="20" />
          <circle cx="32" cy="32" r="6" />
          <g strokeWidth="0.8">
            <path d="M32 12v8M32 44v8M12 32h8M44 32h8M18 18l6 6M40 40l6 6M46 18l-6 6M24 40l-6 6" />
          </g>
        </g>
      </svg>
    </span>
  );
}
