import SectionWrapper from "../../../hoc/Layout/SectionWrapper";
import SectionTitle from "../../../Components/common/SectionTitle";
import ProductCard from "../../common/ProductCard";

const FeaturedPlants = () => {
  return (
    <SectionWrapper>
      <SectionTitle>Featured Plants</SectionTitle>
      <ProductCard imgUrl = "/img/plant-1b.png"/>
    </SectionWrapper>
  );
};

export default FeaturedPlants;