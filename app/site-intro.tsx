'use client';

import { useCallback, useEffect, useRef } from 'react';
import OfficeLogo from './components/office-logo';

const sessionKey = 'marega-vargas-intro-seen-v1';

export default function SiteIntro() {
  const intro = useRef<HTMLDivElement>(null);
  const cleanup = useRef<(() => void) | null>(null);
  const finish = useCallback(() => {
    cleanup.current?.();
    cleanup.current = null;
    if (intro.current) intro.current.hidden = true;
    try { sessionStorage.setItem(sessionKey, '1'); } catch { /* Storage is optional. */ }
  }, []);

  useEffect(() => {
    const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
    let seen = false;
    try { seen = sessionStorage.getItem(sessionKey) === '1'; } catch { /* Private mode fallback. */ }
    // Development-only replay for reviewing the transition without clearing storage.
    const replay = process.env.NODE_ENV === 'development'
      && new URLSearchParams(window.location.search).get('intro') === '1';
    if (!intro.current || motionPreference.matches || (seen && !replay)
      || window.location.hash || window.scrollY > 16 || document.visibilityState === 'hidden') return;
    const element = intro.current;
    element.hidden = false;
    // CSS owns the timeline. The timeout is only a failsafe, not a second animation clock.
    const timer = window.setTimeout(finish, 1600);
    const onEnd = (event: AnimationEvent) => {
      if (event.target === element && event.animationName === 'aliceLoaderOut') finish();
    };
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape' || event.key === 'Tab') finish(); };
    const onVisibility = () => { if (document.visibilityState === 'hidden') finish(); };
    const onMotionChange = () => { if (motionPreference.matches) finish(); };
    element.addEventListener('animationend', onEnd);
    document.addEventListener('keydown', onKey);
    document.addEventListener('visibilitychange', onVisibility);
    motionPreference.addEventListener('change', onMotionChange);
    window.addEventListener('scroll', finish, { passive: true, once: true });
    const release = () => {
      window.clearTimeout(timer);
      element.removeEventListener('animationend', onEnd);
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('visibilitychange', onVisibility);
      motionPreference.removeEventListener('change', onMotionChange);
      window.removeEventListener('scroll', finish);
      element.hidden = true;
    };
    cleanup.current = release;
    return () => {
      release();
      if (cleanup.current === release) cleanup.current = null;
    };
  }, [finish]);

  return (
    <div className="alice-loader" ref={intro} hidden>
      <div className="alice-file" aria-hidden="true">
        <OfficeLogo light />
        <small>Advocacia Especializada</small>
      </div>
      <p>Cada caso exige uma leitura individualizada.</p>
      <button className="intro-skip" type="button" onClick={finish}>Entrar no site <span aria-hidden="true">↗</span></button>
    </div>
  );
}
