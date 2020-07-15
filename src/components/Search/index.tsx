import React from "react";
import { Container, SearchField, IconContainer } from "./styled";
import { Props } from "./Model";
import Icon from "components/Icon";
import { useCycle, Variants, AnimatePresence } from "framer-motion";
import { Backdrop } from "styled/shared";
import { TextField } from "components/Input";

const backdropVariants: Variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};
const searchVariants: Variants = {
  open: {
    zIndex: 20,
    position: "relative",
    backgroundColor: "var(--main-bg-color)",
    transformOrigin: "bottom",
  },
  closed: {
    zIndex: 10,
    backgroundColor: "var(--separator-color)",
    transformOrigin: "bottom",
  },
};
const iconVariants: Variants = {
  open: {
    rotate: "180deg",
  },
  closed: {
    rotate: "0deg",
  },
};

const Search: React.FC<Props> = (props) => {
  const { fullWidth } = props;
  const [isOpenSearch, toggleOpenSearch] = useCycle(false, true);

  return (
    <Container fullWidth={fullWidth} animate>
      <SearchField.container
        onClick={() => !isOpenSearch && toggleOpenSearch()}
        variants={searchVariants}
        animate={isOpenSearch ? "open" : "closed"}
      >
        <SearchField.header animate>
          Faça uma busca...
          <IconContainer variants={iconVariants}>
            <Icon name="expand-ios" />
          </IconContainer>
        </SearchField.header>
        {isOpenSearch && (
          <SearchField.body>
            <TextField placeholder="Busque aqui" fullWidth />

            <SearchField.results>
              <SearchField.resultItem>
                Tópico para seleção
              </SearchField.resultItem>
              <SearchField.resultItem>
                Tópico para seleção
              </SearchField.resultItem>
            </SearchField.results>
            <SearchField.footer>
              <SearchField.suggestion>
                <Icon name="plus" /> Não encontrou? Dê uma sugestão
              </SearchField.suggestion>
            </SearchField.footer>
          </SearchField.body>
        )}
      </SearchField.container>

      <AnimatePresence initial={false}>
        {isOpenSearch && (
          <Backdrop
            initial="closed"
            animate="open"
            exit="closed"
            variants={backdropVariants}
            onClick={() => toggleOpenSearch()}
          />
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Search;
