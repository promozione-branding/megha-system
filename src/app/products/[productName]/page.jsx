import React from 'react';
import ProjectDetail from './Product';
import { allProducts } from '@/data';

export async function generateMetadata({ params }) {
  const { productName } = await params;

  const project = allProducts
    .flatMap((category) => category.products)
    .find((product) => product.slug === productName);

  if (!project) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    };
  }

  return {
    title: project.metaTitle || project.name,
    description:
      project.metaDescription ||
      project.shortDescription ||
      `Explore ${project.name} from our premium restroom partition collection.`,

    openGraph: {
      title: project.metaTitle || project.name,
      description:
        project.metaDescription ||
        project.shortDescription ||
        `Explore ${project.name} from our premium restroom partition collection.`,
      images: project.image
        ? [
          {
            url: project.image,
            alt: project.name,
          },
        ]
        : [],
    },
  };
}

export default function Page() {
  return <ProjectDetail />;
}