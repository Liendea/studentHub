import NewsCard from "./NewsCard/NewsCard";
import { useEffect, useState } from "react";
import ResponsiveGrid from "../Grid/ResponsiveGrid";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function NewsComponent() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Hämta news fråm API
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
          url: article.url,
        }));

        setNews(filteredData);
        setIsLoading(false);
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
        sx={{
          textAlign: "center",
          my: "10rem",
          fontSize: {
            xs: "2.5rem", // mobil
            sm: "2.5rem", // små tablets
            md: "2.5rem", // laptops
            lg: "3rem", // stora skärmar
          },
        }}
      >
        Our latest news
      </Typography>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10rem",
          }}
        >
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
