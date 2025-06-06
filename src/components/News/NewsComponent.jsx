import NewsCard from "./Newscard/NewsCard";
import { useEffect, useState } from "react";
import ResponsiveGrid from "../Grid/ResponsiveGrid";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material";
import Box from "@mui/material/Box";

function NewsComponent() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://dev.to/api/articles")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.map((article) => ({
          id: article.id,
          title: article.title,
          description: article.description,
          date: article.readable_publish_date,
          img: article.social_image,
          subject: article.tag_list[1],
          name: article.user.name,
          profileImg: article.user.profile_image,
        }));

        setNews(filteredData);
        setIsLoading(false);
        console.log(filteredData);
      })
      .catch((error) => {
        console.error("API anrop misslyckades, ", error);
      });
  }, []);

  return (
    <>
      <Typography
        variant="h3"
        color="secondary"
        sx={{ textAlign: "center", my: "10rem" }}
      >
        Our latest news
      </Typography>
      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <span className="loader"></span>
        </Box>
      ) : (
        <ResponsiveGrid>
          {news.map((article) => (
            <Grid size={{ xs: 4, sm: 4, md: 4, lg: 3 }} key={article.id}>
              <NewsCard data={article}></NewsCard>
            </Grid>
          ))}
        </ResponsiveGrid>
      )}
    </>
  );
}

export default NewsComponent;
