import * as React from 'react';
import { Footer, FooterGroup, FooterLink } from '@1milligram/design';

export const FooterBlock = () => (
    <footer className="block-footer">
        <div className="block-container">
            <Footer>
                <FooterGroup title="Open sources">
                    <FooterLink href="https://1loc.dev">1 LOC</FooterLink>
                    <FooterLink href="https://csslayout.io">CSS Layout</FooterLink>
                    <FooterLink href="https://getfrontend.tips">Front-end Tips</FooterLink>
                    <FooterLink href="https://htmldom.dev">HTML DOM</FooterLink>
                    <FooterLink href="https://thisthat.dev">this VS that</FooterLink>
                </FooterGroup>
                <FooterGroup title="Follow us">
                    <FooterLink href="https://github.com/uvacoder">GitHub</FooterLink>
                    <FooterLink href="https://codepen.io/uvacoder/uvacoder">Codepen</FooterLink>
                </FooterGroup>
            </Footer>

            <div className="block-footer__copyright">
                © 2020 — {new Date().getFullYear()}
            </div>
        </div>
    </footer>
);
