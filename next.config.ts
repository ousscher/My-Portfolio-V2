import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/figma",
        destination:
          "https://www.figma.com/board/MRLns48vIyL0O1w15IPOqZ/Untitled?node-id=1-463&t=DjgaXI2TQjNbt2CS-1",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
