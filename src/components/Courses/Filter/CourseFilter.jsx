import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CourseFilter({ filters, setFilters }) {
  const handleChange = (filterType, value) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
  };
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 0, sm: 2, md: 4 }}
      sx={{
        justifyContent: { xs: "center", md: "center" },
        alignItems: { xs: "center", md: "center" },
        px: { xs: "1rem", md: "3rem" },
        mt: "2rem",
        mr: { md: "2rem" },
        ml: { md: "2rem" },
        backgroundColor: "black",
        minHeight: "50px",
        border: { xs: "none", sm: "1px solid white", md: "1px solid white" },
        borderRadius: "30px",
        svg: { color: "white" },
      }}
    >
      {/* Område */}
      <FormControl sx={{ width: 140 }} size="small" variant="standard">
        <Select
          displayEmpty
          value={filters.area}
          label="Område"
          onChange={(e) => handleChange("area", e.target.value)}
          sx={{
            fontSize: "14px",

            minHeight: "32px",
            color: "white",
            textAlign: "center",
          }}
          IconComponent={ExpandMoreIcon}
          disableUnderline
        >
          <MenuItem value="">Område</MenuItem>
          <MenuItem value="webbutveckling" sx={{ fontSize: "15px" }}>
            Webbutveckling
          </MenuItem>
          <MenuItem value="design" sx={{ fontSize: "15px" }}>
            Design
          </MenuItem>
          <MenuItem value="Databashantering" sx={{ fontSize: "15px" }}>
            Databashantering
          </MenuItem>
          <MenuItem value="DevOps" sx={{ fontSize: "15px" }}>
            DevOps
          </MenuItem>
          <MenuItem value="AI & Data Science" sx={{ fontSize: "15px" }}>
            AI & Data Science
          </MenuItem>
          <MenuItem value="Molnteknik" sx={{ fontSize: "15px" }}>
            Molnteknik
          </MenuItem>
          <MenuItem value="Cybersäkerhet" sx={{ fontSize: "15px" }}>
            Cybersäkerhet
          </MenuItem>
        </Select>
      </FormControl>
      {/* Pris */}
      <FormControl sx={{ width: 140 }} size="small" variant="standard">
        <Select
          displayEmpty
          value={filters.price}
          label="Pris"
          onChange={(e) => handleChange("price", e.target.value)}
          IconComponent={ExpandMoreIcon}
          disableUnderline
          sx={{
            fontSize: "14px",

            minHeight: "32px",
            color: "white",
            textAlign: "center",
          }}
        >
          <MenuItem value="">Pris</MenuItem>
          <MenuItem value="free" sx={{ fontSize: "15px" }}>
            Gratis
          </MenuItem>
          <MenuItem value="0-100" sx={{ fontSize: "15px" }}>
            0-100€
          </MenuItem>
          <MenuItem value="100-300" sx={{ fontSize: "15px" }}>
            100-300€
          </MenuItem>
          <MenuItem value="300-500" sx={{ fontSize: "15px" }}>
            300-500€
          </MenuItem>
          <MenuItem value="500+" sx={{ fontSize: "15px" }}>
            500€ +
          </MenuItem>
        </Select>
      </FormControl>
      {/* Längd */}
      <FormControl sx={{ width: 140 }} size="small" variant="standard">
        <Select
          displayEmpty
          value={filters.duration}
          label="Längd"
          onChange={(e) => handleChange("duration", e.target.value)}
          IconComponent={ExpandMoreIcon}
          disableUnderline
          sx={{
            fontSize: "14px",
            minHeight: "32px",
            color: "white",
            textAlign: "center",
          }}
        >
          <MenuItem value="">Längd</MenuItem>
          <MenuItem value="1-3v" sx={{ fontSize: "15px" }}>
            1-3 veckor
          </MenuItem>
          <MenuItem value="4-7v" sx={{ fontSize: "15px" }}>
            4-7 veckor
          </MenuItem>
          <MenuItem value="8-11v" sx={{ fontSize: "15px" }}>
            8-11 veckor
          </MenuItem>
          <MenuItem value="12-15v" sx={{ fontSize: "15px" }}>
            12-15 veckor
          </MenuItem>
          <MenuItem value="15v+" sx={{ fontSize: "15px" }}>
            15 veckor +
          </MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}
