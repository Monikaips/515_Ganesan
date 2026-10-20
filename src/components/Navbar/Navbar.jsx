import { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { navMore, navPrimary } from '../../data/site.js';
import { menuItem, menuList, menuOverlay } from '../../motion/index.js';
import './Navbar.css';

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();
  const moreId = useId();
  const overlayId = useId();
  const moreRef = useRef(null);
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const overlayRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const moreActive = navMore.some((link) => location.pathname === link.to);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const previouslyFocused = document.activeElement;
    const focusClose = () => closeButtonRef.current?.focus();
    const frame = window.requestAnimationFrame(focusClose);

    const onKey = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== 'Tab' || !overlayRef.current) return;

      const nodes = [...overlayRef.current.querySelectorAll(FOCUSABLE)].filter(
        (node) =>
          !node.hasAttribute('disabled') &&
          node.getAttribute('aria-hidden') !== 'true',
      );
      if (nodes.length === 0) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKey);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('keydown', onKey);
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      } else {
        menuButtonRef.current?.focus();
      }
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setMoreOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (!moreOpen) return undefined;
    const onPointer = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('pointerdown', onPointer);
    return () => document.removeEventListener('pointerdown', onPointer);
  }, [moreOpen]);

  const overlayMotion = reduceMotion
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        variants: menuOverlay,
        initial: 'hidden',
        animate: 'visible',
        exit: 'exit',
      };

  return (
    <header className="navbar">
      <Link to="/" className="navbar__mark" onClick={closeMenu}>
        515
      </Link>

      <nav className="navbar__desktop" aria-label="Primary">
        {navPrimary.map((link) => (
          <NavLink key={link.to} to={link.to}>
            {link.label}
          </NavLink>
        ))}

        <div className="navbar__more" ref={moreRef}>
          <button
            type="button"
            className={[
              'navbar__more-toggle',
              moreOpen || moreActive ? 'is-active' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            aria-expanded={moreOpen}
            aria-haspopup="true"
            aria-controls={moreId}
            onClick={() => setMoreOpen((value) => !value)}
          >
            More
          </button>
          {moreOpen && (
            <ul id={moreId} className="navbar__more-menu" role="list">
              {navMore.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} onClick={() => setMoreOpen(false)}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>

      <button
        ref={menuButtonRef}
        className="navbar__toggle"
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls={overlayId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? 'Close' : 'Menu'}
      </button>

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              {...overlayMotion}
              ref={overlayRef}
              id={overlayId}
              className="navbar__overlay"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
            >
              <div className="navbar__overlay-bar">
                <Link
                  to="/"
                  className="navbar__mark navbar__mark--on-dark"
                  onClick={closeMenu}
                >
                  515
                </Link>
                <button
                  ref={closeButtonRef}
                  className="navbar__close"
                  type="button"
                  aria-label="Close menu"
                  onClick={closeMenu}
                >
                  Close
                </button>
              </div>

              <motion.nav
                className="navbar__mobile"
                aria-label="Site"
                variants={reduceMotion ? undefined : menuList}
                initial={reduceMotion ? false : 'hidden'}
                animate="visible"
              >
                <p className="navbar__group-label">Main</p>
                {navPrimary.map((link) => (
                  <motion.div key={link.to} variants={reduceMotion ? undefined : menuItem}>
                    <NavLink to={link.to} onClick={closeMenu}>
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}

                <p className="navbar__group-label">More pages</p>
                {navMore.map((link) => (
                  <motion.div key={link.to} variants={reduceMotion ? undefined : menuItem}>
                    <NavLink
                      className="navbar__mobile-link--secondary"
                      to={link.to}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </header>
  );
}
