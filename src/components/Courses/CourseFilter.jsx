import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CourseFilter() {
  const [filters, setFilters] = useState({
    area: "",
    price: "",
    duration: "",
  });

  const handleChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  return (
    <Stack
      direction={{ xs: "row", sm: "row" }}
      spacing={{ xs: 0, sm: 2, md: 4 }}
      sx={{
        flexDirection: { xs: "column", sm: "row", md: "row" },
        justifyContent: { xs: "flex-start", md: "flex-end" },
        alignItems: { xs: "flex-start", md: "flex-end" },

        borderRadius: "20px",
        paddingLeft: { xs: "1rem", md: "3rem" },
        paddingRight: "1rem",
        wrap: "wrap",
        marginTop: "2rem",
        backgroundColor: "primary.main",
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
            paddingY: 0.5,
            minHeight: "32px",
            color: "white",
            textAlign: "center",
          }}
          IconComponent={ExpandMoreIcon}
        >
          <MenuItem value="">Område</MenuItem>
          <MenuItem value="webbutveckling" sx={{ fontSize: "15px" }}>
            Webbutveckling
          </MenuItem>
          <MenuItem value="design" sx={{ fontSize: "15px" }}>
            Design
          </MenuItem>
          <MenuItem value="marketing" sx={{ fontSize: "15px" }}>
            Marknadsföring
          </MenuItem>
          <MenuItem value="data" sx={{ fontSize: "15px" }}>
            Data & Analys
          </MenuItem>
          <MenuItem value="business" sx={{ fontSize: "15px" }}>
            Företagsledning
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
          sx={{
            fontSize: "14px",
            paddingY: 0.5,
            minHeight: "32px",
            color: "white",
            textAlign: "center",
          }}
        >
          <MenuItem value="">Pris</MenuItem>
          <MenuItem value="free" sx={{ fontSize: "15px" }}>
            Gratis
          </MenuItem>
          <MenuItem value="0-500" sx={{ fontSize: "15px" }}>
            0-500 kr
          </MenuItem>
          <MenuItem value="500-1200" sx={{ fontSize: "15px" }}>
            500-1200 kr
          </MenuItem>
          <MenuItem value="1200-2000" sx={{ fontSize: "15px" }}>
            1200-2000 kr
          </MenuItem>
          <MenuItem value="2000+" sx={{ fontSize: "15px" }}>
            2000+ kr
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
          sx={{
            fontSize: "14px",
            paddingY: 0.5,
            minHeight: "32px",
            color: "white",
            textAlign: "center",
          }}
        >
          <MenuItem value="">Längd</MenuItem>
          <MenuItem value="1-2v" sx={{ fontSize: "15px" }}>
            1-2 veckor
          </MenuItem>
          <MenuItem value="3-4v" sx={{ fontSize: "15px" }}>
            3-4 veckor
          </MenuItem>
          <MenuItem value="1-2m" sx={{ fontSize: "15px" }}>
            1-2 månader
          </MenuItem>
          <MenuItem value="3-6m" sx={{ fontSize: "15px" }}>
            3-6 månader
          </MenuItem>
          <MenuItem value="6m+" sx={{ fontSize: "15px" }}>
            6+ månader
          </MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}
