import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function NewsCard({ data }) {
  return (
    <Box sx={{ width: { xs: "284px", sm: "284px", md: "384px" } }}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Box
              sx={{
                backgroundImage: `url(${data.img})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "220px",
              }}
            ></Box>
            <Box>
              <Typography
                gutterBottom
                variant="body1"
                sx={{
                  color: "purple",
                  fontSize: "12px",
                  marginTop: "20px",
                  fontWeight: "600",
                }}
              >
                {data.subject ?? "subject"}
              </Typography>
              <Stack my="1rem">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ position: "relative" }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    pr="2rem"
                    sx={{ fontSize: "16px", fontWeight: "600" }}
                  >
                    {data.title}
                  </Typography>
                  <ArrowOutwardIcon
                    fontSize="xs"
                    sx={{ position: "absolute", top: "5px", right: "10px" }}
                  />
                </Box>

                <Typography
                  variant="body2"
                  color="primary.main"
                  my="1rem"
                  sx={{ opacity: "0.8" }}
                >
                  {data.description}
                </Typography>
              </Stack>
            </Box>
            <Box
              display="flex"
              alignItems={"center"}
              sx={{ marginTop: "2rem" }}
            >
              <Avatar
                alt={data.name}
                src={data.profileImg}
                sx={{ width: 30, height: 30 }}
              />{" "}
              <Stack ml={1}>
                <Typography variant="body1" sx={{ fontSize: "12px" }}>
                  {data.name}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "10px" }}>
                  {data.date}
                </Typography>
              </Stack>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default NewsCard;
