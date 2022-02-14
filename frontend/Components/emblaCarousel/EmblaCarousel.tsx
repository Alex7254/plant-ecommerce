import React, { useState, useEffect, useCallback, cloneElement } from "react";
import  useEmblaCarousel  from "embla-carousel-react";
import styled from "styled-components";
import { DotButton, PrevButton, NextButton } from "./EmlbaCarouselButtons";

const Embla = styled.div`
  position: relative;
`;

const Viewport = styled.div`
  overflow: hidden;
  /* background-color: red; */
  &.is-draggable {
    cursor: move;
    cursor: grab;
  }

  &.is-dragging {
    cursor: grabbing;
  }
`;

const Container = styled.div`
/* background-color: red; */
  display: flex;
  will-change: transform;
  /* margin-left: -1rem; */
  &:first-child {
    margin-left: 0;
  }
`;

const Slide = styled.div`
  margin-left: 4rem;
  flex: 0 0 auto;
  position: relative;
  /* padding-left: 1rem; */

`;

const SlideInner = styled.div`
  position: relative;
`;


const EmblaCarouselComponent = ({ children }) => {
  const [EmblaCarouselReact, embla] = useEmblaCarousel({ loop: true, align: 'start' });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback((index) => embla.scrollTo(index), [embla]);
  const scrollPrev = useCallback(() => embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla.scrollNext(), [embla]);

  useEffect(() => {
    const onSelect = () => {
      setSelectedIndex(embla.selectedScrollSnap());
      setPrevBtnEnabled(embla.canScrollPrev());
      setNextBtnEnabled(embla.canScrollNext());
    };
    if (embla) {
      setScrollSnaps(embla.scrollSnapList());
      embla.on("select", onSelect);
      onSelect();
    }
  }, [embla]);

  return (
    <Embla>
      <Viewport ref={EmblaCarouselReact}>
        <Container>
          {children.map((Child, index) => (
            <Slide key={index}>
              <SlideInner>{Child}</SlideInner>
            </Slide>
          ))}
        </Container>
      </Viewport>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </Embla>
  );
};

export default EmblaCarouselComponent;
