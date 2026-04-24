import { Link, useParams, useSearchParams } from "react-router-dom";
import { weeks } from "../data/weeks";
import { Presentation } from "../components/Presentation";

export function WeekPage() {
  const { num } = useParams();
  const week = weeks.find((w) => String(w.number) === num);
  const [searchParams] = useSearchParams();
  const sliderParam = searchParams.get("slider");
  const parsed = sliderParam ? parseInt(sliderParam, 10) : NaN;
  const slideCount = week?.slides.length ?? 1;
  const initialSlider = !isNaN(parsed) && parsed >= 1 && parsed <= slideCount ? parsed - 1 : 0;
  if (!week) {
    return (
      <div className="home">
        <h1 className="home-title">Week not found</h1>
        <p>
          <Link to="/" className="mini-btn">
            <i className="fa-solid fa-arrow-left"></i> Back to lessons
          </Link>
        </p>
      </div>
    );
  }
  return <Presentation week={week} initialSlider={initialSlider} />;
}
