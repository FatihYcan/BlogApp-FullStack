import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";
import styled from "@mui/material/styles/styled";
import Skeleton from "@mui/material/Skeleton";

const SyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",
  backgroundColor: (theme.vars || theme).palette.background.paper,
  "&:hover": {
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
}));

const SyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,
  "&:last-child": {
    paddingBottom: 16,
  },
});

export default function BlogCardSkeleton() {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <SyledCard variant="outlined">
        <Skeleton
          variant="rectangular"
          width="100%"
          height={200}
          sx={{ bgcolor: "grey.300" }}
        />
        <SyledCardContent>
          <Skeleton
            variant="text"
            width="40%"
            height={20}
            sx={{ bgcolor: "grey.300" }}
          />
          <Skeleton
            variant="text"
            width="80%"
            height={30}
            sx={{ bgcolor: "grey.300" }}
          />
          <Skeleton
            variant="text"
            width="100%"
            height={60}
            sx={{ bgcolor: "grey.300" }}
          />
        </SyledCardContent>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            height: "50px",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Skeleton
            variant="circular"
            width={24}
            height={24}
            sx={{ bgcolor: "grey.300" }}
          />
          <Skeleton
            variant="circular"
            width={24}
            height={24}
            sx={{ bgcolor: "grey.300" }}
          />
          <Skeleton
            variant="circular"
            width={24}
            height={24}
            sx={{ bgcolor: "grey.300" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1,
              alignItems: "center",
            }}
          >
            <Skeleton
              variant="circular"
              width={30}
              height={30}
              sx={{ bgcolor: "grey.300" }}
            />
            <Skeleton
              variant="text"
              width={60}
              height={20}
              sx={{ bgcolor: "grey.300" }}
            />
          </Box>
          <Skeleton
            variant="text"
            width={80}
            height={20}
            sx={{ bgcolor: "grey.300" }}
          />
        </Box>
      </SyledCard>
    </Grid>
  );
}
