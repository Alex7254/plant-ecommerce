import SectionWrapper from "../../../hoc/Layout/SectionWrapper";
import SectionTitle from "../../../Components/common/SectionTitle";
import ProductCard from "../../common/ProductCard";
import EmblaCarouselComponent from "../../emblaCarousel/EmblaCarousel";

const FeaturedPlants = () => {
  return (
    <SectionWrapper>
      <SectionTitle>Featured Plants</SectionTitle>
      <EmblaCarouselComponent>
        <ProductCard productName="Crassula Ovata" imgUrl="/img/plant-1b.png" />
        <ProductCard productName="Crassula Ovata" imgUrl="/img/plant-2.png" />
        <ProductCard productName="Crassula Ovata" imgUrl="/img/plant-3.png" />
        <ProductCard productName="Crassula Ovata" imgUrl="/img/plant-4.png" />
        <ProductCard productName="Crassula Ovata" imgUrl="/img/plant-5.png" />
        <ProductCard productName="Crassula Ovata" imgUrl="/img/plant-1b.png" />
        <ProductCard productName="Crassula Ovata" imgUrl="/img/plant-1b.png" />
        <ProductCard productName="Crassula Ovata" imgUrl="/img/plant-1b.png" />
        <ProductCard productName="Crassula Ovata" imgUrl="/img/plant-1b.png" />
        <ProductCard productName="Crassula Ovata" imgUrl="/img/plant-1b.png" />
        <ProductCard productName="Crassula Ovata" imgUrl="/img/plant-1b.png" />
        <ProductCard productName="Crassula Ovata" imgUrl="/img/plant-1b.png" />
        <ProductCard productName="Crassula Ovata" imgUrl="/img/plant-1b.png" />
        <ProductCard productName="Crassula Ovata" imgUrl="/img/plant-1b.png" />
        <ProductCard productName="Crassula Ovata" imgUrl="/img/plant-1b.png" />
        <ProductCard productName="Crassula Ovata" imgUrl="/img/plant-1b.png" />
        <ProductCard productName="Crassula Ovata" imgUrl="/img/plant-1b.png" />
      </EmblaCarouselComponent>
    </SectionWrapper>
  );
};

export default FeaturedPlants;
