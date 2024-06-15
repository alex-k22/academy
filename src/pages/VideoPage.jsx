import Container from "components/Shared/Container";
import VideoCard from "../components/VideoCard/VideoCard";
import Loader from "../components/Loader/Loader";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { getData } from "../API/fetch";
import { useEffect, useState } from "react";
import css from "../components/CardSet/CardSet.module.scss";

const VideoPage = () => {
   
  const [allVideos, setAllVideos] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus("pending");
        const videos = await getData("video");

        if (videos.length === 0) {
          Notify.failure("Sorry, but nothing found");
          setStatus("rejected");
        }
        if (videos.length > 0) {
          setStatus("resolved");
        }

        setAllVideos(videos);
      } catch (error) {
        console.log(error);
        Notify.failure(error.message);
        setStatus("rejected");
      }
    };
    fetchData();
  }, []);
  
  
  const sortedVideos = [...allVideos].sort((a, b) => new Date(b.date) - new Date(a.date)
  );

  
  
  
  
  return (
        <section className="section">
      <Container>
        {allVideos && (
          <div>
            <ul className={css.set}>
              {sortedVideos.map((videos) => {
                return <VideoCard videos={videos} key={videos.date} />;
              })}
            </ul>
          </div>
        )}
        {status === "pending" && <Loader />}
      </Container>
        </section>
      );
}

export default VideoPage;