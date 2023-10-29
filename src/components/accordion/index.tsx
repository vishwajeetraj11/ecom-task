import React from "react";
import accordionStyles from "./accordion.module.scss";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

interface Props {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  toggleAccordion: () => void;
}

const Accordion = ({ children, title, isOpen, toggleAccordion }: Props) => {
  return (
    <div className={accordionStyles.accordionContainer}>
      <button
        type="button"
        onClick={toggleAccordion}
        className={accordionStyles.accordionHeader}
      >
        <h3 className={accordionStyles.accordionTitle}>{title}</h3>
        <div className={accordionStyles.accordionIcon}>
          {isOpen ? <BiChevronUp /> : <BiChevronDown />}
        </div>
      </button>
      <div className={accordionStyles.accordionContent}>
        {isOpen ? children : null}
      </div>
    </div>
  );
};

export default Accordion;
