"use client";

import { clinic } from "@/data/clinic";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap topbar__inner">
        <div className="topbar__group">
          <span className="topbar__item">
            <svg className="ico" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
            </svg>
            <span>{clinic.address.full}</span>
          </span>
        </div>
        <div className="topbar__group">
          <a className="topbar__item" href={`tel:${clinic.phone.replace(/-/g, "")}`}>
            <svg className="ico" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.2 2.2z" />
            </svg>
            {clinic.phone}
          </a>
          <a className="topbar__item" href={`tel:${clinic.phoneAlt.replace(/-/g, "")}`}>
            {clinic.phoneAlt}
          </a>
        </div>
      </div>
    </div>
  );
}
