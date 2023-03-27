import CrewListItem from "./CrewListItem";
import "./Crew.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const settings = {
  perPage: 1,
  arrows: true,
  pagination: true,
  drag: "free",
  snap: true
};

const CrewList = ({ data }) => {
  return (
    <div>
      <Splide options={{ ...settings }}>
        {data.map((m) => {
          return (
            <SplideSlide key={m.id}>
              <CrewListItem member={m} />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default CrewList;
