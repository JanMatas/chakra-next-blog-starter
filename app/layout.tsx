// app/layout.tsx
import { Metadata } from "next";
import { Providers } from "./providers";

export const generateMetadata = (): Metadata => {
  return {
    title: "Chakra + Next13 + MDX blog",
    description:
      "Complete configuration with SSR, responsive design, fast refresh and image optimization.",
    openGraph: {
      title: "Chakra + Next13 + MDX blog",
      description:
        "Complete configuration with SSR, responsive design, fast refresh and image optimization.",
      siteName: "Chakra + Next13 + MDX blog",
      images: [
        {
          url: "/blog.png",
        },
      ],
    },
  };
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}