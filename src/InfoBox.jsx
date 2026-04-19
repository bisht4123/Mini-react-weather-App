import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox({ info }) {

  // Default Image (same as video)
  const INIT_URL =
    "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=800&auto=format&fit=crop";

  return (
    <div className="InfoBox">

      <h3>Weather Info - {info.weather}</h3>

      {/* Card Centered */}
      <Card sx={{ maxWidth: 345, margin: "20px auto" }}>

        {/* Image ADD KARNI HAI (THIS WAS MISSING) */}
        <CardMedia
          sx={{ height: 140 }}
          image={INIT_URL}
          title="weather image"
        />

        <CardContent>

          <Typography variant="h5">
            {info.city}
          </Typography>

          <Typography>
            Temperature = {info.temp}°C
          </Typography>

          <Typography>
            Humidity = {info.humidity}
          </Typography>

          <Typography>
            Min Temp = {info.tempMin}°C
          </Typography>

          <Typography>
            Max Temp = {info.tempMax}°C
          </Typography>

          <Typography>
            The weather can be described as <b>{info.weather}</b> and feels like {info.feelsLike}°C
          </Typography>

        </CardContent>
      </Card>

    </div>
  );
}