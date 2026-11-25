const baseProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.9,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export function GraduationCapIcon({ className = '' }) {
  return (
    <svg {...baseProps} className={className}>
      <path d="M22 10L12 5L2 10L12 15L22 10Z" />
      <path d="M6 12V17C6 18.7 8.7 20 12 20C15.3 20 18 18.7 18 17V12" />
      <path d="M22 10V15" />
    </svg>
  );
}

export function BookOpenIcon({ className = '' }) {
  return (
    <svg {...baseProps} className={className}>
      <path d="M2 4H8C10.2 4 12 5.8 12 8V20C12 18.3 10.7 17 9 17H2V4Z" />
      <path d="M22 4H16C13.8 4 12 5.8 12 8V20C12 18.3 13.3 17 15 17H22V4Z" />
    </svg>
  );
}

export function ShieldCheckIcon({ className = '' }) {
  return (
    <svg {...baseProps} className={className}>
      <path d="M12 3L4 6.5V12C4 16.9 7.4 20.5 12 22C16.6 20.5 20 16.9 20 12V6.5L12 3Z" />
      <path d="M9 12.5L11 14.5L15.5 10" />
    </svg>
  );
}

export function UsersIcon({ className = '' }) {
  return (
    <svg {...baseProps} className={className}>
      <path d="M16 21V19C16 16.8 14.2 15 12 15H6C3.8 15 2 16.8 2 19V21" />
      <circle cx="9" cy="8" r="3.5" />
      <path d="M22 21V19C22 17.3 20.9 15.8 19.3 15.3" />
      <path d="M15.8 4.7C17.3 5.2 18.4 6.6 18.4 8.2C18.4 9.8 17.3 11.2 15.8 11.7" />
    </svg>
  );
}

export function SparklesIcon({ className = '' }) {
  return (
    <svg {...baseProps} className={className}>
      <path d="M12 3L13.8 8.2L19 10L13.8 11.8L12 17L10.2 11.8L5 10L10.2 8.2L12 3Z" />
      <path d="M19 15L19.8 17.2L22 18L19.8 18.8L19 21L18.2 18.8L16 18L18.2 17.2L19 15Z" />
    </svg>
  );
}

export function LayersIcon({ className = '' }) {
  return (
    <svg {...baseProps} className={className}>
      <polygon points="12 3 2 8 12 13 22 8 12 3" />
      <polyline points="2 13 12 18 22 13" />
      <polyline points="2 18 12 23 22 18" />
    </svg>
  );
}

export function SendIcon({ className = '' }) {
  return (
    <svg {...baseProps} className={className}>
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

export function CalendarCheckIcon({ className = '' }) {
  return (
    <svg {...baseProps} className={className}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <line x1="16" y1="3" x2="16" y2="7" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M9 15.5L11 17.5L15 13.5" />
    </svg>
  );
}

export function PlayCircleIcon({ className = '' }) {
  return (
    <svg {...baseProps} className={className}>
      <circle cx="12" cy="12" r="9" />
      <polygon points="10 8.5 16 12 10 15.5 10 8.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function DatabaseIcon({ className = '' }) {
  return (
    <svg {...baseProps} className={className}>
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5V12C4 13.7 7.6 15 12 15C16.4 15 20 13.7 20 12V5.5" />
      <path d="M4 12V18.5C4 20.2 7.6 21.5 12 21.5C16.4 21.5 20 20.2 20 18.5V12" />
    </svg>
  );
}

export function CpuIcon({ className = '' }) {
  return (
    <svg {...baseProps} className={className}>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="0.5" />
      <line x1="9" y1="2" x2="9" y2="6" />
      <line x1="15" y1="2" x2="15" y2="6" />
      <line x1="9" y1="18" x2="9" y2="22" />
      <line x1="15" y1="18" x2="15" y2="22" />
      <line x1="2" y1="9" x2="6" y2="9" />
      <line x1="2" y1="15" x2="6" y2="15" />
      <line x1="18" y1="9" x2="22" y2="9" />
      <line x1="18" y1="15" x2="22" y2="15" />
    </svg>
  );
}

export function GitBranchIcon({ className = '' }) {
  return (
    <svg {...baseProps} className={className}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="M6 8.5V15.5" />
      <path d="M18 8.5C18 12.5 14 13 6 13" />
    </svg>
  );
}

export function CheckCircleIcon({ className = '' }) {
  return (
    <svg {...baseProps} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.3L10.8 14.6L15.8 9.6" />
    </svg>
  );
}

export function AlertTriangleIcon({ className = '' }) {
  return (
    <svg {...baseProps} className={className}>
      <path d="M10.3 4.2L2.3 18C1.7 19 2.4 20.3 3.6 20.3H20.4C21.6 20.3 22.3 19 21.7 18L13.7 4.2C13.1 3.1 10.9 3.1 10.3 4.2Z" />
      <line x1="12" y1="9.5" x2="12" y2="14" />
      <circle cx="12" cy="17" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function UserCheckIcon({ className = '' }) {
  return (
    <svg {...baseProps} className={className}>
      <path d="M15 21V19C15 16.8 13.2 15 11 15H5C2.8 15 1 16.8 1 19V21" />
      <circle cx="8" cy="8" r="3.5" />
      <path d="M16 11.5L18 13.5L22.5 9" />
    </svg>
  );
}

export function ArrowDownRightIcon({ className = '' }) {
  return (
    <svg {...baseProps} className={className}>
      <line x1="7" y1="7" x2="17" y2="17" />
      <polyline points="17 8 17 17 8 17" />
    </svg>
  );
}
