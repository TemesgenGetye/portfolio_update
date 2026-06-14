"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav";
import gsap from "gsap";
import Rounded from "../../common/RoundedButton";
import Magnetic from "../../common/Magnetic";
import Link from "next/link";

export default function Header({ customClass }) {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    let ScrollTrigger;
    (async () => {
      const scrollModule = await import("gsap/ScrollTrigger");
      ScrollTrigger = scrollModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(button.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight,
          onLeave: () => {
            gsap.to(button.current, {
              scale: 1,
              duration: 0.25,
              ease: "power1.out",
            });
          },
          onEnterBack: () => {
            gsap.to(
              button.current,
              { scale: 0, duration: 0.25, ease: "power1.out" },
              setIsActive(false)
            );
          },
        },
      });
    })();
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    {
      href: "https://drive.google.com/file/d/1U75R-jupRgRVitUDhw4Q77tup70Vq5H2/view?usp=drive_link",
      label: "Resume",
      external: true,
    },
    { href: "#footer", label: "Contact" },
  ];

  return (
    <>
      <header ref={header} className={`${styles.header} ${customClass}`}>
        <div className={styles.logo}>
          <div className={styles.name}>
            <p className={styles.codeBy}>Temesgen</p>
            <p className={styles.dennis}>Getye</p>
          </div>
        </div>
        {!isMobile && (
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <Magnetic key={item.label}>
                <div className={styles.el}>
                  {item.external ? (
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <Link href={item.href}>{item.label}</Link>
                  )}
                  <div className={styles.indicator}></div>
                </div>
              </Magnetic>
            ))}
          </nav>
        )}
      </header>
      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button}`}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
