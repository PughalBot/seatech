import { Paper } from "@mui/material";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

export default function CarouselComponent() {
  const slides = [
    "https://cdn.discordapp.com/attachments/981618787491127306/1078748875063570532/c1.png",
    "https://cdn.discordapp.com/attachments/750752324712136828/1078909357984591872/pexels-photo-1884581.png",
    "https://cdn.discordapp.com/attachments/750752324712136828/1078910045556842496/pexels-photo-996329.png",
    "https://cdn.discordapp.com/attachments/750752324712136828/1078910290470637638/pexels-photo-3755706.png",
    "https://cdn.discordapp.com/attachments/750752324712136828/1078910557727502346/pexels-photo-3839432.png",
  ];

  return (
    <div style={{ position: 'relative', width: '100%', height: '80vh' }}>
      <Carousel
        autoPlay={false}
        animation='slide'
        indicators={true}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        fullHeightHover={false}
      >
        {slides.map((url, index) => (
          <Item key={index} url={url} />
        ))}
      </Carousel>
    </div>
  );
}

function Item({ url }) {
  return (
    <Paper>
      <Image
        src={url}
        alt='carousel-slide'
        layout='fill'
        objectFit='contain'
      />
    </Paper>
  );
}


