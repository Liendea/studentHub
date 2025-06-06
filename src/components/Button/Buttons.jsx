import Button from "@mui/material/Button";

export default function Buttons({
  children,
  variant,
  color = "primary",
  sx,
  onClick,
}) {
  return (
    <>
      <Button
        variant={variant}
        color={color}
        onClick={onClick}
        sx={sx}
        disableElevation
      >
        {children}
      </Button>
    </>
  );
}
