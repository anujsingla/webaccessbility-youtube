import {
  Brand,
  Nav,
  NavItem,
  NavList,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
} from "@patternfly/react-core";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import accessbilityImage from "../../../images/accessibility.jpg";

interface IProps {
  children: ReactNode;
}

export function AppLayout({ children }: IProps) {
  const PageNav = (
    <>
      <a className="skipMainContent" href="#main-content">
        Skip to main content
      </a>
      <Nav aria-label="Nav" variant="horizontal">
        <NavList>
          <NavItem itemId="Perceivable">
            <NavLink to="perceivable">Perceivable</NavLink>
          </NavItem>
          <NavItem itemId="Operable">
            <NavLink to="operable">Operable</NavLink>
          </NavItem>
          <NavItem itemId="Understandable">
            <NavLink to="understandable">Understandable</NavLink>
          </NavItem>
          <NavItem itemId="Robust">
            <NavLink to="robust">Robust</NavLink>
          </NavItem>
          <NavItem itemId="ARIA">
            <NavLink to="aria">ARIA</NavLink>
          </NavItem>
          <NavItem itemId="htmlForm">
            <NavLink to="htmlForm">Forms</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </>
  );
  const Header = (
    <PageHeader
      logo={
        <NavLink to="/">
          <Brand src={accessbilityImage} alt="Patternfly Logo" />
        </NavLink>
      }
      topNav={PageNav}
    />
  );
  return (
    <Page header={Header}>
      <PageSection id="main-content" variant={PageSectionVariants.light}>
        {children}
      </PageSection>
    </Page>
  );
}
