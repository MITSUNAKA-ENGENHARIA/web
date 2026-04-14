"use client";

import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Link } from "@radix-ui/themes";
import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Quem Somos", href: "/#quemsomos" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Obras Realizadas", href: "/obras" },
];

function WhatsAppIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.117 1.534 5.836L.057 23.215a.75.75 0 0 0 .92.921l5.379-1.477A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.5-5.222-1.377l-.374-.217-3.892 1.069 1.085-3.773-.23-.386A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  );
}

function SocialPill({
  href,
  label,
  icon,
  greenHover,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  greenHover?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        color: "rgba(255,255,255,0.78)",
        textDecoration: "none",
        fontSize: "0.8rem",
        padding: "0.4rem 0.75rem",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: "999px",
        transition: "all 0.2s",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.color = "white";
        el.style.borderColor = greenHover ? "rgba(37,211,102,0.6)" : "rgba(255,255,255,0.5)";
        el.style.background = greenHover ? "rgba(37,211,102,0.1)" : "rgba(255,255,255,0.06)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.color = "rgba(255,255,255,0.78)";
        el.style.borderColor = "rgba(255,255,255,0.2)";
        el.style.background = "transparent";
      }}
    >
      {icon}
      {label}
    </a>
  );
}

function SocialIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "36px",
        height: "36px",
        borderRadius: "8px",
        background: "rgba(255,255,255,0.1)",
        border: "1px solid rgba(255,255,255,0.15)",
        color: "white",
        transition: "all 0.2s",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.18)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
      }}
    >
      {icon}
    </a>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 999,
          background: scrolled
            ? "rgba(10, 25, 60, 0.97)"
            : "rgba(10, 25, 60, 0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid transparent",
          transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.25)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/*logo*/}
          <Link
            href="/#home"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <Image
              src="/images/mnk.png"
              alt="MNK Engenharia"
              width={120}
              height={120}
              style={{ objectFit: "contain", mixBlendMode: "screen" }}
            />
          </Link>

          <nav className="header-desktop" style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: "rgba(255,255,255,0.78)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 450,
                  padding: "0.4rem 0.75rem",
                  borderRadius: "6px",
                  transition: "color 0.2s, background 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "white";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.78)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/*links*/}
          <div className="header-desktop" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <SocialPill
              href="https://www.instagram.com/mitsunakaengenharia"
              label="@mitsunakaengenharia"
              icon={<InstagramLogoIcon width={15} height={15} />}
            />
            <SocialPill
              href="https://wa.me/5511925319217"
              label="(11) 92531-9217"
              icon={<WhatsAppIcon />}
              greenHover
            />
          </div>

          {/*mobile icons*/}
          <div className="header-mobile" style={{ display: "none", alignItems: "center", gap: "0.6rem" }}>
            <SocialIcon
              href="https://www.instagram.com/mitsunakaengenharia"
              label="Instagram"
              icon={<InstagramLogoIcon width={18} height={18} color="white" />}
            />
            <SocialIcon
              href="https://wa.me/5511925319217"
              label="WhatsApp"
              icon={<WhatsAppIcon size={18} />}
            />
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "8px",
                width: "36px",
                height: "36px",
                cursor: "pointer",
                color: "white",
                fontSize: "1.1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/*mobile*/}
        {menuOpen && (
          <div
            className="header-mobile"
            style={{
              flexDirection: "column",
              background: "rgba(8, 20, 50, 0.98)",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              padding: "0.75rem 1.5rem 1rem",
              gap: "0.25rem",
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "rgba(255,255,255,0.82)",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  padding: "0.65rem 0.5rem",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  display: "block",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <style>{`
        @media (min-width: 900px) {
          .header-desktop { display: flex !important; }
          .header-mobile  { display: none !important; }
        }
        @media (max-width: 899px) {
          .header-desktop { display: none !important; }
          .header-mobile  { display: flex !important; }
        }
      `}</style>
    </>
  );
}